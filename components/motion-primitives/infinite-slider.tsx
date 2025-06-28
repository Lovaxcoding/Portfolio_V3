// src/components/motion-primitives/InfiniteSlider.tsx
"use client";

import React, { useRef, useEffect, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion'; // <-- Supprimez 'AnimationControls' de l'import ici

// Définition des types pour les props du composant InfiniteSlider
interface InfiniteSliderProps {
    children: ReactNode;
    speed?: number;
    speedOnHover?: number;
    gap?: number;
}

export function InfiniteSlider({
    children,
    speed = 180,
    speedOnHover = 160,
    gap = 0
}: InfiniteSliderProps) {
    const sliderRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation(); // <-- Laissez TypeScript inférer le type ici
    const totalWidth = useRef(0);

    useEffect(() => {
        if (!sliderRef.current) return;

        const childrenArray = Array.from(sliderRef.current.children) as HTMLElement[];
        const originalChildrenCount = childrenArray.length / 2;

        totalWidth.current = childrenArray
            .slice(0, originalChildrenCount)
            .reduce((acc, child) => acc + child.offsetWidth + gap, 0);

        if (sliderRef.current.children.length === originalChildrenCount) {
             const originalChildren = childrenArray.slice(0, originalChildrenCount);
             originalChildren.forEach(child => {
                 const clonedChild = child.cloneNode(true) as HTMLElement;
                 sliderRef.current?.appendChild(clonedChild);
             });
        }

        startAnimation(speed);

    }, [children, speed, gap]);

    const startAnimation = (currentSpeed: number) => {
        if (!sliderRef.current || totalWidth.current === 0) return;

        const duration = totalWidth.current / currentSpeed;

        controls.start({
            x: -totalWidth.current,
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: duration,
                    ease: "linear",
                },
            },
        });
    };

    const handleMouseEnter = () => {
        startAnimation(speedOnHover);
    };

    const handleMouseLeave = () => {
        startAnimation(speed);
    };

    return (
        <div
            className="overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ display: 'flex', width: '100%' }}
        >
            <motion.div
                ref={sliderRef}
                animate={controls}
                style={{ display: 'flex', gap: `${gap}px` }}
                className="flex-shrink-0"
            >
                {children}
            </motion.div>
        </div>
    );
}
// src/components/motion-primitives/ProgressiveBlur.tsx

"use client"; 
import React from 'react';
import { motion } from 'framer-motion';


// Définition des types pour les props du composant ProgressiveBlur
interface ProgressiveBlurProps {
    className?: string; // Classes CSS additionnelles, optionnel
    direction?: 'left' | 'right'; // Direction du flou, 'left' ou 'right', optionnel
    blurIntensity?: number; // Intensité du flou (0 à 1), optionnel
    // Pour permettre d'autres props de div standard
    [key: string]: any;
}

export function ProgressiveBlur({
    className = "",
    direction = "left",
    blurIntensity = 1,
    ...props
}: ProgressiveBlurProps) {
    const blurStyle: React.CSSProperties = { // Type le style CSS
        backdropFilter: `blur(${blurIntensity * 8}px)`, // Ajustez 8px pour l'intensité max du flou
        WebkitBackdropFilter: `blur(${blurIntensity * 8}px)`, // Pour la compatibilité Webkit
    };

    const gradientClass =
        direction === "left"
            ? "bg-gradient-to-r from-background to-transparent"
            : "bg-gradient-to-l from-background to-transparent";

    return (
        <motion.div
            className={`${className} ${gradientClass}`}
            style={blurStyle}
            {...props}
        />
    );
}
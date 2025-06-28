'use client'; // Ce composant a de l'état et des effets, il doit être un Client Component.

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils'; // Pour les classes Tailwind conditionnelles

interface TypewriterEffectProps {
    words: string[]; // Liste des mots ou phrases à taper
    speed?: number; // Vitesse de frappe en ms par caractère
    pauseBetweenWords?: number; // Pause en ms entre chaque mot/phrase
    loop?: boolean; // Boucler l'animation
    className?: string; // Classes CSS à appliquer au texte
    cursorClassName?: string; // Classes CSS pour le curseur clignotant
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
    words,
    speed = 70, // 70ms par caractère
    pauseBetweenWords = 1500, // 1.5 secondes de pause
    loop = true,
    className,
    cursorClassName,
}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let typingInterval: NodeJS.Timeout;
        let cursorInterval: NodeJS.Timeout;

        const handleTyping = () => {
            const fullWord = words[currentWordIndex];

            if (isDeleting) {
                // Efface le texte
                setCurrentText((prev) => prev.substring(0, prev.length - 1));
                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length); // Passe au mot suivant
                }
            } else {
                // Tape le texte
                setCurrentText((prev) => fullWord.substring(0, prev.length + 1));
                if (currentText === fullWord) {
                    if (!loop && currentWordIndex === words.length - 1) {
                        // Si pas de boucle et dernier mot, arrête
                        clearInterval(typingInterval);
                        return;
                    }
                    setTimeout(() => setIsDeleting(true), pauseBetweenWords); // Pause avant d'effacer
                }
            }
        };

        // Gère la logique de frappe
        typingInterval = setInterval(handleTyping, isDeleting ? speed / 2 : speed); // Efface plus vite que ça tape

        // Gère le clignotement du curseur
        cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500); // Clignote toutes les 500ms

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, [currentWordIndex, currentText, isDeleting, words, speed, pauseBetweenWords, loop]);

    return (
        <span className={cn('relative inline-block', className)}>
            {currentText}
            <span
                className={cn(
                    'inline-block h-full w-[2px] bg-foreground transition-opacity duration-100', // Curseurs de base
                    cursorVisible ? 'opacity-100' : 'opacity-0',
                    cursorClassName
                )}
            ></span>
        </span>
    );
};
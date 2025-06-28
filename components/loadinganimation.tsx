// src/app/components/LoadingAnimation.tsx
"use client"; // Cette directive est cruciale pour que ce composant soit un Client Component

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LoadingAnimation = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // Prend toute la hauteur de la fenêtre
      backgroundColor: '#001524', 
    }}>
      <DotLottieReact
        src="/Animation.lottie" // Chemin direct vers votre fichier dans 'public'
        loop
        autoplay
        style={{ width: 300, height: 300 }} // Ajustez la taille selon vos besoins
      />
    </div>
  );
};

export default LoadingAnimation;
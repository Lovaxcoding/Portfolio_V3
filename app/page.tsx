"use client";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import LoadingAnimation from "@/components/loadinganimation";
import { div } from "motion/react-client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [pageContent, setPageContent] = useState<React.ReactNode>(null); // Pour le contenu une fois chargé

  useEffect(() => {
    // Simule le chargement de données ou d'autres ressources pour votre page
    const loadPageData = async () => {
      // Remplacez cette logique par vos appels API, chargement de données, etc.
      await new Promise(resolve => setTimeout(resolve, 3000)); // Simule un délai de 3 secondes
      setPageContent(
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Bienvenue sur ma page principale !</h1>
          <p>Le contenu principal de votre site est maintenant chargé.</p>
          {/* Ajoutez ici le reste du contenu de votre page */}
        </div>
      );
      setIsLoading(false); // Une fois tout chargé, masquez l'animation
    };

    loadPageData();
  }, []); // L'effet s'exécute une seule fois au montage du composant

  if (isLoading) {
    return <LoadingAnimation />; // Affiche l'animation pendant le chargement
  }
  return (
    <>
    <HeroSection />
    </>
    
  );
}

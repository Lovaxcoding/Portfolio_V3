// src/types/project.d.ts

import { LucideIcon } from 'lucide-react'; // Pour typer les icônes de Lucide

// Interface pour une "qualité" ou "caractéristique" d'un projet (ce qui était "features" ou "technologies")
export interface ProjectQuality {
    icon: string; // Le composant de l'icône de Lucide React (ex: Zap, Cpu, Lock)
    name: string; // Le titre de la qualité (ex: "Faaast", "Powerful")
    description: string; // La description de la qualité (ex: "It supports an entire helping...")
}

// Interface pour un seul objet Project
export interface Project {
    id: string; // Identifiant unique pour la clé React
    title: string; // Titre du projet (ex: "Plateforme E-commerce Complète")
    description: string; // Description principale du projet
    imageLink: string; // Le chemin vers l'image principale de démonstration (ex: "/projects/ecommerce-screenshot.png")
    imageAlt: string; // Texte alternatif pour l'image
    imageWidth: number; // Largeur de l'image pour next/image
    imageHeight: number; // Hauteur de l'image pour next/image
    // imageLinkUpper?: string; // Si vous avez une image "upper" comme mail-upper.png
    // imageLinkBackDark?: string; // Si vous avez une image de fond sombre comme mail-back.png
    // imageLinkBackLight?: string; // Si vous avez une image de fond claire comme mail-back-light.png
    repositoriesLink?: string; // Lien vers le dépôt GitHub (optionnel)
    liveDemoLink?: string; // Lien vers la démo live (optionnel)
    stars?: number; // Nombre d'étoiles (optionnel, si pertinent pour le projet principal)
    technos?: string[]; // Liste de noms de technologies principales (ex: ['React', 'Next.js', 'Tailwind CSS']) - **Note**: J'ai appelé la liste d'en bas "qualities" pour ne pas confondre avec "techno" ici qui serait juste des noms.
    qualities: ProjectQuality[]; // La liste des 4 éléments en bas avec icône, nom et description
}
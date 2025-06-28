// data/pinnedProjects.ts (un nouveau fichier pour vos données spécifiques à cette section)

import { PinnedProject } from "../types/project";

 // Assurez-vous que ce chemin est correct si vous avez créé le type

export const pinnedProjectsData: PinnedProject[] = [
    {
        id: 'online-travel',
        name: 'OnlineTravel',
        language: 'JavaScript',
        stars: 3,
        isPublic: true,
        link: 'https://github.com/votre-utilisateur/OnlineTravel',
    },
    {
        id: 'tourist-agency',
        name: 'Tourist_Agency',
        language: 'JavaScript',
        stars: 2,
        isPublic: true,
        link: 'https://github.com/votre-utilisateur/Tourist_Agency',
    },
    {
        id: 'nike-s-store',
        name: 'Nike-s-store',
        language: 'JavaScript',
        stars: 3,
        isPublic: true,
        link: 'https://github.com/votre-utilisateur/Nike-s-store',
    },
    {
        id: 'password-generator',
        name: 'Password_Generator',
        language: 'HTML',
        stars: 2,
        isPublic: true,
        link: 'https://github.com/votre-utilisateur/Password_Generator',
    },
    {
        id: 'qrify-reader-generator',
        name: 'QRify-Reader-Generator',
        language: 'HTML',
        stars: 3,
        isPublic: true,
        link: 'https://github.com/votre-utilisateur/QRify-Reader-Generator',
    },
    {
        id: 'taskflow',
        name: 'TaskFlow',
        language: 'TypeScript',
        stars: 2,
        isPublic: true,
        link: 'https://github.com/votre-utilisateur/TaskFlow',
    },
];

// Fonction utilitaire pour obtenir la couleur du point basée sur le langage
// Vous pouvez l'intégrer ou utiliser des classes Tailwind directement si vous préférez
export const getLanguageColorClass = (language: string): string => {
    switch (language) {
        case 'JavaScript':
            return 'bg-yellow-400'; // Jaune pour JS
        case 'HTML':
            return 'bg-red-500';    // Rouge pour HTML
        case 'TypeScript':
            return 'bg-blue-600';   // Bleu pour TS
        // Ajoutez d'autres langages au besoin
        default:
            return 'bg-gray-400';
    }
};
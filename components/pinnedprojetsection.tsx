// src/components/PinnedProjectsSection.tsx
"use client"; // Composants interactifs ou utilisant des hooks

import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card'; // Assurez-vous que les chemins sont corrects
import { GitFork, Star, Dot, EllipsisVertical } from 'lucide-react'; // Icônes nécessaires pour GitHub-like display
import Link from 'next/link'; // Pour les liens vers GitHub
import { getLanguageColorClass, pinnedProjectsData } from './data/pinnedprojetdata';

// Importez les données et la fonction utilitaire de couleur
 // Assurez-vous que le chemin est correct
// Si vous n'avez pas de fichier types/pinnedProject.d.ts et data/pinnedProjects.ts,
// vous devrez copier les définitions d'interface et les données ici ou dans un autre fichier.


export default function PinnedProjectsSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                {/* En-tête de la section, similaire à GitHub */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-semibold">Pinned</h2> {/* Le titre "Pinned" */}
                    {/* Lien "Customize your pins" */}
                    <Link href="#" className="text-sm text-blue-500 hover:underline">
                        Customize your pins
                    </Link>
                </div>

                {/* Grille des cartes de projets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pinnedProjectsData.map((project) => (
                        <Card key={project.id} className="group flex flex-col p-4 relative overflow-hidden transition-all duration-200 hover:border-blue-500">
                            <CardHeader className="flex flex-row items-center justify-between p-0 mb-2">
                                <div className="flex items-center gap-2">
                                    <GitFork className="size-4 text-muted-foreground" /> {/* Icône de dépôt */}
                                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium hover:underline text-lg">
                                        {project.name}
                                    </Link>
                                    {project.isPublic && (
                                        <span className="ml-2 px-2 py-0.5 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full border border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                                            Public
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    {/* Icône de menu Kebab - cliquez pour plus d'options comme sur GitHub */}
                                    <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <EllipsisVertical className="size-4 text-muted-foreground" />
                                    </button>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow p-0 mt-2 text-sm text-muted-foreground">
                                {/* Description courte du projet si vous voulez l'ajouter ici */}
                                {/* <p>A short description of the project.</p> */}
                            </CardContent>
                            <div className="flex items-center justify-end gap-3 mt-4 text-sm text-muted-foreground">
                                {/* Language dot and name */}
                                <div className="flex items-center gap-1">
                                    <span className={`size-3 rounded-full ${getLanguageColorClass(project.language)}`} />
                                    <span>{project.language}</span>
                                </div>
                                {/* Stars */}
                                <div className="flex items-center gap-1">
                                    <Star className="size-3 text-muted-foreground" />
                                    <span>{project.stars}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
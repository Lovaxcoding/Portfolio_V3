"use client"; // C'est crucial car ce composant utilise des hooks et du state potentiellement.

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Importez TOUTES les icônes de Lucide React qui peuvent être utilisées dans vos qualités
import {
  Zap,
  Cpu,
  Lock,
  Sparkles,
  Globe,
  Smartphone,
  Users,
  LayoutDashboard,
  Code,
} from "lucide-react";

import React from "react"; // Nécessaire pour React.ElementType ou si vous utilisez des hooks
import { Project } from "./types/project";

// Mappage des noms d'icônes (chaînes) aux composants d'icônes réels de Lucide React
const iconMap: { [key: string]: React.ElementType } = {
  Zap: Zap,
  Cpu: Cpu,
  Lock: Lock,
  Sparkles: Sparkles,
  Globe: Globe,
  Smartphone: Smartphone,
  Users: Users,
  LayoutDashboard: LayoutDashboard,
  Code: Code,
  Github: Github, // Au cas où vous voudriez utiliser l'icône Github dans les qualités
  ExternalLink: ExternalLink, // Au cas où vous voudriez l'utiliser dans les qualités
  // Ajoutez toutes les autres icônes que vous utilisez dans projectsData ici
};

export default function ProjectSection({
  id,
  title,
  description,
  imageLink,
  imageAlt,
  imageWidth,
  imageHeight,
  repositoriesLink,
  liveDemoLink,
  qualities,
}: Project) {
  return (
    <section className="overflow-hidden py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        {/* Section Titre et Description */}
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-semibold lg:text-5xl text-balance">
            {title}
          </h2>
          <p className="mt-6 text-lg text-foreground/80">{description}</p>
          {/* Boutons d'action */}
          <div className="mt-8 flex gap-4 justify-center">
            {repositoriesLink && (
              <a
                href={repositoriesLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="flex items-center gap-2">
                  <Github className="size-4" /> Voir le Code
                </Button>
              </a>
            )}
            {liveDemoLink && (
              <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center gap-2">
                  <ExternalLink className="size-4" /> Démo Live
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Section Image avec l'effet "3D initial" et "montée/parallèle" au survol */}
                {/* Nous ajoutons 'group' à ce div pour gérer les effets de survol sur les enfants */}
                 <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3">
                    <div className="relative h-full w-full perspective-[1000px] group"> {/* Ajout de perspective et 'group' */}
                        <div className="
                            relative w-full h-full
                            transform-gpu transition-all duration-500 ease-in-out
                            origin-bottom-left  /* Point d'origine de la transformation */
                            rotate-x-[20deg]      /* Incliné vers l'avant (couché sur X) */
                            rotate-y-[5deg]       /* Légère rotation latérale (optionnel) */
                            translate-z-[-30px]   /* S'enfonce de 30px dans Z */
                            shadow-lg
                            rounded-xl overflow-hidden aspect-video
                            group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:translate-z-0 /* Retour à plat et au niveau du plan Z */
                            group-hover:translate-y-[-20px] /* Monte de 20px sur Y */
                            group-hover:shadow-2xl /* Ombre plus prononcée au survol */
                        ">
                            <Image
                                src={imageLink}
                                className="absolute inset-0 z-10 object-cover w-full h-full"
                                alt={imageAlt}
                                width={imageWidth}
                                height={imageHeight}
                            />
                        </div>
                    </div>
                </div>

        {/* Section des "Qualités" (les 4 éléments grid en bas) */}
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4 pt-16 md:pt-24">
          {qualities.map((quality, index) => {
            // Récupérez le composant d'icône réel depuis le mappage
            const IconComponent = iconMap[quality.icon];
            if (!IconComponent) {
              console.warn(
                `Icône non trouvée pour : ${quality.icon}. Veuillez l'ajouter à iconMap.`
              );
              return null; // Ou affichez une icône par défaut
            }

            return (
              <div className="space-y-3" key={index}>
                <div className="flex items-center gap-2">
                  <IconComponent className="size-4" />{" "}
                  {/* Rendre le composant d'icône dynamique */}
                  <h3 className="text-sm font-medium">{quality.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {quality.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

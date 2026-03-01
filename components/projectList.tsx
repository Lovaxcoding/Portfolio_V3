"use client";

import { useState } from "react";
import { projectsData } from "./data/project";
import ProjectSection from "./projetSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CATEGORIES = ["Fintech", "SaaS & Gestion", "Applications Web"];

export default function ProjectList() {
  // On définit par défaut la première catégorie
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);

  return (
    <section className="py-24" id="projets">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Mes Réalisations</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-12" />

        {/* Système d'onglets */}
        <Tabs defaultValue={CATEGORIES[0]} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-16">
            <TabsList className="bg-muted/50 p-1 border">
              {CATEGORIES.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-6 py-2 transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {CATEGORIES.map((category) => {
            const filteredProjects = projectsData.filter(p => p.category === category);

            return (
              <TabsContent
                key={category}
                value={category}
                className="mt-0 focus-visible:ring-0"
              >
                {filteredProjects.length > 0 ? (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {filteredProjects.map((project) => (
                      <ProjectSection key={project.id} {...project} />
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground py-20">
                    Aucun projet dans cette catégorie pour le moment.
                  </p>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}

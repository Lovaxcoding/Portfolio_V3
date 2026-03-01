"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ExternalLink, Github, Zap, Cpu, Lock, Sparkles,
  Globe, Smartphone, Users, LayoutDashboard, Code,
  FileText, ShieldCheck, BarChart3, Settings, CreditCard,
  History, Database, Cloud
} from "lucide-react";
import React from "react";
import { Project } from "./types/project";

const iconMap: { [key: string]: React.ElementType } = {
  Zap, Cpu, Lock, Sparkles, Globe, Smartphone, Users,
  LayoutDashboard, Code, Github, ExternalLink,
  FileText, ShieldCheck, BarChart3, Settings, CreditCard,
  History, Database, Cloud
};

export default function ProjectSection(project: Project) {
  const {
    title,
    description,
    imageLink,
    imageAlt,
    imageWidth,
    imageHeight,
    repositoriesLink,
    liveDemoLink,
    qualities,
  } = project;

  return (
    <div className="py-16 border-b border-border/40 last:border-0">
      <div className="mx-auto max-w-5xl space-y-8 px-6">
        {/* Titre et Description */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-semibold lg:text-4xl text-balance">
            {title}
          </h3>
          <p className="mt-4 text-lg text-foreground/80">{description}</p>

          <div className="mt-6 flex gap-3 justify-center">
            {repositoriesLink && (
              <a href={repositoriesLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="size-4" /> Code
                </Button>
              </a>
            )}
            {liveDemoLink && (
              <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="gap-2">
                  <ExternalLink className="size-4" /> Démo
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Image avec effet 3D */}
        <div className="relative rounded-3xl p-2 md:p-4 bg-gradient-to-b from-border/20 to-transparent">
          <div className="relative perspective-[1000px] group">
            <div className="relative w-full transform-gpu transition-all duration-500 ease-in-out origin-bottom rotate-x-[10deg] translate-z-[-20px] shadow-xl rounded-xl overflow-hidden aspect-video group-hover:rotate-x-0 group-hover:translate-y-[-10px] group-hover:shadow-2xl">
              <Image
                src={imageLink}
                className="object-fit w-full h-full"
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
              />
            </div>
          </div>
        </div>

        {/* Qualités */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 pt-8">
          {qualities.map((quality, index) => {
            const IconComponent = iconMap[quality.icon] || Code;
            return (
              <div className="space-y-2" key={index}>
                <div className="flex items-center gap-2 text-primary">
                  <IconComponent className="size-4" />
                  <h4 className="text-sm font-medium text-foreground">{quality.name}</h4>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {quality.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

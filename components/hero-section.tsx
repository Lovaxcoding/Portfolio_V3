import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import TechStackLogos from './techstacklogos'
import Qualities from './qualitySection'
import ProjectSection from './projetSection'
import { projectsData } from './data/project'
import FAQsSection from './faqsection'
import FooterSection from './footerSection'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
        {/* Arrière-plan décoratif - inchangé car c'est un élément visuel abstrait */}
        <div
            aria-hidden
            className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
            <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
            <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
            <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section>
            <div className="relative pt-24 md:pt-36">
                {/* Image de fond animée - potentiellement une image plus abstraite ou technique */}
                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    delayChildren: 1,
                                },
                            },
                        },
                        item: {
                            hidden: {
                                opacity: 0,
                                y: 20,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: 'spring',
                                    bounce: 0.3,
                                    duration: 2,
                                },
                            },
                        },
                    }}
                    className="absolute inset-0 -z-20">
                    <Image
                        src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120" // Vous pouvez changer cette image pour quelque chose de plus "techy" ou abstrait si vous le souhaitez
                        alt="Background abstrait"
                        className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                        width="3276"
                        height="4095"
                        unoptimized
                    />
                </AnimatedGroup>
                <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>

                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                        {/* Lien de bandeau d'introduction - Peut être un message de bienvenue ou une mise à jour */}
                        <AnimatedGroup variants={transitionVariants}>
                            <Link
                                href="#a-propos" // Lien vers une section "À propos" ou "Mon parcours"
                                className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                <span className="text-foreground text-sm">Découvrez mon travail et mes compétences !</span>
                                <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>
                                <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                        <span className="flex size-6">
                                            <ArrowRight className="m-auto size-3" />
                                        </span>
                                        <span className="flex size-6">
                                            <ArrowRight className="m-auto size-3" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedGroup>

                        {/* Titre principal - Votre nom et rôle */}
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h1"
                            className="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                            Lovasoa Nantenaina
                        </TextEffect>
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h2" // Ajout d'un h2 pour votre rôle
                            className="mt-4 text-balance text-4xl md:text-5xl xl:text-[4rem] text-primary">
                            Développeur Fullstack
                        </TextEffect>

                        {/* Description - Votre proposition de valeur ou résumé */}
                        <TextEffect
                            per="line"
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.5}
                            as="p"
                            className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                            Passionné par la création de solutions web robustes et intuitives, du front-end au back-end, avec une expertise en Next.js, React et PostgreSQL.
                        </TextEffect>

                        {/* Boutons d'action - Liens vers votre portfolio ou contact */}
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}
                            className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                            <div
                                key={1}
                                className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-xl px-5 text-base">
                                    <Link href="#projets">
                                        <span className="text-nowrap">Voir mes projets</span>
                                    </Link>
                                </Button>
                            </div>
                            <Button
                                key={2}
                                asChild
                                size="lg"
                                variant="ghost"
                                className="h-10.5 rounded-xl px-5">
                                <Link href="#contact">
                                    <span className="text-nowrap">Me contacter</span>
                                </Link>
                            </Button>
                        </AnimatedGroup>
                    </div>
                </div>

                {/* Section d'aperçu d'application ou d'exemple de code */}
                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.75,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}>
                    <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                        <div
                            aria-hidden
                            className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                        />
                        <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                            {/* Idéalement, remplacez ces images par une capture d'écran d'un de VOS projets ou un aperçu de code */}
                            <Image
                                className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                src="/profil.png" // Chemin vers votre propre capture d'écran pour le thème sombre
                                alt="Capture d'écran de mon application"
                                width="2700"
                                height="1440"
                            />
                            <Image
                                className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                src="/profil2.png" // Chemin vers votre propre capture d'écran pour le thème clair
                                alt="Capture d'écran de mon application"
                                width="2700"
                                height="1440"
                            />
                        </div>
                    </div>
                </AnimatedGroup>
            </div>
        </section>
        <TechStackLogos />
        <Qualities />
         {/* Boucle pour afficher chaque ProjectSection */}
            {projectsData.map((project) => (
                <ProjectSection
                    key={project.id} // Utilisez l'ID unique du projet comme clé
                    {...project} // Passe toutes les propriétés de l'objet project au composant ProjectSection
                />
            ))}
        <FAQsSection />
        <FooterSection />
    </main>
    </>
    )
}

"use client";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

export default function TechStackLogos() {
    const techLogos = [
        // Langages de Programmation
        { src: "https://img.icons8.com/color/96/html-5--v1.png", alt: "HTML5 Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/css3.png", alt: "CSS3 Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/javascript.png", alt: "JavaScript Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/php.png", alt: "PHP Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/java-coffee-cup-logo--v2.png", alt: "Java Logo", height: 60, darkInvert: false },
        { src: "/Csharp.svg", alt: "C# Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/python.png", alt: "Python Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/dart.png", alt: "Dart Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/kotlin.png", alt: "Kotlin Logo", height: 60, darkInvert: false },
        
        
        // Frontend – CMS / Frameworks
        { src: "/react.svg", alt: "React.js Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/nextjs.png", alt: "Next.js Logo", height: 60, darkInvert: false },
        { src: "/vuejs.svg", alt: "Vue.js Logo", height: 60, darkInvert: false },
         { src: "/NET core.svg", alt: ".NET Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/angularjs.png", alt: "Angular.js Logo", height: 60, darkInvert: false },
        { src: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg", alt: "Tailwind CSS Logo", height: 60, darkInvert: false },
        { src: "/jquery.svg", alt: "jQuery Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/wordpress.png", alt: "WordPress Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/flutter.png", alt: "Flutter Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/react-native.png", alt: "React Native Logo", height: 60, darkInvert: false },

        // Backend – API / Frameworks
        { src: "/Express.svg", alt: "Express Logo", height: 60, darkInvert: false },
        { src: "/AWS.svg", alt: "AWS Logo", height: 60, darkInvert: false },
        { src: "/Spring.svg", alt: "Spring Boot Logo", height: 60, darkInvert: false },
        { src: "https://www.svgrepo.com/show/303379/laravel-logo.svg", alt: "Laravel Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/officel/96/api-settings.png", alt: "REST API Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/graphql.png", alt: "GraphQL Logo", height: 60, darkInvert: false },

        // Serveur – Bases de données
        { src: "/swift.svg", alt: "swift logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/mysql-logo.png", alt: "MySQL Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/mongodb.png", alt: "MongoDB Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/postgreesql.png", alt: "PostgreSQL Logo", height: 60, darkInvert: false },

        // Outils et Méthodes
        { src: "https://img.icons8.com/color/96/nodejs.png", alt: "Node.js Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/ios-filled/96/git.png", alt: "Git Logo", height: 60, darkInvert: true },
        { src: "/cisco.svg", alt: "Cisco logo", height: 60, darkInvert: false },
        { src: "/GitLab.svg", alt: "GitHub Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/docker.png", alt: "Docker Logo", height: 60, darkInvert: false },
        { src: "/Postman.svg", alt: "Postman Logo", height: 60, darkInvert: false },
        { src: "/figma.svg", alt: "Figma Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/trello.png", alt: "Trello Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/visual-studio-code-2019.png", alt: "VS Code Logo", height: 60, darkInvert: false },
        { src: "https://img.icons8.com/color/96/jira.png", alt: "Jira Logo", height: 60, darkInvert: false },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dbeaver/dbeaver-original.svg", alt: "DBeaver Logo", height: 60, darkInvert: false },
    ];

    const midIndex = Math.ceil(techLogos.length / 2);
    const firstHalfLogos = techLogos.slice(0, midIndex);
    const secondHalfLogos = techLogos.slice(midIndex);

    return (
        <section id="competences" className="bg-background overflow-hidden py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Mes outils de prédilection</h2>
                    <p className="mt-4 text-lg text-foreground/80">
                        Technologies et outils que j'utilise pour bâtir des solutions robustes et innovantes.
                    </p>
                </div>

                {/* Première ligne de logos */}
                <div className="relative group mb-8"> {/* Ajout de marge en bas */}
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        loop={true}
                        slidesPerView={'auto'}
                        spaceBetween={60}
                        grabCursor={true}
                        freeMode={true}
                        speed={5000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            reverseDirection: false,
                        }}
                        className="mySwiper"
                    >
                        {firstHalfLogos.map((logo, index) => (
                            <SwiperSlide key={index} style={{ width: 'auto' }}>
                                <div className="flex justify-center items-center py-4 px-2">
                                    <img
                                        className={`h-12 w-fit ${logo.darkInvert ? 'dark:invert' : ''}`}
                                        src={logo.src}
                                        alt={logo.alt}
                                        height={logo.height}
                                        width={48}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20 z-10"></div>
                    <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20 z-10"></div>
                </div>

                {/* Deuxième ligne de logos */}
                <div className="relative group">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        loop={true}
                        slidesPerView={'auto'}
                        spaceBetween={60}
                        grabCursor={true}
                        freeMode={true}
                        speed={5000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            reverseDirection: true, // Inversez la direction pour la deuxième ligne
                        }}
                        className="mySwiper"
                    >
                        {secondHalfLogos.map((logo, index) => (
                            <SwiperSlide key={index} style={{ width: 'auto' }}>
                                <div className="flex justify-center items-center py-4 px-2">
                                    <img
                                        className={`h-12 w-fit ${logo.darkInvert ? 'dark:invert' : ''}`}
                                        src={logo.src}
                                        alt={logo.alt}
                                        height={logo.height}
                                        width={48}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20 z-10"></div>
                    <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20 z-10"></div>
                </div>

            </div>
        </section>
    );
}
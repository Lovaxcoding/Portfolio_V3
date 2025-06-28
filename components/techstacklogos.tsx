import { InfiniteSlider } from "./motion-primitives/infinite-slider";
import { ProgressiveBlur } from "./motion-primitives/progressiveBlur";


export default function TechStackLogos() {
    // Définissez vos logos avec leurs chemins et noms
    // J'utilise ici des liens Icons8, mais il est FORTEMENT RECOMMANDÉ de télécharger et d'héberger ces images localement
    // dans votre dossier `public` (ex: /images/tech-logos/react.png)
   const techLogos = [
    // Langages de Programmation
    { src: "https://img.icons8.com/color/96/html-5--v1.png", alt: "HTML5 Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/css3.png", alt: "CSS3 Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/javascript.png", alt: "JavaScript Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/php.png", alt: "PHP Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/java-coffee-cup-logo--v2.png", alt: "Java Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/python.png", alt: "Python Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/dart.png", alt: "Dart Logo", height: 60, darkInvert: false }, // NOUVEAU: Dart
    { src: "https://img.icons8.com/color/96/kotlin.png", alt: "Kotlin Logo", height: 60, darkInvert: false }, // NOUVEAU: Kotlin

    // Frontend – CMS / Frameworks
    { src: "/react.svg", alt: "React.js Logo", height: 60, darkInvert: false }, // Lien React.js plus générique
    { src: "https://img.icons8.com/color/96/nextjs.png", alt: "Next.js Logo", height: 60, darkInvert: false },
    { src: "/vuejs.svg", alt: "Vue.js Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/angularjs.png", alt: "Angular.js Logo", height: 60, darkInvert: false },
    { src: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg", alt: "Tailwind CSS Logo", height: 60, darkInvert: false },
    { src: "/jquery.svg", alt: "jQuery Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/wordpress.png", alt: "WordPress Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/flutter.png", alt: "Flutter Logo", height: 60, darkInvert: false }, // NOUVEAU: Flutter
    { src: "https://img.icons8.com/color/96/react-native.png", alt: "React Native Logo", height: 60, darkInvert: false }, // React Native existant, vérification du lien

    // Backend – API / Frameworks
    { src: "https://img.icons8.com/color/96/nodejs.png", alt: "Node.js Logo", height: 60, darkInvert: false },
    { src: "https://www.svgrepo.com/show/333604/spring-boot.svg", alt: "Spring Boot Logo", height: 60, darkInvert: false },
    { src: "https://www.svgrepo.com/show/303379/laravel-logo.svg", alt: "Laravel Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/officel/96/api-settings.png", alt: "REST API Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/graphql.png", alt: "GraphQL Logo", height: 60, darkInvert: false },

    // Serveur – Bases de données
    { src: "/swift.svg", alt: "swift logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/mysql-logo.png", alt: "MySQL Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/mongodb.png", alt: "MongoDB Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/postgreesql.png", alt: "PostgreSQL Logo", height: 60, darkInvert: false },

    // Outils et Méthodes
    { src: "https://img.icons8.com/ios-filled/96/git.png", alt: "Git Logo", height: 60, darkInvert: true },
    { src: "/cisco.svg", alt: "Cisco logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/github.png", alt: "GitHub Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/docker.png", alt: "Docker Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/postman-api.png", alt: "Postman Logo", height: 60, darkInvert: false },
    { src: "/figma.svg", alt: "Figma Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/trello.png", alt: "Trello Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/visual-studio-code-2019.png", alt: "VS Code Logo", height: 60, darkInvert: false },
    { src: "https://img.icons8.com/color/96/jira.png", alt: "Jira Logo", height: 60, darkInvert: false },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dbeaver/dbeaver-original.svg", alt: "DBeaver Logo", height: 60, darkInvert: false },
];



    return (
        <section id="competences" className="bg-background overflow-hidden py-16 md:py-24"> {/* Ajout de l'ID pour le lien dans le footer */}
            <div className="mx-auto max-w-7xl px-6">
                {/* Titre en haut et grand */}
                <div className="mb-12 text-center"> {/* mb pour une marge en bas */}
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Mes outils de prédilection</h2>
                    <p className="mt-4 text-lg text-foreground/80">
                        Technologies et outils que j'utilise pour bâtir des solutions robustes et innovantes.
                    </p>
                </div>

                {/* Conteneur du défilement infini */}
                <div className="relative group"> {/* 'group' peut être utile si vous voulez des effets au survol de toute la section */}
                    <div className="relative py-6 md:w-full"> {/* Retiré le calcul de largeur et adapté pour être pleine largeur */}
                        <InfiniteSlider
                            speedOnHover={30}
                            speed={60}
                            gap={128}
                        >
                            {techLogos.map((logo, index) => (
                                <div className="flex" key={index}>
                                    <img
                                        // Utilisez 'h-12' et 'w-fit' pour contrôler la taille de l'image.
                                        // 'w-fit' laisse la largeur s'adapter à la hauteur pour maintenir le ratio.
                                        className={`mx-auto h-12 w-fit ${logo.darkInvert ? 'dark:invert' : ''}`}
                                        src={logo.src}
                                        alt={logo.alt}
                                        height={logo.height}
                                        width={48} // Spécifier une largeur pour optimiser avec Next/Image si vous l'utilisiez
                                    />
                                </div>
                            ))}
                        </InfiniteSlider>
                        {/* Gradients de fondu aux extrémités */}
                        {/* Ces div créent un effet de fondu pour que les logos apparaissent/disparaissent en douceur */}
                        <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        
                        {/* ProgressiveBlur (si vous avez ce composant) - Il peut remplacer les gradients ci-dessus */}
                        {/* Si vous utilisez ProgressiveBlur, les div de gradient ci-dessus peuvent être supprimées */}
                        {/* <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
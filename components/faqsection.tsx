'use client'; // Indique que c'est un Client Component

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
// Assurez-vous que `@/components/ui/accordion` pointe vers votre implémentation shadcn/ui.

import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
// `lucide-react/dynamic` est nécessaire pour rendre les icônes dynamiquement à partir d'une chaîne de caractères.

import Link from 'next/link';

// Définition du type pour un élément FAQ
type FAQItem = {
    id: string;
    icon: IconName; // IconName est le type attendu par lucide-react/dynamic
    question: string;
    answer: string;
};

export default function FAQsSection() {
    // Les données de vos FAQ en français
    const faqItems: FAQItem[] = [
        {
            id: 'disponibilite',
            icon: 'clock', // Nom de l'icône Lucide React
            question: 'Quelle est votre disponibilité pour le contact ?',
            answer: 'Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos questions et vous assister. Vous pouvez nous contacter à tout moment par e-mail, via notre formulaire de contact ou par téléphone pendant les heures de bureau.',
        },
        {
            id: 'prix-travail',
            icon: 'hand-coins', // Une icône appropriée pour les prix
            question: 'Comment sont fixés vos tarifs ?',
            answer: 'Nos tarifs sont établis en fonction de la nature et de la complexité des services demandés. Chaque projet fait l\'objet d\'une étude personnalisée pour vous offrir un devis juste et transparent, adapté à vos besoins spécifiques.',
        },
        {
            id: 'delais-projet',
            icon: 'calendar-check', // Une icône pour les délais
            question: 'Quels sont les délais typiques pour la réalisation d\'un projet ?',
            answer: 'Les délais varient considérablement selon l\'ampleur du projet. Après une évaluation initiale de vos besoins, nous vous fournirons une estimation réaliste. Nous nous engageons à respecter les échéances établies ensemble.',
        },
        {
            id: 'technologies',
            icon: 'wrench', // Une icône pour les outils/technologies
            question: 'Quelles technologies utilisez-vous pour vos projets ?',
            answer: 'Nous privilégions les technologies modernes et robustes telles que React, Next.js, Node.js, TypeScript, Tailwind CSS, et des bases de données comme PostgreSQL ou MongoDB. Nous choisissons les outils les mieux adaptés à chaque projet pour garantir performance et évolutivité.',
        },
        {
            id: 'support-apres-vente',
            icon: 'life-buoy', // Une icône pour le support
            question: 'Offrez-vous un support après la livraison du projet ?',
            answer: 'Oui, nous offrons un support technique post-livraison pour assurer le bon fonctionnement de votre solution. Des options de maintenance et d\'évolutions sont également disponibles pour accompagner votre croissance à long terme.',
        },
    ];

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    {/* Colonne de gauche avec titre et lien de contact */}
                    <div className="md:w-1/3">
                        <div className="sticky top-20"> {/* Le sticky fait que le bloc reste visible en scrollant */}
                            <h2 className="mt-4 text-3xl font-bold">Foire Aux Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                Vous ne trouvez pas ce que vous cherchez ? Contactez notre{' '}
                                <Link
                                    href="/contact" // Assurez-vous que ce lien mène à votre page de contact
                                    className="text-primary font-medium hover:underline"
                                >
                                    équipe de support client
                                </Link>
                                .
                            </p>
                        </div>
                    </div>

                    {/* Colonne de droite avec l'Accordion */}
                    <div className="md:w-2/3">
                        <Accordion
                            type="single" // Permet d'ouvrir un seul élément à la fois
                            collapsible
                            className="w-full space-y-2" // space-y-2 ajoute de l'espace entre les éléments
                        >
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                                >
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                {/* Utilisation de DynamicIcon pour le rendu conditionnel de l'icône */}
                                                <DynamicIcon
                                                    name={item.icon} // Ici, c'est le nom de l'icône sous forme de chaîne
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base font-medium">{item.question}</span> {/* Ajout de font-medium pour la question */}
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base text-muted-foreground">{item.answer}</p> {/* Ajout de text-muted-foreground pour la réponse */}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
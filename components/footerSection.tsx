'use client'; // Ce composant interagit avec l'utilisateur (formulaire, select), donc c'est un Client Component.

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils'; // Assurez-vous que ce chemin est correct pour votre fichier utils.ts
import { ChevronsUpDown } from 'lucide-react';
import Link from 'next/link';

// Import des icônes pour les réseaux sociaux de Lucide React
import { Github, Linkedin, Mail, Phone } from 'lucide-react'; // Ajout de Mail et Phone pour vos contacts directs

// Vous aurez besoin d'un composant Logo si vous en avez un.
// Si votre logo est juste une image, vous pouvez la remplacer par <Image />.
// import { Logo } from '@/components/logo'; // Décommentez si vous avez un composant Logo

const currentYear = new Date().getFullYear();

// Liens de navigation simplifiés pour votre portfolio
const links = [
    {
        group: 'Navigation',
        items: [
            { title: 'Accueil', href: '/' },
            { title: 'Projets', href: '#projets' }, // Assurez-vous d'avoir une ancre #projets sur votre page principale
            { title: 'Compétences', href: '#competences' }, // Idem pour #competences
            { title: 'FAQ', href: '#faq' }, // Idem pour #faq
            { title: 'Contact', href: '#contact' }, // Idem pour #contact
        ],
    },
    {
        group: 'Légal',
        items: [
            { title: 'Confidentialité', href: '/privacy' }, // Créez ces pages si elles n'existent pas
            { title: 'Conditions', href: '/terms' },
        ],
    },
];

export default function FooterSection() {
    return (
        <footer className="border-t bg-background pt-20" id='contact'> {/* border-t plutôt que border-b, bg-background directement */}
            <div className="mb-8 md:mb-12">
                <div className="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-6 px-6 pb-6">
                    {/* Votre Logo ou nom de marque */}
                    <Link
                        href="/"
                        aria-label="Retour à l'accueil"
                        className="block size-fit text-2xl font-bold text-primary" // Style simple pour le texte
                    >
                        Lovasoa N. {/* Remplacez par votre Logo composant ou <Image /> */}
                    </Link>

                    {/* Liens de réseaux sociaux et contacts directs */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        {/* GitHub */}
                        <Link
                            href="https://github.com/lovaxcoding"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub LovaxCoding"
                            className="text-muted-foreground hover:text-primary block"
                        >
                            <Github className="size-6" /> {/* Icône GitHub */}
                        </Link>
                        {/* LinkedIn */}
                        <Link
                            href="https://www.linkedin.com/in/lovasoa-nantenaina" // REMPLACEZ PAR VOTRE VRAI PROFIL LINKEDIN
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Lovasoa Nantenaina"
                            className="text-muted-foreground hover:text-primary block"
                        >
                            <Linkedin className="size-6" /> {/* Icône LinkedIn */}
                        </Link>
                        {/* Email */}
                        <Link
                            href="mailto:lnantenaina78@gmail.com"
                            aria-label="Envoyer un email à lnantenaina78@gmail.com"
                            className="text-muted-foreground hover:text-primary block"
                        >
                            <Mail className="size-6" /> {/* Icône Email */}
                        </Link>
                        {/* Téléphone */}
                        <Link
                            href="tel:+261344583202"
                            aria-label="Appeler le +261344583202"
                            className="text-muted-foreground hover:text-primary block"
                        >
                            <Phone className="size-6" /> {/* Icône Téléphone */}
                        </Link>
                        {/* Vous pouvez ajouter d'autres liens sociaux ici si vous le souhaitez */}
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-5 md:gap-0 lg:grid-cols-4">
                    {/* Bloc des liens de navigation */}
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:col-span-3 md:row-start-1 lg:col-span-3"> {/* Changement de md:col-span-5 à md:col-span-3 pour faire de la place */}
                        {links.map((linkGroup, index) => (
                            <div key={index} className="space-y-4 text-sm">
                                <span className="block font-medium">{linkGroup.group}</span>
                                {linkGroup.items.map((item, itemIndex) => (
                                    <Link
                                        key={itemIndex}
                                        href={item.href}
                                        className="text-muted-foreground hover:text-primary block duration-150"
                                    >
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Section Newsletter */}
                    <form className="row-start-1 border-b pb-8 text-sm md:col-span-2 md:border-none lg:col-span-1">
                        <div className="space-y-4">
                            <Label htmlFor="mail" className="block font-medium">
                                Newsletter
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    id="mail"
                                    name="mail"
                                    placeholder="Votre email"
                                    className="h-8 text-sm"
                                />
                                <Button size="sm">S'abonner</Button>
                            </div>
                            <span className="text-muted-foreground block text-sm">Ne manquez aucune mise à jour !</span>
                        </div>
                    </form>
                </div>

                {/* Section Copyright et sélecteur de langue */}
                <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
                    <small className="text-muted-foreground order-last block text-center text-sm md:order-first">
                        © {currentYear} Lovasoa Nantenaina, Tous droits réservés.
                    </small>
                    <form> {/* Pas besoin de action="" si vous ne soumettez pas le formulaire */}
                        <div className="relative">
                            <ChevronsUpDown
                                className="pointer-events-none absolute inset-y-0 right-2 my-auto opacity-75 size-4" // Ajusté la taille
                            />
                            <select
                                className={cn(
                                    'border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground shadow-xs flex h-9 w-full min-w-32 appearance-none rounded-md border bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                                    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                                    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
                                )}
                                name="language"
                            >
                                <option value="fr">Français</option>
                                <option value="en">English</option>
                                <option value="es">Español</option>
                                {/* Ajoutez d'autres langues si nécessaire */}
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    );
}
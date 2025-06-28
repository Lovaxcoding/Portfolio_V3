'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { ModeToggle } from './modeToggle'

const menuItems = [
    { name: 'Features', href: '#link' },
    { name: 'Solution', href: '#link' },
    { name: 'Pricing', href: '#link' },
    { name: 'About', href: '#link' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
       <header>
    <nav
        data-state={menuState && 'active'}
        className="fixed z-20 w-full px-2">
        <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
            <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                <div className="flex w-full justify-between lg:w-auto">
                    <Link
                        href="/"
                        aria-label="Accueil" // Modifié pour "Accueil"
                        className="flex items-center space-x-2">
                        {/* Remplacez <Logo /> par un composant affichant "Lovasoa Nantenaina" ou vos initiales */}
                        <span className="text-xl font-bold text-foreground">Lovasoa N.</span> {/* Texte comme logo */}
                    </Link>

                    <button
                        onClick={() => setMenuState(!menuState)}
                        aria-label={menuState == true ? 'Fermer le menu' : 'Ouvrir le menu'} // Texte modifié
                        className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                        <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                        <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                    </button>
                </div>

                {/* Menu de navigation pour grand écran */}
                <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                    <ul className="flex gap-8 text-sm">
                        {/* Les éléments du menu sont maintenant pertinents pour un portfolio */}
                        {[
                            { name: 'Accueil', href: '/' },
                            { name: 'À Propos', href: '#a-propos' },
                            { name: 'Projets', href: '#projets' },
                            { name: 'Compétences', href: '#competences' },
                            { name: 'Contact', href: '#contact' },
                        ].map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Menu de navigation mobile et boutons d'action */}
                <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                    {/* Menu de navigation pour mobile */}
                    <div className="lg:hidden">
                        <ul className="space-y-6 text-base">
                            {[
                                { name: 'Accueil', href: '/' },
                                { name: 'À Propos', href: '#a-propos' },
                                { name: 'Projets', href: '#projets' },
                                { name: 'Compétences', href: '#competences' },
                                { name: 'Contact', href: '#contact' },
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                        {/* Boutons pour un portfolio : "Mon CV" et "Me Contacter" */}
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className={cn(isScrolled && 'lg:hidden')}>
                            <Link href="/CV.pdf" download> {/* Lien pour télécharger votre CV */}
                                <span>Mon CV</span>
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="sm"
                            className={cn(isScrolled && 'lg:hidden')}>
                            <Link href="#contact"> {/* Lien vers la section contact */}
                                <span>Me Contacter</span>
                            </Link>
                        </Button>
                        {/* Bouton "Contactez-moi" visible lors du défilement sur grand écran */}
                        <Button
                            asChild
                            size="sm"
                            className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                            <Link href="#contact">
                                <span>Contactez-moi</span>
                            </Link>
                        </Button>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
    )
}

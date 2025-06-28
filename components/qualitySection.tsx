import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Brain, Lightbulb, Workflow, Award, ShieldCheck, TrendingUp, Users, Code, Puzzle, BookOpen } from 'lucide-react'
import { ReactNode } from 'react'

export default function Qualities() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent" id='a-propos'>
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Ce qui me distingue</h2>
                    <p className="mt-4 text-foreground/80">
                        Voici les qualités qui guident mon approche dans chaque projet de développement.
                    </p>
                </div>
                {/* J'ai ajusté le 'gap' pour un meilleur espacement entre les cartes.
                    Le 'grid' gérera les colonnes et l'espacement entre elles.
                    J'ai aussi ajouté 'gap-y-8' pour l'espacement vertical sur les petits écrans. */}
                <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16 gap-x-8 gap-y-8">

                    {/* Qualité 1: Résolution de Problèmes */}
                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Puzzle
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Résolution de Problèmes</h3>
                        </CardHeader>
                        {/* Augmentez légèrement le padding bottom pour plus d'équilibre si nécessaire */}
                        <CardContent className="pb-6">
                            <p className="text-sm text-foreground/70">
                                Capacité à analyser des défis complexes et à concevoir des solutions robustes et efficaces.
                            </p>
                        </CardContent>
                    </div>

                    {/* Qualité 2: Adaptabilité & Flexibilité */}
                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Lightbulb
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Adaptabilité</h3>
                        </CardHeader>
                        <CardContent className="pb-6">
                            <p className="mt-3 text-sm text-foreground/70">
                                S'adapter rapidement aux nouvelles technologies, méthodologies et exigences des projets.
                            </p>
                        </CardContent>
                    </div>

                    {/* Qualité 3: Apprentissage Continu */}
                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <BookOpen
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Apprentissage Continu</h3>
                        </CardHeader>
                        <CardContent className="pb-6">
                            <p className="mt-3 text-sm text-foreground/70">
                                Veille technologique constante et soif d'acquérir de nouvelles compétences pour rester pertinent.
                            </p>
                        </CardContent>
                    </div>

                    {/* Qualité 4: Esprit d'Équipe */}
                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Users
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Esprit d'Équipe</h3>
                        </CardHeader>
                        <CardContent className="pb-6">
                            <p className="mt-3 text-sm text-foreground/70">
                                Collaborer efficacement avec les membres de l'équipe pour atteindre des objectifs communs.
                            </p>
                        </CardContent>
                    </div>

                    {/* Qualité 5: Rigueur et Qualité de Code */}
                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Code
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Rigueur & Qualité</h3>
                        </CardHeader>
                        <CardContent className="pb-6">
                            <p className="mt-3 text-sm text-foreground/70">
                                Engagement à produire un code propre, testable et maintenable, respectant les bonnes pratiques.
                            </p>
                        </CardContent>
                    </div>

                    {/* Qualité 6: Orientation Résultat */}
                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Award
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Orientation Résultat</h3>
                        </CardHeader>
                        <CardContent className="pb-6">
                            <p className="mt-3 text-sm text-foreground/70">
                                Focalisé sur l'atteinte des objectifs et la livraison de solutions qui apportent de la valeur.
                            </p>
                        </CardContent>
                    </div>

                </Card>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)_10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)_20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)_15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)_20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="bg-radial to-background absolute inset-0 from-transparent to-75%"
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
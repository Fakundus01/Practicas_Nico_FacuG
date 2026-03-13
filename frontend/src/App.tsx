import { FeatureCard } from './components/FeatureCard'
import { Hero } from './components/Hero'
import { features } from './data/features'

function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,122,89,0.18),_transparent_32%),linear-gradient(180deg,_#fffdf8_0%,_#f5efe2_100%)] px-6 py-8 text-brand-dark sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Hero
          title="Una pantalla simple para arrancar rapido."
          description="Este front usa Vite, React, TypeScript y Tailwind. Tiene una estructura corta, responsive y lista para conectarse con Flask."
        />

        <section id="caracteristicas" className="mt-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
              Lo que ya queda listo
            </p>
            <h2 className="mt-4 font-display text-4xl">Base simple, no descartable</h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              La idea no fue hacer una demo vacia, sino dejar un punto de partida prolijo para seguir agregando vistas y llamadas al backend.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App

type HeroProps = {
  title: string
  description: string
}

export function Hero({ title, description }: HeroProps) {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div>
        <span className="inline-flex rounded-full border border-brand-dark/10 bg-white/70 px-4 py-2 text-sm font-semibold text-brand-teal">
          Front simple con base lista para crecer
        </span>
        <h1 className="mt-6 max-w-xl font-display text-5xl leading-tight text-brand-dark sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          {description}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            className="rounded-full bg-brand-dark px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            href="#caracteristicas"
          >
            Ver caracteristicas
          </a>
          <a
            className="rounded-full border border-brand-dark px-6 py-3 text-center text-sm font-semibold text-brand-dark transition hover:bg-brand-dark hover:text-white"
            href="http://127.0.0.1:5000/api/health"
            target="_blank"
            rel="noreferrer"
          >
            Probar API
          </a>
        </div>
      </div>

      <div className="rounded-[2rem] bg-brand-dark p-6 text-white shadow-card sm:p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-sand/70">
          Vista previa
        </p>
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-sm text-brand-sand/80">Stack</p>
            <p className="mt-2 text-2xl font-semibold">React + Flask + PostgreSQL</p>
          </div>
          <div className="rounded-2xl bg-brand-coral p-4 text-brand-dark">
            <p className="text-sm font-semibold">Objetivo</p>
            <p className="mt-2 text-lg">Empezar rapido sin ensuciar la base.</p>
          </div>
          <div className="rounded-2xl border border-white/15 p-4">
            <p className="text-sm text-brand-sand/80">Responsive</p>
            <p className="mt-2 text-lg">Listo para celular y escritorio.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

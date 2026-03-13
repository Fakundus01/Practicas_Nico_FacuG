type FeatureCardProps = {
  title: string
  description: string
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
      <h3 className="font-display text-2xl text-brand-dark">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  )
}

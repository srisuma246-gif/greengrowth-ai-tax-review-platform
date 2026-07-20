export function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <section>
      <h1 className="text-display">{title}</h1>
      <p className="mt-2 text-body-lg text-muted-foreground">{description}</p>
    </section>
  )
}

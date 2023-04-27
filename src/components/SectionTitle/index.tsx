interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h1 className="text-md md:text-2xl font-bold font-mono mb-4">{title}</h1>
  )
}

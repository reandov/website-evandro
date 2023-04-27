interface SectionContainerProps {
  children: React.ReactNode
}

export function SectionContainer({ children }: SectionContainerProps) {
  return <div className="max-w-6xl m-auto pt-8">{children}</div>
}

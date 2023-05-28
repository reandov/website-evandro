interface SectionContainerProps {
  children: React.ReactNode
}

export function SectionContainer({ children }: SectionContainerProps) {
  return <div className="m-auto max-w-7xl pt-8">{children}</div>
}

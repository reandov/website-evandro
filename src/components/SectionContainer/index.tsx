interface SectionContainerProps {
  children: React.ReactNode
}

export function SectionContainer({ children }: SectionContainerProps) {
  return <div className="m-auto lg:pt-8">{children}</div>
}

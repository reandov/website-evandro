import './globals.css'

export const metadata = {
  title: 'Evandro | Portfolio',
  description: 'Personal website of Evandro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

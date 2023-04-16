import './globals.css'

export const metadata = {
  title: 'Spotify UI Clone',
  description: 'Clone Spotify with Tailwindcss and Nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-t to-blue-950/70 from-zinc-950 bg-zinc-900 text-zinc-100 bg-no-repeat bg-contain">{children}</body>
    </html>
  )
}

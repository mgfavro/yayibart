import './globals.css'

export const metadata = {
  title: 'Yayibart - Art Gallery',
  description: 'Contemporary art gallery showcasing unique pieces',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

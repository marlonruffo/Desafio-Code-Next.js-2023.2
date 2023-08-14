export const metadata = {
  title: 'Desafio-Next.js 2023.2',
  description: 'Feito por Marlon Ruffo',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

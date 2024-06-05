import Navbar from "@/components/Index/Navbar"

// Las rutas de un proyecto en Next se basan en los niveles de carpetas que
// existan en el proyecto (next ignorara todos los archivos que se encuentren en la carpeta de app
// a menos que tengan el nombre de page.tsx o layout.tsx)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>My NEXT app</title>
      </head>
      <body>
        <Navbar></Navbar>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

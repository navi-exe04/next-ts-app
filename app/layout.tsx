import Navbar from "@/components/Index/Navbar"

// Podemos exportar nuestra metadata de forma dinamica en una constante
// Esto para no definir la etiqueta heade en nuestro html
export const metadata = {
  // Estos datos sirven para hacer busquedas más eficientes de nuestra paginas en los navegadores
  // Se pueden investigar mas datos que se puedan utilizar aqui en la documentación de NEXT
  title: "HOME - My NEXT app",
  description: "This is a simple next web app",
  keywords: ["Typescript", "Web application", "Programming"]
}

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
      <body>
        <Navbar></Navbar>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

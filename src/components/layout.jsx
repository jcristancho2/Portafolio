import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import ElectronicBackground from "../components/ElectronicBackground"

export const metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  const sans = GeistSans.style?.fontFamily || "sans-serif"
  const mono = GeistMono.variable || "monospace"

  return (
    <html lang="en">
      <head>
        <style>{`
          html {
            font-family: ${sans};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body className="bg-black text-white relative overflow-x-hidden">
        <ElectronicBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Navigation from "./component/navigation/navigation"

import { ReduxProvider } from "./redux/provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Form Builder",
  description: "Generate your for using JSON file",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <main className="flex min-h-screen flex-col items-center justify-between p-4">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
              <h1 className="bg-black p-2 text-lime-400">Form-Builder</h1>
            </div>
            <div className="max-w-6xl w-full rounded overflow-hidden shadow-lg">
              <Navigation />
              <div className="p-4 bg-white box-border ">{children}</div>
            </div>
            <div className="text-xs text-gray-400">Copyrights</div>
          </main>
        </ReduxProvider>
      </body>
    </html>
  )
}

import { Hero } from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Project } from "@/components/Projects"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-900">
      <Navbar />
      <Hero/>
      <Project />
      <Footer />
    </main>
  )
}

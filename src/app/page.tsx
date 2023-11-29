import Contact from '@/components/Contact'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Profile />
      <Projects />
      <Contact />
    </main>
  )
}

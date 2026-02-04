import HeaderNav from '@/components/HeaderNav'
import MainContent from '@/components/MainContent'

function App() {
  const navItems = ['Home', 'Projects', 'Certifications', 'Resume', 'Contact']

  return (
    <>
      <HeaderNav navItems={navItems} />
      <MainContent/>
    </>
  )
}

export default App

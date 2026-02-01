import './App.css'
import HeaderNav from './components/HeaderNav'

function App() {
  const navItems = ['Home', 'Skills', 'Projects', 'Certifications', 'Contact']

  return (
    <>
      <HeaderNav navItems={navItems} />
    </>
  )
}

export default App

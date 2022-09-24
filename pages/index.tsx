import type { NextPage } from 'next'
import Nav from '../components/Nav'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div id="wrapper" className="border-red-400 border flex flex-col justify-center items-center">
      <Nav fourth={'about'}/>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
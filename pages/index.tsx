import type { NextPage } from 'next'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Metadata from '../components/Metadata'
import MapHolder from '../components/MapHolder'

const Home: NextPage = () => {
  return (
    <div id="wrapper" className="flex flex-col justify-center items-center">
      <Metadata />
      <About
        header="About Me"
        paragraph2="Besides school, I enjoy listening to music (favorite genres being progressive house (a la deadmau5), j-rock, among others), as well as playing games (if you consider modding skyrim in an infinite loop without launching the game a game). My favorite content creators are Fireship and Northernlion. I dabble in vtubers. I also have two dogs."
        paragraph1="Hello, my name is Wesley. I am a student at the University of Washington studying geography and data science. I have always been passionate with computers and after taking AP Computer Science during sophomore year I knew that I wanted to work in a field even remotely related to programming."
        destination="/about"
      />
      <Skills />
      <Projects />
      <MapHolder />
      <Footer />
    </div>
  )
}

export default Home

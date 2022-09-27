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
      <About header='about me' img='/grotesque.jpeg' paragraph2='Besides school, I enjoy listening to music (favorite genres being progressive house (a la deadmau5), j-rock, among others), as well as playing games (if you consider modding skyrim in an infinite loop without launching the game a game). I also have two dogs which you can see pictures of here.'paragraph1='Hello, my name is Wesley. I am a student at the University of Washington studying geography and data science. I have always been passionate with computers and after taking AP Computer Science during sophomore year I knew that I wanted to work in a field even remotely related to programming.'/>
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
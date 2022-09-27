import type { NextPage } from 'next'
import Nav from '../components/Nav'
import Specs from '../components/Specs'
import Petfolio from '../components/Petfolio'
import Footer from '../components/Footer'
import Games from '../components/Games'
import Music from '../components/Music'
import About from '../components/About'

const AboutPage: NextPage = () => {
  return (
    <div id="wrapper" className="border-red-400 border flex flex-col justify-center items-center">
      <Nav fourth={'/home'} />
      <About header='even more about me' paragraph1='If you clicked on this for whatever reason, have fun learning more about me than you should really know about me.' img='/grotesque.jpeg'/>
      <Music />
      <Games />
      <Specs />
      <Petfolio />
      <Footer />
    </div>
  )
}

export default AboutPage
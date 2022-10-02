import type { NextPage } from 'next'
import Specs from '../components/Specs'
import Petfolio from '../components/Petfolio'
import Games from '../components/Games'
import Music from '../components/Music'
import About from '../components/About'
import Footer from '../components/Footer'
import Metadata from '../components/Metadata'

const AboutPage: NextPage = () => {
  return (
    <div id="wrapper" className= "flex flex-col justify-center items-center">
      <Metadata />
      <About header='Even More About Me' paragraph1='If you clicked on this for whatever reason, have fun learning more about me than you should really know about me.' destination='/'/>
      <Music />
      <Games />
      <Specs />
      <Petfolio />
      <Footer />
    </div>
  )
}

export default AboutPage
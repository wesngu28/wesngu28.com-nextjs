import type { NextPage } from 'next'
import Nav from '../components/Nav'
import Specs from '../components/Specs'
import Petfolio from '../components/Petfolio'
import Footer from '../components/Footer'
import Overflow from '../components/Overflow'
import Games from '../components/Games'

const AboutPage: NextPage = () => {
  return (
    <div id="wrapper" className="border-red-400 border flex flex-col justify-center items-center">
      <Nav fourth={'/home'} />
      <Overflow />
      <Games />
      <Specs />
      <Petfolio />
      <Footer />
    </div>
  )
}

export default AboutPage
import type { NextPage } from 'next'
import Specs from '../components/Specs'
import Petfolio from '../components/Petfolio'
import Games from '../components/Games'
import Music from '../components/Music'
import About from '../components/About'
import Footer from '../components/Footer'
import Metadata from '../components/Metadata'
import { getAccessToken } from '../helper/access'
import { spotifyArtist } from '../models/spotifyArtist'
import { Artist, topArtist } from '../models/lastFMArtist'
import { lastFMAPI } from '../models/lastFMAPI'
import { spotifyAPI } from '../models/spotifyAPI'

interface Props {
  music: spotifyAPI
  artists: Array<lastFMAPI>
}

export const AboutPage: NextPage<{ music: spotifyAPI; artists: Array<lastFMAPI> }> = ({
  music,
  artists,
}: Props) => {
  return (
    <div id="wrapper" className="flex flex-col justify-center items-center">
      <Metadata />
      <About
        header="Even More About Me"
        paragraph1="If you clicked on this for whatever reason, have fun learning more about me than you should really know about me."
        destination="/"
      />
      <Music spotify={music} lastfm={artists} />
      <Games />
      <Specs />
      <Petfolio />
      <Footer />
    </div>
  )
}

export default AboutPage

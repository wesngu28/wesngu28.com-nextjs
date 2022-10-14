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

export async function getServerSideProps() {
  const getCurrentSong = async () => {
    const { access_token } = await getAccessToken()

    return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
  }

  const getRecentSong = async () => {
    const { access_token } = await getAccessToken()
    return fetch('https://api.spotify.com/v1/me/player/recently-played', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
  }
  const response = await getCurrentSong()

  let spotify = {}
  if (response.status === 204 || response.status > 400) {
    const response = await getRecentSong()
    const recentSongs = await response.json()
    const song = recentSongs.items[Math.floor(Math.random() * recentSongs.items.length)]
    const title = song.track.name
    const artist = song.track.artists
      .map((_artist: spotifyArtist) => _artist.name)
      .join(', ')
    const album = song.track.album.name
    const albumImageUrl = song.track.album.images[0].url
    const songUrl = song.track.external_urls.spotify

    spotify = {
      album,
      albumImageUrl,
      artist,
      songUrl,
      title,
      recent: true,
    }
  } else {
    const song = await response.json()
    const isPlaying = song.is_playing
    const title = song.item.name
    const artist = song.item.artists
      .map((_artist: spotifyArtist) => _artist.name)
      .join(', ')
    const album = song.item.album.name
    const albumImageUrl = song.item.album.images[0].url
    const songUrl = song.item.external_urls.spotify

    spotify = {
      album,
      albumImageUrl,
      isPlaying,
      artist,
      songUrl,
      title,
    }
  }
  const { LASTFM_API_KEY: lastfmKey } = process.env
  const response2 = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=scrambledeggdog&period=1month&limit=8&api_key=${lastfmKey}&format=json`
  )
  const artists = await response2.json()

  const monthlyArtistsName = artists.topartists.artist.map((artist: topArtist) => {
    return {
      name: artist.name,
      playcount: artist.playcount,
    }
  })

  const { access_token } = await getAccessToken()

  const monthlyArtists: Array<Artist> = []
  for (let i = 0; i < monthlyArtistsName.length; i++) {
    const search = await fetch(
      `https://api.spotify.com/v1/search?q=${monthlyArtistsName[i].name}&type=artist&limit=1&locale=en-US`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
    const artistResult = await search.json()
    monthlyArtists.push({
      name: monthlyArtistsName[i].name,
      playcount: monthlyArtistsName[i].playcount,
      href: artistResult.artists.items[0].external_urls.spotify,
      img: artistResult.artists.items[0].images[2].url,
    })
  }

  return {
    props: {
      music: spotify,
      artists: monthlyArtists,
    },
  }
}

export default AboutPage

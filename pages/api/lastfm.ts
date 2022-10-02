import type { NextApiRequest, NextApiResponse } from 'next'
import { getAccessToken } from '../../helper/access'

const {
    LASTFM_API_KEY: lastfmKey
} = process.env

interface Artist {
    name: string
    playcount: number
    href: string
    img: string
}

interface topArtist {
    streamable: string
    image: []
    mbid: string
    url: string
    playcount: string
    attr: {
        rank: string
    }
    name: string
}

const lastFM = async (_: NextApiRequest, res: NextApiResponse) => {

    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=scrambledeggdog&period=1month&limit=8&api_key=${lastfmKey}&format=json`)
    const artists = await response.json()

    const monthlyArtistsName = artists.topartists.artist.map((artist: topArtist) => {
        return {
            name: artist.name,
            playcount: artist.playcount,
        }
    })

    const { access_token } = await getAccessToken()

    const monthlyArtists: Array<Artist> = []
    for (let i = 0; i < monthlyArtistsName.length; i++) {
        const search = await fetch(`https://api.spotify.com/v1/search?q=${monthlyArtistsName[i].name}&type=artist&limit=1&locale=en-US`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                Accept: "application/json",
                "Content-Type" : "application/json"
            },
        })
        const artistResult = await search.json()
        monthlyArtists.push({
            name: monthlyArtistsName[i].name,
            playcount: monthlyArtistsName[i].playcount,
            href: artistResult.artists.items[0].external_urls.spotify,
            img: artistResult.artists.items[0].images[2].url,
        })
    }

    return res.status(200).json({
        monthlyArtists
    })
}

export default lastFM
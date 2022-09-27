import type { NextApiRequest, NextApiResponse } from 'next'
import { getAccessToken } from '../../helper/access';

const {
    LASTFM_API_KEY: lastfmKey
} = process.env;

interface Artist {
    name: string;
    url: string;
}

export default async (_: NextApiRequest, res: NextApiResponse) => {

    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=scrambledeggdog&period=1month&limit=8&api_key=${lastfmKey}&format=json`)
    const artists = await response.json()

    console.log(artists.topartists.artist)

    const monthlyArtistsName = artists.topartists.artist.map((artist) => {
        return `${artist.name} - ${artist.playcount} plays`
    })

    const { access_token } = await getAccessToken()

    const monthlyArtists: Array<Artist> = [];
    for (let i = 0; i < monthlyArtistsName.length; i++) {
        const search = await fetch(`https://api.spotify.com/v1/search?q=${monthlyArtistsName[i]}&type=artist&limit=1`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                Accept: "application/json",
                "Content-Type" : "application/json"
            },
        })
        const artistResult = await search.json()
        monthlyArtists.push({
            name: monthlyArtistsName[i],
            url: artistResult.artists.items[0].images[2].url,
        })
    }

    return res.status(200).json({
        monthlyArtists
    });
};
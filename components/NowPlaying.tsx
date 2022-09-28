import Image from 'next/image';
import useSWR from 'swr';

export default function NowPlaying() {

    const swrFetch = async (url: string) => {
        const songQuery = await fetch(url)
        const songJson = await songQuery.json()
        return songJson;
    }

    const { data, error } = useSWR('/api/spotify', swrFetch, {
        refreshInterval: 30000
    });

    if (error) console.log(error)

    const trimText = (text: string) => {
        if (text.length > 34) {
            text = text.substring(0, 34);
            return `${text}...`;
        }
        return text;
    }

    return (
        <div className='bg-[#292C33] w-max p-4 flex items-center justify-center'>
            <div className="w-72 flex flex-col">
                <p className="text-center">{data ? (data.recent ? 'Recently Played on Spotify' : 'Currently Live on Spotify') : 'Getting song...' }</p>
                <p className="mt-5 m-auto text-sm font-bold">PLAYING FROM ALBUM</p>
                <p className="m-auto mb-11">
                    {data ? trimText(data.album) : 'Getting album...'}
                </p>
                <a target="_blank" href={data ? data.songUrl : ''} rel="noopener noreferrer">
                    <Image className="m-auto mb-11" alt={`album cover of ${data ? data.album : 'loading album'}}`}src={data ? data.albumImageUrl : '/spotify.svg'} width={'300px'} height={'300px'}/>
                </a>
                <p className="text-left font-bold">{data ? data.title : 'Getting title...'}</p>
                <p>{data ? data.artist : 'Getting artists...'}</p>
            </div>

        </div>
    )
}
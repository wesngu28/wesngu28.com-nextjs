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
        <div className='bg-[#292C33] w-max p-4 flex items-center justify-center m-auto'>
            <div className="w-72 flex flex-col">
                <p className="text-center">{data ? (data.recent ? 'Recently Played on Spotify' : 'Currently Live on Spotify') : 'wamb' }</p>
                <p className="mt-5 m-auto text-sm font-bold">PLAYING FROM ALBUM</p>
                <p className="m-auto mb-11">
                    {data ? trimText(data.album) : 'fal'}
                </p>
                <img className="m-auto mb-11" src={data ? data.albumImageUrl : 'grotesque.jpeg'} />
                <p className="text-left font-bold">{data ? data.title : 'OK'}</p>
                <p>{data ? data.artist : 'di'}</p>
            </div>

        </div>
    )
}
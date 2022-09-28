import Image from 'next/image';
import useSWR from 'swr';

export default function ArtistCard() {

    const swrFetch = async (url: string) => {
        const songQuery = await fetch(url)
        const songJson = await songQuery.json()
        return songJson;
    }

    const { data, error } = useSWR('/api/lastfm', swrFetch, {
        revalidateOnFocus: false, refreshInterval: 86400000
    });

    if (error) console.log(error)

    return (
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-max"> 
                {data ? data.monthlyArtists.map((arr) => {
                    return (
                        <li key={arr.name} className="flex justify-center items-center m-2 p-1 bg-[beige] text-black rounded-lg">
                            <a target="_blank" href={arr.href} rel="noopener noreferrer"><Image className="m-auto" src={arr.img} title={`${arr.name} - ${arr.playcount} plays`} width={'160px'} height={'160px'}/></a>
                        </li>
                    );
                }) : 'Loading top artists...'}
            </ul>
        )
}
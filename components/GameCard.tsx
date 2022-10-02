import Image, { StaticImageData } from "next/image"
import { useState } from "react"
import { useInView } from "react-intersection-observer"

interface Props {
    name: string
    url: string
    cover: StaticImageData
    stats: StaticImageData
    delay?: string
}

interface skyrimProps {
    stats: StaticImageData
}

export default function GameCard({ name, url, cover, stats, delay }: Props) {

    const { ref: gameRef, inView: isInView} = useInView({
        triggerOnce: true
    })

    const openNewTab = (gameUrl: string) => {
        window.open(gameUrl, '_blank', 'noopener,noreferrer')
    }

    const [moreInfo, setMoreInfo] = useState(false)

    return (
        <>
            <li ref={gameRef} className={`${isInView ? `${delay} opacity-100 md:translate-x-0-all duration-1000` : 'md:-translate-x-full  opacity-0'} bg-[#21222a] hover:z-50 m-1 inline-block border-b-4`}>
                <div onClick={() => openNewTab(url)} className="peer hover:scale-125 hover:cursor-pointer z-10 ease-out">
                <Image
                            onMouseEnter={() => setMoreInfo(true)}
                            onMouseLeave={() => setMoreInfo(false)}
                            src={cover} title={name} alt={`${name} header`} layout="responsive" width={'460px'} height={'215px'} />
                </div>
                <div className="absolute left-1/2 md:opacity-0 peer-hover:opacity-100 transition-opacity duration-500 z-50">
                    {moreInfo && (
                        <div className="relative bg-[#6E644E] rounded-xl mt-11 p-2 -left-1/2 top-6 w-screen md:w-full">
                            {name === 'Skyrim' ? <Skyrim stats={stats}/> : <Image className="m-auto" alt={`${name} stats`} src={stats} />}
                        </div>
                    )}
                </div>
            </li>
        </>
    )
}

function Skyrim({stats}: skyrimProps) {
    return (
        <>
            <p>Known colloquially as Mod Organizer 2.</p>
            <p>I have only ever finished this game once, as a Redguard sneak archer.</p>
            <Image alt={'steam skyrim stats'} src={stats} />

            <table className="m-auto w-full bg-slate-800">
                <caption className="mb-5 font-bold">Elder Scrolls Favorites</caption>
                <tr className="text-center border-b">
                    <th></th>
                    <th>Skyrim</th>
                    <th>Tamriel</th>
                </tr>
                <tr className="text-center">
                    <td>Race</td>
                    <td>Redguard</td>
                    <td>Dunmer</td>
                </tr>
                <tr className="text-center">
                    <td>Province</td>
                    <td>N/A</td>
                    <td>Cyrodill</td>
                </tr>
                <tr className="text-center">
                    <td>City</td>
                    <td>Solitude</td>
                    <td>Imperial City</td>
                </tr>
                <tr className="text-center">
                    <td>Daedric Prince</td>
                    <td>Clavicus Vile</td>
                    <td>Azura</td>
                </tr>
                <tr className="text-center">
                    <td>Aedric Entity</td>
                    <td>Akatosh</td>
                    <td>Akatosh</td>
                </tr>
                <tr className="text-center">
                    <td>Character</td>
                    <td>Breylna Maryon</td>
                    <td>Katariah Septim</td>
                </tr>
            </table>
        </>
    )
}
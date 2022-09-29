import Image from "next/image";
import { useState } from "react";

import skyrim from '../public/games/Skyrim.png'
import hoi4 from '../public/games/hoi4.png'
import sap from '../public/games/SAP.png'
import league from '../public/games/League.png'
import sc2 from '../public/games/SC2.png'
import civ from '../public/games/civfive.png'
import ak from '../public/games/Arknights.png'
import al from '../public/games/Azur.png'

interface Props {
    image: string;
    name: string;
    url: string;
    imgName: string;
}

export default function GameCard({ image, name, url, imgName }: Props) {

    const openNewTab = (gameUrl: string) => {
        window.open(gameUrl, '_blank', 'noopener,noreferrer');
    };

    const [moreInfo, setMoreInfo] = useState(false)

    return (
        <>
            <li className="bg-[#21222a] hover:z-50 m-1 inline-block border-b-4">
                <div onClick={() => openNewTab(url)} className="peer hover:scale-125 hover:cursor-pointer z-10 ease-out">
                <Image
                            onMouseEnter={() => setMoreInfo(true)}
                            onMouseLeave={() => setMoreInfo(false)}
                            src={image} title={name} alt={`${name} header`} layout="responsive" width={'460px'} height={'215px'} />
                </div>
                <div className="absolute left-1/2 md:opacity-0 peer-hover:opacity-100 transition-opacity duration-500 z-50">
                    {moreInfo && (
                        <div className="relative bg-[#6E644E] rounded-xl mt-11 p-2 -left-1/2 top-6 w-screen md:w-full">
                            {imgName === 'skyrim' ? <Skyrim /> : <Image className="m-auto" alt={`${name} stats`} src={imgName === 'hoi4' ? hoi4 : imgName === 'lol' ? league : imgName === 'sap' ? sap : imgName === 'sc2' ? sc2 : imgName === 'ak' ? ak : imgName === 'civ' ? civ : al} />}
                        </div>
                    )}
                </div>
            </li>
        </>
    )
}

function Skyrim() {
    return (
        <>
            <p>Known colloquially as Mod Organizer 2.</p>
            <p>I have only ever finished this game once, as a Redguard sneak archer.</p>
            <Image alt={'steam skyrim stats'} src={skyrim} />

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
import Image from "next/image";
import { useState } from "react";
import GameInfo from "./GameInfo";

interface Props {
    image: string;
    name: string;
    url: string;
}

export default function GameCard({ image, name, url }: Props) {

    const openNewTab = (gameUrl: string) => {
        window.open(gameUrl, '_blank', 'noopener,noreferrer');
    };

    const [moreInfo, setMoreInfo] = useState(false)

    return (
        <>
            <li className="bg-[#21222a] m-1 inline-block border-b-4">
                <div onClick={() => openNewTab(url)} className="peer hover:scale-125 hover:cursor-pointer z-10 ease-out">
                    <div className="relative">
                        <Image
                            onMouseEnter={() => setMoreInfo(true)}
                            onMouseLeave={() => setMoreInfo(false)}
                            src={image} title={name} alt={`${name} header`} layout="responsive" width={'460px'} height={'215px'} />
                    </div>
                </div>
                <div className="absolute left-1/2 opacity-0 peer-hover:opacity-100 transition-opacity duration-500 z-50">
                    {moreInfo && (
                        <div className="relative bg-[#6E644E] rounded-3xl mt-11 p-4 -left-1/2 top-6 w-screen md:w-full">
                            <GameInfo name={name} />
                        </div>
                    )}
                </div>
            </li>
        </>
    )
}
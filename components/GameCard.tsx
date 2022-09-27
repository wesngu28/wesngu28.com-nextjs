import { useState } from "react";
import GameInfo from "./GameInfo";

interface Props {
    image: string;
    name: string;
    dropdown?: boolean;
}

export default function GameCard(props: Props) {

    const [moreInfo, setMoreInfo] = useState(false)

    return (
        <>
            <li className="bg-[#21222a] m-1 inline-block border-b-4">
                <div className="peer hover:scale-125 z-10 ease-out">
                    <img
                        onMouseEnter={() => setMoreInfo(true)}
                        onMouseLeave={() => setMoreInfo(false)}
                        className="w-full" src={props.image} title={props.name} />
                </div>
                <div className="absolute left-1/2 opacity-0 peer-hover:opacity-100 transition-opacity duration-500">
                    {moreInfo && (
                        <div className="relative bg-[#6E644E] rounded-3xl mt-11 p-4 -left-1/2 top-6 w-screen md:w-full">
                            <GameInfo name={props.name} />
                        </div>
                    )}
                </div>
            </li>
        </>
    )
}
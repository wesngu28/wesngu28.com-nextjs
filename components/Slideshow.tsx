import Image from "next/image";
import { useState } from "react";

interface Props {
    photos: string[];
    caption?: Array<{
        location: string;
        duration: string;
        title: string;
    }>;
}

export default function Slideshow({ photos, caption }: Props) {
    const [active, setActive] = useState(0)

    function decrementImage() {
        if (active === -1) return setActive(0)
        setActive(active - 1)
    }

    function incrementImage() {
        if (active === photos.length - 1) return setActive(0)
        setActive(active + 1)
    }

    return (
        <div className="flex items-center justify-center">
            <p onClick={decrementImage} className="text-6xl text-[#6E6E6E]">&#8592;</p>
            {photos.map((arr: string, i: number) => {
                return (
                    <div key={arr} className={`flex justify-center w-[150px] md:w-[350px] md:h-[400px] h-80 m-auto relative ${active === i ? 'block animate-slideshow' : 'hidden'}`}>
                        {caption ? 
                            <div>
                                <h2 className="text-center text-xl font-bold">{caption[i].location}</h2>
                            </div>
                        : null}
                        <Image alt={'Cami'} objectFit="contain" layout="fill" key={i} src={`/${arr}`} priority={true} />
                        {caption ? <p className={"text-center -bottom-2 absolute"}><span className="font-bold">{caption[i].title}</span> - {caption[i].duration}</p> : null}
                     </div>
                );
            })}
            <p onClick={incrementImage} className="text-6xl text-[#6E6E6E]">&#8594;</p>
        </div>
    )
}
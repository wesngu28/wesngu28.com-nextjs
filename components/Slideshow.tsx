import Image from "next/image";
import { useState } from "react";

interface Props {
    photos: string[];
}

export default function Slideshow(props: Props) {

    const [active, setActive] = useState(0)

    function decrementImage () {
        if ( active === -1) return setActive(0)
        setActive(active - 1)
    }

    function incrementImage () {
        if ( active === props.photos.length - 1) return setActive(0)
        setActive(active + 1)
    }

    return (
        <div className="flex items-center justify-center">
            <p onClick={decrementImage} className="text-6xl text-[#6E6E6E]">&#8592;</p>
            {props.photos.map((arr: string, i: number) => {
                return (
                        <div key={arr} className={`w-[150px] md:w-[350px] md:h-[400px] h-80 m-auto relative ${active === i ? 'block animate-slideshow' : 'hidden'}`}>
                            <Image alt={'Cami'} objectFit="cover" layout="fill" key={i} src={`/${arr}`} priority={true}/> 
                        </div>
                );
            })}
            <p onClick={incrementImage} className="text-6xl text-[#6E6E6E]">&#8594;</p>
        </div>
    )
}
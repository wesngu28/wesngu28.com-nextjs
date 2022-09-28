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
                    active === i ? <img className="object-cover w-[350px] md:w-full h-[350px] sm:h-80 m-auto" key={i} src={arr}/> : <img className="w-[75%] m-auto hidden" key={i} src={arr} />
                );
            })}
            <p onClick={incrementImage} className="text-6xl text-[#6E6E6E]">&#8594;</p>
        </div>
    )
}
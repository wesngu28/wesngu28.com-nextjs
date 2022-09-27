import { useState } from "react";

interface Props {
    photos: string[];
}

export default function Slideshow(props: Props) {

    const [active, setActive] = useState(0)

    function incrementImage () {
        if ( active === props.photos.length - 1) return setActive(0)
        setActive(active + 1)
    }

    return (
        <div className="flex items-center">
            <p className="text-6xl text-[#6E6E6E]">&#8592;</p>
            {props.photos.map((arr: string, i: number) => {
                return (
                    active === i ? <img className="w-[75%] m-auto" key={i} src={arr}/> : <img className="w-[75%] m-auto hidden" key={i} src={arr} />
                );
            })}
            <p onClick={incrementImage} className="text-6xl text-[#6E6E6E]">&#8594;</p>
        </div>
    )
}
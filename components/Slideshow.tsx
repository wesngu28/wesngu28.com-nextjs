import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface Props {
    photos: StaticImageData[];
    dynamicAlt: string[];
    caption?: Array<{
        location: string;
        duration: string;
        title: string;
    }>;
}

export default function Slideshow({ photos, dynamicAlt, caption }: Props) {
    const [active, setActive] = useState(0)

    function decrementImage() {
        setActive(active - 1)
        if (active === 0) {
            return setActive(photos.length-1)
        }
    }

    function incrementImage() {
        setActive(active + 1)
        if (active === photos.length - 1) {
            return setActive(0)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <p onClick={decrementImage} className="text-6xl text-[#6E6E6E]">&#8592;</p>
            {photos.map((photo: StaticImageData, i: number) => {
                return (
                    <div key={i} className={`flex justify-center ${photos.length === 6  ? 'h-96 md:h-1/2 w-[200px] md:w-1/2' : null } m-auto relative ${active === i ? 'block animate-slideshow' : 'hidden'}`}>
                        {caption ? 
                            <div>
                                <h2 className="text-center text-xl font-bold">{caption[i].location}</h2>
                                <p className="text-center" ><span className="font-bold">{caption[i].title}</span> - {caption[i].duration}</p>
                            </div>
                        : null}
                        <Image alt={dynamicAlt.length > 1 ? dynamicAlt[i] : dynamicAlt[0]} key={i} src={photo} priority={true} className='object-contain' />
                     </div>
                );
            })}
            <p onClick={incrementImage} className="text-6xl text-[#6E6E6E]">&#8594;</p>
        </div>
    )
}
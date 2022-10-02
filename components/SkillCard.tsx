import Image from "next/image"

interface Props {
    images: string[]
    name: string
    desc: string
}

export default function SkillCard({images, name, desc}: Props) {

    let grid = "grid-cols-1"

    if(images.length > 2) {
        grid = "grid-cols-2"
    }

    return (
        <li className="bg-[#21222a] m-4 w-[225px] h-[450px] rounded-2xl">
            <div className={`relative h-[60%] grid ${grid}`}>
                {images.map((arr, i) => {
                    return (
                        <div key={arr} className="m-2 relative">
                            <Image alt={`${name} logo`}src={`/${arr}`} objectFit="contain" layout="fill"/>
                        </div>
                    )
                })}
            </div>
            <h2 className="text-2xl text-center">{name}</h2>
            <p className="p-2 mt-2 text-sm text-center">{desc}</p>
        </li>
    )
}
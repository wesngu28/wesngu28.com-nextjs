import Image from "next/image";

interface Props {
    images: string[];
    name: string;
    desc: string;
}

export default function SkillCard(props: Props) {

    let grid = 'grid-cols-1'

    if(props.images.length > 2) {
        grid = 'grid-cols-2'
    }

    return (
        <li className="bg-[#21222a] m-4 w-[225px] h-[450px] rounded-2xl">
            <div className={`relative h-[60%] grid ${grid}`}>
                {props.images.map((arr, i) => {
                    return (
                        <div className="m-2 relative">
                            <Image src={`/${arr}`} objectFit="contain" layout="fill"/>
                        </div>
                    );
                })}
            </div>
            <h2 className="text-2xl text-center">{props.name}</h2>
            <p className="p-2 mt-2 text-sm text-center">{props.desc}</p>
        </li>
    )
}
import Image, { StaticImageData } from "next/image"

interface Props {
    img: StaticImageData;
    name: string;
    url: string;
}

export default function NavLink({img, url, name}: Props) {
    
    return (
        <li className="rounded-lg flex justify-center w-min items-center m-2 p-1 bg-[#D3D3D3]">
            <div className="w-6 h-6 mr-2">
                <Image className="box-border object-cover" alt={`${name} logo`} src={img} />
            </div>
            <a target="_blank" href={url} rel="noopener noreferrer" className="text-black md:text-xl hover:underline">
                {name === 'email' ? 'wesngu028@gmail.com' : name === 'resume' ? 'resume' : 'wesngu28'}
            </a>
        </li>
    )
}
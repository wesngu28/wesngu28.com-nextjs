import Image from "next/image"
import github from "../public/github.svg"
import linkedin from "../public/linkedin.svg"
import email from "../public/email.svg"
import resume from "../public/resume.png"

interface Props {
    imgName: string;
    url: string;
}

export default function NavLink({imgName, url}: Props) {
    
    return (
        <li className="rounded-lg flex justify-center w-min items-center m-2 p-1 bg-[#D3D3D3]">
            <div className="w-6 h-6 mr-2">
                <Image className="box-border object-cover" alt={`${imgName} logo`} src={imgName === 'github' ? github : imgName === 'linkedin' ? linkedin : imgName === 'email' ? email : resume} />
            </div>
            <a target="_blank" href={url} rel="noopener noreferrer" className="text-black md:text-xl hover:underline">
                {imgName === 'email' ? 'wesngu028@gmail.com' : imgName === 'resume' ? 'resume' : 'wesngu28'}
            </a>
        </li>
    )
}
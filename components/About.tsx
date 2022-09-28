import Link from "next/link";
import Image from "next/image"
import me from "../public/grotesque.jpeg"
import github from "../public/github.svg"
import linkedin from "../public/linkedin.svg"
import email from "../public/email.svg"
import resume from "../public/resume.png"

interface Props {
    header: string;
    paragraph1: string;
    paragraph2?: string;
    destination: string;
}

export default function About({ header, paragraph1, paragraph2, destination }: Props) {
    return (
        <div className="mt-11 md:flex justify-center items-center p-4 bg-[#1F2022] w-[75vw] rounded-3xl">
            <div className="p-4 w-[55vw] m-auto">
                <h1 className="text-center text-3xl font-bold">
                    {header}
                </h1>
                <p className="p-4 text-left text-xl leading-8">
                    {paragraph1}
                </p>
                <p className="p-4 text-left text-xl leading-8">
                    {paragraph2}
                </p>
                <Link href={destination}>
                    <div className="transform h-max w-max transition duration-500 hover:scale-105">
                        <a className="hover:text-yellow-400 underline p-4 text-left text-xl leading-8">{destination === '/' ? 'Click me to return home' : 'Click me for more about me'}</a>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-3/5">
                    <Image className="p-4 rounded-full mx-auto object-cover" alt="photo of me" src={me} />
                </div>
                <ul className="list-none flex flex-wrap items-center justify-center">
                    <li className="rounded-lg flex justify-center w-min items-center m-2 p-4 bg-[#D3D3D3]">
                        <div className="w-6 h-6 mr-2">
                            <Image className="box-border object-cover" alt="github logo" src={github} />
                        </div>
                        <a target="_blank" href="https://github.com/wesngu28" rel="noopener noreferrer" className="text-black text-xl hover:underline">wesngu28</a>
                    </li>
                    <li className="rounded-lg flex justify-center w-min items-center m-2 p-4 bg-[#D3D3D3]">
                        <div className="w-6 h-6 mr-2">
                            <Image className="box-border object-cover" alt="linkedin logo" src={linkedin} />
                        </div>
                        <a target="_blank" href="https://www.linkedin.com/in/wesngu28/" rel="noopener noreferrer" className="text-black text-xl hover:underline">wesngu28</a>
                    </li>
                    <li className="rounded-lg flex justify-center w-min items-center m-2 p-4 bg-[#D3D3D3]">
                        <div className="w-6 h-6 mr-2">
                            <Image className="box-border object-cover" alt="email icon" src={email} />
                        </div>
                        <p title="this should be wesngu28 why is there a 0" className="text-black text-lg hover:underline">wesngu028@gmail.com</p>
                    </li>
                    <li className="rounded-lg flex justify-center w-min items-center m-2 p-4 bg-[#D3D3D3]">
                        <div className="w-6 h-6 mr-2">
                            <Image className="box-border object-cover" alt="paper emoji" src={resume} />
                        </div>
                        <a target="_blank" href="https://wesngu28.github.io/resume/" rel="noopener noreferrer" className="text-black text-lg hover:underline">resume</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
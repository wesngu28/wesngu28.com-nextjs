import Link from "next/link";
import Image from "next/image"
import me from "../public/grotesque.jpeg"
import NavLink from "./NavLink";
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
        <div className="md:flex justify-center items-center p-4 bg-[#1F2022] w-full relative">
            <div className="md:p-4 w-full md:w-[75vw] lg:w-[55vw] m-auto flex justify-center items-center flex-col">
                <h1 className="text-center text-3xl font-bold">
                    {header}
                </h1>
                <p className="md:p-4 text-left text-md md:text-xl leading-8">
                    {paragraph1}
                </p>
                <p className="md:p-4 text-left text-md md:text-xl leading-8">
                    {paragraph2}
                </p>
                <Link href={destination}>
                    <div className="hover:animate-pulse ransform h-max w-max transition duration-500 hover:scale-105">
                        <a className="hover:text-yellow-400 underline p-4 text-left text-sm md:text-xl leading-8 m-auto">{destination === '/' ? 'Click me to return home' : 'Click me for more about me'}</a>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-3/5">
                    <Image className="p-4 rounded-full mx-auto object-cover" alt="photo of me" src={me} />
                </div>
                <ul className="list-none flex flex-wrap items-center justify-center">
                    <NavLink img={github} name="github" url="https://www.github.com/wesngu28" />
                    <NavLink img={linkedin} name="linkedin" url="https://www.linkedin.com/in/wesngu28/" />
                    <NavLink img={email} name="email" url="" />
                    <NavLink img={resume} name="resume" url="https://wesngu28.github.io/resume/" />
                </ul>
            </div>
        </div>
    )
}
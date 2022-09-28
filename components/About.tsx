import Link from "next/link";

interface Props {
    header: string;
    paragraph1: string;
    paragraph2?: string;
    img: string;
    destination: string;
}

export default function About({ header, paragraph1, paragraph2, img, destination }: Props) {
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
                    <a className="p-4 text-left text-xl leading-8 hover:underline">{destination === '/' ? 'Return home' : 'Even more about me'}</a>
                </Link>
            </div>
            <div className="flex flex-col">
                <img className="p-4 rounded-full mx-auto w-3/5" src={img} />
                <ul className="list-none flex flex-wrap items-center justify-center">
                    <li className="rounded-lg flex justify-center w-min items-center m-2 p-4 bg-[#D3D3D3]">
                        <img className="box-border w-6 h-6 mr-2" src="/github.svg" />
                        <a target="_blank" href="https://github.com/wesngu28" rel="noopener noreferrer" className="text-black text-xl hover:underline">wesngu28</a>
                    </li>
                    <li className="rounded-lg flex justify-center w-min items-center m-2 p-4 bg-[#D3D3D3]">
                        <img className="box-border h-6 w-6 mr-2" src="/linkedin.svg" />
                        <a target="_blank" href="https://www.linkedin.com/in/wesngu28/" rel="noopener noreferrer" className="text-black text-xl hover:underline">wesngu28</a>
                    </li>
                    <li className="rounded-lg flex justify-center w-min items-center m-2 p-4 bg-[#D3D3D3]">
                        <img className="box-border h-6 w-6 mr-2" src="/email.svg" />
                        <p title="this should be wesngu28 why is there a 0" className="text-black text-lg hover:underline">wesngu028@gmail.com</p>
                    </li>
                    <li className="rounded-lg flex justify-center w-min items-center m-2 p-4 bg-[#D3D3D3]">
                        <img className="box-border h-6 w-6 mr-2" src="/resume.png" />
                        <a target="_blank" href="https://wesngu28.github.io/resume/" className="text-black text-lg hover:underline">resume</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
import Link from "next/link"

export default function MapHolder() {
    return (
        <div className="w-[85vw] mt-11 relative">
            <h1 className="text-center font-bold text-2xl p-2">My Pathway</h1>
            <p className="m-auto break-normal text-center">I have had a lot of successes and missteps on the way to where I am now. Click here to navigate a scrollytelling map about it.</p>
            <Link href={'/map'}>
                <div className="m-auto mt-5 hover:animate-pulse transform h-max w-max transition duration-500 hover:scale-105 mb-40">
                    <a className="hover:text-yellow-400 underline p-4 text-left text-sm md:text-xl leading-8 m-auto">Clickity</a>
                </div>
            </Link>
        </div>
    )
}
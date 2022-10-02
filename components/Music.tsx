import ArtistCard from "./ArtistCard"
import NowPlaying from "./NowPlaying"

export default function Music() {

    return(
        <div className="mb-20 flex w-[100vw] justify-evenly items-center flex-col md:flex-row relative">
            <div className="absolute top-0 left-0 overflow-hidden leading-none w-full">
                <svg className="relative block w-[calc(128%+2px)] h-[111px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path className="fill-[#1F2022]" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
            <div className="mt-40 flex w-[75vw] justify-evenly items-center flex-col md:flex-row relative">
                <NowPlaying />
                <ul className="flex flex-wrap justify-center m-4">
                    <div>
                        <p className="text-center mt-11 mb-5">My Top Artists This Month</p>
                        <ArtistCard />
                    </div>
                </ul>
            </div>
        </div>
    )

}
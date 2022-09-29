import ArtistCard from "./ArtistCard";
import NowPlaying from "./NowPlaying";

export default function Music() {

    return(
        <div className="mt-11 flex h-[75vh] w-[75vw] justify-evenly items-center flex-col md:flex-row">
            <NowPlaying />
            <ul className="flex flex-wrap justify-center">
                <div>
                    <p className="text-center mt-11 mb-5">My Top Artists This Month</p>
                    <ArtistCard />
                </div>
            </ul>
        </div>
    )

}
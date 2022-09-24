import GameCard from './GameCard'

export default function Games() {
    return (
        <div className="w-[85vw] mt-11">
            <h1 className="ml-10 text-2xl p-2">Games</h1>
            <p className="ml-10 p-4 text-left text-xl leading-8 mb-4">These are just some games I like playing.</p>
            <ul className="flex flex-wrap justify-center">
                <GameCard name={'Skyrim'} image={'https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg?t=1650909796'} />
                <GameCard name={'Hearts of Iron IV'} image={'https://cdn.akamai.steamstatic.com/steam/apps/394360/header.jpg?t=1661438345'} />
                <GameCard name={'Super Auto Pets'} image={'https://cdn.akamai.steamstatic.com/steam/apps/1714040/header.jpg?t=1660917023'} />
                <GameCard name={'League of Legends'} image={'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/0d441de75945e5acbc865406fc9a2559.png'} />
                <GameCard name={'Starcraft II'} image={'https://o.aolcdn.com/hss/storage/midas/87ef85574244b74f1d251b63a07b7abb/203880681/starcraftii-logo.jpg'} />
                <GameCard name={'Civilization V'} image={'https://cdn.akamai.steamstatic.com/steam/apps/8930/header.jpg?t=1579731804'} />
                <GameCard name={'Arknights'} image={'https://www.gameuidatabase.com/uploads/Arknights01252021-022418-77137.jpg'} />
                <GameCard name={'Azur Lane'} image={'https://play-lh.googleusercontent.com/mCGiltQHJLoVQ6CV4Ylzuewp7KEcIaMk0LcRF1y3r3gLlOOvAIC1QjW9JiYnddWyMQ'} />
            </ul>
        </div>
    )
}
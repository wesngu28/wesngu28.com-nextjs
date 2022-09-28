import GameCard from './GameCard'

export default function Games() {
    return (
        <div className="w-[75vw] mt-11">
            <h1 className="text-center text-2xl mb-0">Games</h1>
            <p className="p-4 text-center text-xl">These are just some games I like playing.</p>
            <ul className="grid grid-cols-2 md:grid-cols-4">
                <GameCard name={'Skyrim'} image={'https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg?t=1650909796'} url={'https://elderscrolls.bethesda.net/en/skyrim'} />
                <GameCard name={'Hearts of Iron IV'} image={'https://cdn.akamai.steamstatic.com/steam/apps/394360/header.jpg?t=1661438345'} url={'https://www.paradoxinteractive.com/games/hearts-of-iron-iv/about'} />
                <GameCard name={'Super Auto Pets'} image={'https://cdn.akamai.steamstatic.com/steam/apps/1714040/header.jpg?t=1660917023'} url={'https://teamwoodgames.com/'} />
                <GameCard name={'League of Legends'} image={'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/0d441de75945e5acbc865406fc9a2559.png'} url={'https://www.leagueoflegends.com/en-us/'} />
                <GameCard name={'Starcraft II'} image={'https://o.aolcdn.com/hss/storage/midas/87ef85574244b74f1d251b63a07b7abb/203880681/starcraftii-logo.jpg'} url={'https://starcraft2.com/en-us/'} />
                <GameCard name={'Civilization V'} image={'https://cdn.akamai.steamstatic.com/steam/apps/8930/header.jpg?t=1579731804'} url={'https://civilization.com/civilization-5/'} />
                <GameCard name={'Arknights'} image={'https://www.gameuidatabase.com/uploads/Arknights01252021-022418-77137.jpg'} url={'https://www.arknights.global/'} />
                <GameCard name={'Azur Lane'} image={'azur-logo.jpg'} url={'https://azurlane.yo-star.com/#/'} />
            </ul>
        </div>
    )
}
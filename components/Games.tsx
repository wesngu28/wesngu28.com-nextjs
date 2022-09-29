import GameCard from './GameCard'

export default function Games() {
    return (
        <div className="w-[75vw] mt-11">
            <h1 className="text-center text-2xl mb-0">Games</h1>
            <p className="p-4 text-center text-xl">These are just some games I like playing.</p>
            <ul className="grid grid-cols sm:grid-cols-2 md:grid-cols-4">
                <GameCard name={'Skyrim'} image={'/gamecover/skyrim.jpg'} url={'https://elderscrolls.bethesda.net/en/skyrim'} imgName='skyrim' />
                <GameCard name={'Hearts of Iron IV'} image={'/gamecover/hoi4.jpg'} url={'https://www.paradoxinteractive.com/games/hearts-of-iron-iv/about'} imgName='hoi4' />
                <GameCard name={'Super Auto Pets'} image={'/gamecover/sap.jpg'} url={'https://teamwoodgames.com/'} imgName='sap' />
                <GameCard name={'League of Legends'} image={'/gamecover/league.png'} url={'https://www.leagueoflegends.com/en-us/'} imgName='lol' />
                <GameCard name={'Starcraft II'} image={'/gamecover/sc2.jpg'} url={'https://starcraft2.com/en-us/'} imgName='sc2' />
                <GameCard name={'Civilization V'} image={'/gamecover/civ.jpg'} url={'https://civilization.com/civilization-5/'} imgName='civ' />
                <GameCard name={'Arknights'} image={'/gamecover/arknights.jpg'} url={'https://www.arknights.global/'} imgName='ak' /> 
                <GameCard name={'Azur Lane'} image={'/gamecover/azur-logo.jpg'} url={'https://azurlane.yo-star.com/#/'} imgName='al'/>
            </ul>
        </div>
    )
}

/*
https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg?t=1650909796
https://cdn.akamai.steamstatic.com/steam/apps/394360/header.jpg?t=1661438345
https://cdn.akamai.steamstatic.com/steam/apps/1714040/header.jpg?t=1660917023
https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/0d441de75945e5acbc865406fc9a2559.png
https://o.aolcdn.com/hss/storage/midas/87ef85574244b74f1d251b63a07b7abb/203880681/starcraftii-logo.jpg
https://cdn.akamai.steamstatic.com/steam/apps/8930/header.jpg?t=1579731804
https://www.gameuidatabase.com/uploads/Arknights01252021-022418-77137.jpg
*/
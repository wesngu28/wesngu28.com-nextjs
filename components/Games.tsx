import GameCard from './GameCard'

import skyrimCover from '../public/gamecover/skyrim.jpg'
import hoi4Cover from '../public/gamecover/hoi4.jpg'
import sapCover from '../public/gamecover/sap.jpg'
import leagueCover from '../public/gamecover/league.png'
import sc2Cover from '../public/gamecover/sc2.jpg'
import civCover from '../public/gamecover/civ.jpg'
import akCover from '../public/gamecover/arknights.jpg'
import alCover from '../public/gamecover/azur-logo.jpg'

import skyrimStats from '../public/games/Skyrim.png'
import hoi4Stats from '../public/games/hoi4.png'
import sapStats from '../public/games/SAP.png'
import leagueStats from '../public/games/League.png'
import sc2Stats from '../public/games/SC2.png'
import civStats from '../public/games/civfive.png'
import akStats from '../public/games/Arknights.png'
import alStats from '../public/games/Azur.png'

export default function Games() {
  return (
    <div className="w-[75vw] mt-11">
      <h1 className="text-center text-2xl mb-0">Games</h1>
      <p className="p-4 text-center text-xl">These are just some games I like playing.</p>
      <ul className="grid grid-cols md:grid-cols-2 lg:grid-cols-4">
        <GameCard
          name={'Skyrim'}
          cover={skyrimCover}
          url={'https://elderscrolls.bethesda.net/en/skyrim'}
          stats={skyrimStats}
        />
        <GameCard
          delay="lg:delay-100"
          name={'Hearts of Iron IV'}
          cover={hoi4Cover}
          url={'https://www.paradoxinteractive.com/games/hearts-of-iron-iv/about'}
          stats={hoi4Stats}
        />
        <GameCard
          delay="lg:delay-200"
          name={'Super Auto Pets'}
          cover={sapCover}
          url={'https://teamwoodgames.com/'}
          stats={sapStats}
        />
        <GameCard
          delay="lg:delay-300"
          name={'League of Legends'}
          cover={leagueCover}
          url={'https://www.leagueoflegends.com/en-us/'}
          stats={leagueStats}
        />
        <GameCard
          delay="lg:delay-[400ms]"
          name={'Starcraft II'}
          cover={sc2Cover}
          url={'https://starcraft2.com/en-us/'}
          stats={sc2Stats}
        />
        <GameCard
          delay="lg:delay-500"
          name={'Civilization V'}
          cover={civCover}
          url={'https://civilization.com/civilization-5/'}
          stats={civStats}
        />
        <GameCard
          delay="lg:delay-[600ms]"
          name={'Arknights'}
          cover={akCover}
          url={'https://www.arknights.global/'}
          stats={akStats}
        />
        <GameCard
          delay="lg:delay-700"
          name={'Azur Lane'}
          cover={alCover}
          url={'https://azurlane.yo-star.com/#/'}
          stats={alStats}
        />
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

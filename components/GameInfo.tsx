import Image from 'next/image';
import skyrim from '../public/games/Skyrim.png'
import hoi4 from '../public/games/hoi4.png'
import sap from '../public/games/SAP.png'
import league from '../public/games/League.png'
import sc2 from '../public/games/SC2.png'
import civ from '../public/games/civfive.png'
import ak from '../public/games/Arknights.png'
import al from '../public/games/Azur.png'

interface Props {
    name: string;
}

export default function GameInfo(props: Props) {
    if (props.name === 'Skyrim') {
        return (
            <>
                <p>I have only ever finished this game once, as a Redguard sneak archer</p>
                <p className="mb-5">(because how else can you play a Bethesda rpg).</p>
                <Image alt={'steam skyrim stats'} src={skyrim} />

                <table className="m-auto w-full">
                    <caption className="mb-5 font-bold">Elder Scrolls Favorites</caption>
                    <tr className="text-center border-b">
                        <th></th>
                        <th>Skyrim</th>
                        <th>Tamriel</th>
                    </tr>
                    <tr className="text-center">
                        <td>Race</td>
                        <td>Redguard</td>
                        <td>Dunmer</td>
                    </tr>
                    <tr className="text-center">
                        <td>Province</td>
                        <td>N/A</td>
                        <td>Cyrodill</td>
                    </tr>
                    <tr className="text-center">
                        <td>City</td>
                        <td>Solitude</td>
                        <td>Imperial City</td>
                    </tr>
                    <tr className="text-center">
                        <td>Daedric Prince</td>
                        <td>Clavicus Vile</td>
                        <td>Azura</td>
                    </tr>
                    <tr className="text-center">
                        <td>Aedric Entity</td>
                        <td>Akatosh</td>
                        <td>Akatosh</td>
                    </tr>
                    <tr className="text-center">
                        <td>Character</td>
                        <td>Breylna Maryon</td>
                        <td>Katariah Septim</td>
                    </tr>
                </table>
            </>
        )
    }
    if (props.name === 'Hearts of Iron IV') {
        return (
            <Image alt={'steam hoi4 stats'} src={hoi4} />
        )
    }
    if (props.name === 'Super Auto Pets') {
        return (
            <Image alt={'super auto pets stats'} src={sap} />
        )
    }
    if (props.name === 'League of Legends') {
        return (
            <Image alt={'league profile from u.gg'} className="z-50" src={league} />
        )
    }
    if (props.name === 'Starcraft II') {
        return (
            <Image alt={'starcraft profile'} src={sc2} />
        )
    }
    if (props.name === 'Civilization V') {
        return (
            <Image alt={'steam civ 5 stats'} src={civ} />
        )
    }
    if (props.name === 'Arknights') {
        return (
            <Image alt={'arknights profile'} src={ak} />
        )
    }
    if (props.name === 'Azur Lane') {
        return (
            <Image alt={'azur lane profile'} src={al} />
        )
    }
    return (
        <p></p>
    )
}
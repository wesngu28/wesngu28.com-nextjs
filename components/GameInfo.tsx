interface Props {
    name: string;
}

export default function GameInfo(props: Props) {
    if (props.name === 'Skyrim') {
        return (
            <>
                <p>I've only ever finished this game once, as a Redguard sneak archer</p>
                <p className="mb-5">(because how else can you play a Bethesda rpg).</p>
                <img src="/games9-23/Skyrim.png" />

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
            <>
                <img src="/games9-23/hoi4.png" />
            </>
        )
    }
    if (props.name === 'Super Auto Pets') {
        return (
            <>
                <img src="/games9-23/SAP.png" />
            </>
        )
    }
    if (props.name === 'League of Legends') {
        return (
            <img src="/games9-23/League.png" />
        )
    }
    if (props.name === 'Starcraft II') {
        return (
            <>
                <img src="/games9-23/SC2.png" />
            </>
        )
    }
    if (props.name === 'Civilization V') {
        return (
            <>
                <img src="/games9-23/civfive.png" />
            </>
        )
    }
    if (props.name === 'Arknights') {
        return (
            <>
                <img src="/games9-23/Arknights.png" />
            </>
        )
    }
    if (props.name === 'Azur Lane') {
        return (
            <>
                <img src="/games9-23/Azur.png" />
            </>
        )
    }
    return (
        <p></p>
    )
}
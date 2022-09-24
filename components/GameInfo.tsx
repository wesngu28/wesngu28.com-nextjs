interface Props {
    name: string;
}

export default function GameInfo(props: Props) {
    if (props.name === 'Skyrim') {
        return (
            <>
                <h2>Within the confines of Skyrim:</h2>
                <p>Favorite City: Solitude</p>
                <p>Favorite Race: Bosmer</p>
                <p>Favorite Daedric Prince: Clavicus Vile</p>
                <p>Favorite Character: Brelyna Maryon</p>
    
                <h2>In the Elder Scrolls Lore:</h2>
                <p>Favorite City: The Imperial City</p>
                <p>Favorite Race: Dunmer</p>
                <p>Favorite Province: Cyrodill</p>
                <p>Favorite Daedric Prince: Azura</p>
                <p>Favorite Aedric Entity: Akatosh</p>
                <p>Favorite Character: Katariah Septim</p>
            </>
        )
    }
    if (props.name === 'Hearts of Iron IV') {
        return (
            <>
                <img src="/games9-23/hoi4.png"/>
            </>
        )
    }
    if (props.name === 'Super Auto Pets') {
        return (
            <>
                <p>Favorite Nation: Portugal</p>
            </>
        )
    }
    if (props.name === 'League of Legends') {
        return (
            <>
                <h2>Within the confines of Skyrim:</h2>
                <p>Favorite City: Solitude</p>
                <p>Favorite Race: Bosmer</p>
                <p>Favorite Daedric Prince: Clavicus Vile</p>
                <p>Favorite Character: Brelyna Maryon</p>
    
                <h2>In the Elder Scrolls Lore:</h2>
                <p>Favorite City: The Imperial City</p>
                <p>Favorite Race: Dunmer</p>
                <p>Favorite Province: Cyrodill</p>
                <p>Favorite Daedric Prince: Azura</p>
                <p>Favorite Aedric Entity: Akatosh</p>
                <p>Favorite Character: Katariah Septim</p>
            </>
        )
    }
    if (props.name === 'Starcraft II') {
        return (
            <>
                <p>Favorite Nation: Portugal</p>
            </>
        )
    }
    if (props.name === 'Civilization V') {
        return (
            <>
                <p>Favorite Nation: Portugal</p>
            </>
        )
    }
    if (props.name === 'Arknights') {
        return (
            <>
                <p>Favorite Nation: Portugal</p>
            </>
        )
    }
    if (props.name === 'Azur Lane') {
        return (
            <>
                <p>Favorite Nation: Portugal</p>
            </>
        )
    }
    return (
        <p></p>
    )
}
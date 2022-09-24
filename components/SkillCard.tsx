interface Props {
    images: string[];
    name: string;
    desc: string;
}

export default function SkillCard(props: Props) {

    let grid = 'grid-cols-1'

    if(props.images.length > 2) {
        grid = 'grid-cols-2'
    }

    return (
        <li className="bg-[#21222a] mt-2 mb-2 ml-4 mr-4 w-[225px] h-[450px] rounded-2xl">
            <div className={`h-[60%] grid ${grid}`}>
                {props.images.map((arr, i) => {
                    return (
                        <img className="h-[inherit] m-auto" key={i} src={arr} />
                    );
                })}
            </div>
            
            <h2 className="mt-0 mb-2 text-2xl text-center">{props.name}</h2>
            <p className="p-3 text-sm text-center">{props.desc}</p>
        </li>
    )
}
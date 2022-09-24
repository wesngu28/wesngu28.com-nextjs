interface Props {
    techs: string[];
    image: string;
    name: string;
    desc: string;
}

export default function ProjectCard(props: Props) {
    return (
        <li className="bg-[#21222a] m-1 inline-block w-[30%]">
            <img className="w-full" src={props.image} />
            <div className={`pr-2 pl-2`}>
                <ul className={'flex mt-2 justify-center flex-wrap'}>
                    {props.techs.map((arr, i) => {
                        return (
                            <li className="ml-2 mr-2 p-1 bg-[beige] text-black rounded-lg">
                                <p>{arr}</p>
                            </li>
                        );
                    })}
                </ul>
                <h2 className="m-2">{props.name}</h2>
                <p>{props.desc}</p>
            </div>
        </li>
    )
}
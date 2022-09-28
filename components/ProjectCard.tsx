interface Props {
    techs: string[];
    image: string;
    name: string;
    desc: string;
    url: string;
}

export default function ProjectCard({techs, image, name, desc, url}: Props) {
    return (
        <li className="p-4 bg-[#21222a] m-4 inline-block">
            <a target="_blank" href={url} rel="noopener noreferrer"><img src={image} /></a>
            <div className={`pr-2 pl-2`}>
                <ul className={'flex mt-2 justify-center flex-wrap'}>
                    {techs.map((arr, i) => {
                        return (
                            <li className="m-2 p-1 bg-[beige] text-black rounded-lg">
                                <p>{arr}</p>
                            </li>
                        );
                    })}
                </ul>
                <a target="_blank" href={url} rel="noopener noreferrer"><h2 className="hover:underline m-2 text-center font-bold text-lg">{name}</h2></a>
                <p>{desc}</p>
            </div>
        </li>
    )
}
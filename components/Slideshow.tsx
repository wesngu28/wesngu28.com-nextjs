interface Props {
    photos: string[];
}

export default function Slideshow(props: Props) {
    return (
        <div className="flex items-center">
            <p className="text-6xl text-[#6E6E6E]">&#8592;</p>
            {props.photos.map((arr, i) => {
                return (
                    <img className="w-[75%] m-auto" key={i} src={arr} />
                );
            })}
            <p className= "text-6xl text-[#6E6E6E]">&#8594;</p>
        </div>
    )
}
interface Props {
    header: string;
    paragraph1: string;
    paragraph2?: string;
    img: string;
}

export default function About({header, paragraph1, paragraph2, img}: Props) {
    return (
        <div className="mt-11 flex justify-center items-center p-4 bg-[#1F2022] w-[75vw] rounded-3xl">
            <div className="p-4 w-[55vw]">
                <h1 className="text-center text-3xl font-bold">
                    {header}
                </h1>
                <p className="p-4 text-left text-xl leading-8">
                    {paragraph1}
                </p>
                <p className="p-4 text-left text-xl leading-8">
                    {paragraph2}
                </p>
            </div>
            <img className="p-4 rounded-full mx-auto w-1/5 h-1/4" src={img} />
        </div>
    )
}
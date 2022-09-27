export default function About() {
    return (
        <div className="mt-11 flex justify-center items-center p-4 bg-[#1F2022] w-[75vw] rounded-3xl">
            <div className="p-4 w-[55vw]">
                <h1 className="text-center text-3xl font-bold">
                    about me
                </h1>
                <p className="p-4 text-left text-xl leading-8">
                    Hello, my name is Wesley. I am a student at the University of Washington studying geography and data science. I've always been passionate with computers and after taking AP Computer Science during sophomore year I knew that I wanted to work in a field even remotely related to programming.
                </p>
                <p className="p-4 text-left text-xl leading-8">
                    Besides school, I enjoy listening to music (favorite genres being progressive house (a la deadmau5), j-rock, among others), as well as playing games (if you consider modding skyrim in an infinite loop without launching the game a game). I also have two dogs which you can see pictures of here.
                </p>
            </div>
            <img className="p-4 rounded-full mx-auto w-1/5 h-1/4" src="/grotesque.jpeg" />
        </div>
    )
}
import Slideshow from '../components/Slideshow'

export default function Petfolio() {
    return (
        <section className="mt-11 mb-11 flex justify-center bg-[#1F2022] ml-4 mr-4 w-[75vw] rounded-3xl">
            <div className="p-4 flex items-center flex-col w-[65vw]">
                <h1 className="text-center text-3xl">
                    meet my dogs
                </h1>
                <p className="p-4 text-left text-xl leading-8 mb-4">
                    <div className="flex flex-col">
                        <ul className="mt-4 p-4">
                            <li>
                                <p className="text-center font-bold">Cami</p>
                                <p>Chihuahua-Dachshund mix (chiwenie)</p>
                            </li>
                            <Slideshow photos={['skills/git.svg']} />
                        </ul>
                        <ul className="mt-4 p-4">
                            <li>
                                <p className="text-center font-bold">Xena</p>
                                <p>Chihuahua-Dachshund mix (chiwenie)</p>
                            </li>
                            <Slideshow photos={['skills/python.svg']} />
                        </ul>
                    </div>
                </p>
            </div>
        </section>
    )
}
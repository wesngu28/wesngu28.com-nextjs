import Slideshow from '../components/Slideshow'

export default function Petfolio() {
    return (
        <section className="mt-11 mb-11 flex justify-center bg-[#1F2022] ml-4 mr-4 w-[75vw] rounded-3xl">
            <div className="p-4 flex items-center flex-col w-[65vw]">
                <h1 className="text-center text-3xl">
                    meet my dogs
                </h1>
                <div className="p-4 text-left text-xl leading-8 mb-4">
                    <div className="flex flex-col">
                        <ul className="mt-4 p-4">
                            <li>
                                <p className="text-center font-bold">Cami</p>
                                <p className="text-center">Chihuahua-Dachshund</p>
                            </li>
                            <Slideshow photos={['dog/cami1.jpg', 'dog/cami2.jpg', 'dog/cami3.jpg', 'dog/cami4.jpg', 'dog/cami5.jpg', 'dog/cami6.jpg']} dynamicAlt={['Cami']} />
                        </ul>
                        <ul className="mt-4 p-4">
                            <li>
                                <p className="text-center font-bold">Xena</p>
                                <p className="text-center">Mixed Labrador</p>
                            </li>
                            <Slideshow photos={['dog/xena1.jpg', 'dog/xena2.jpg', 'dog/xena3.jpg', 'dog/xena4.jpg', 'dog/xena5.jpg', 'dog/xena6.jpg']} dynamicAlt={['Xena']} />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
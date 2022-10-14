import Slideshow from '../components/Slideshow'

import dogsscuffed from '../public/dog/dogs.jpg'
import cami1 from '../public/dog/cami1.jpg'
import cami2 from '../public/dog/cami2.jpg'
import cami3 from '../public/dog/cami3.jpg'
import cami4 from '../public/dog/cami4.jpg'
import cami5 from '../public/dog/cami5.jpg'
import cami6 from '../public/dog/cami6.jpg'
import xena1 from '../public/dog/xena1.jpg'
import xena2 from '../public/dog/xena2.jpg'
import xena3 from '../public/dog/xena3.jpg'
import xena4 from '../public/dog/xena4.jpg'
import xena5 from '../public/dog/xena5.jpg'
import xena6 from '../public/dog/xena6.jpg'
import Image from 'next/image'

export default function Petfolio() {
  return (
    <div className="mt-11 mb-40 flex justify-center bg-[#1F2022] ml-4 mr-4 w-[75vw] rounded-3xl relative">
      <div className="p-4 flex items-center flex-col w-[65vw]">
        <h1 className="text-center text-3xl">meet my dogs</h1>
        <div className="mt-11 md:h-1/4 md:w-1/4">
          <Image alt="my dogs, cami and xena" src={dogsscuffed} />
        </div>
        <div className="mt-11 p-4 text-left text-xl leading-8 mb-4">
          <div className="flex flex-col">
            <ul className="mt-4 p-4">
              <li>
                <p className="text-center font-bold">Cami</p>
                <p className="text-center">Chihuahua-Dachshund</p>
              </li>
              <Slideshow
                photos={[cami1, cami2, cami3, cami4, cami5, cami6]}
                dynamicAlt={['Cami']}
              />
            </ul>
            <ul className="mt-4 p-4">
              <li>
                <p className="text-center font-bold">Xena</p>
                <p className="text-center">Mixed Labrador</p>
              </li>
              <Slideshow
                photos={[xena1, xena2, xena3, xena4, xena5, xena6]}
                dynamicAlt={['Xena']}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

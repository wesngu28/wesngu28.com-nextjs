import Image from "next/image";
import { forwardRef } from "react";
import Slideshow from "./Slideshow";
import southVietnamFlag from '../public/map/flag.svg'
import bellingham from '../public/map/bham.jpg'
import edhesive from '../public/map/edhesive.png'
import bc from '../public/map/BC.jpg'
import uws from '../public/map/uw.jpg'
import iwp from '../public/map/iwp.jpg'

interface Props {
    index: number;
    view: boolean;
}

const Chapter = forwardRef<HTMLDivElement, Props>(({ index, view }: Props, ref) => {
    const chapters = [
        {
            top: '45vh',
            source: southVietnamFlag,
            heading: 'Immigrant Family',
            paragraph: ['Both my parents and their families came to the United States following the fall of the South Vietnamese government to flee communism. I am the first on my paternal side of the family to be born in the United States.']
        },
        {
            top: '145vh',
            source: bellingham,
            heading: 'Bellingham',
            paragraph: ['I was born in Bellingham, a relatively large and beautiful city in Northern Washington between Vancouver and Seattle. I moved down to the Renton area at age 5.']
        },
        {
            top: '245vh',
            source: edhesive,
            heading: 'Software Start',
            paragraph: ['My first exposure to programming and development came in AP Computer Science at Hazen High School. My first language was Java and I did not do the best in the class, but managed to pick it up and study for the test and received a 4.', 'A project that I made during my time in the course was a game using the RPG Maker XP engine and Pokemon Essentials that made use of many custom scripts in Ruby, but I sadly lost the files when resetting my Surface laptop.', 'After taking this class, I knew that I wanted to work in software development.']
        },
        {
            top: '345vh',
            source: bc,
            heading: 'Running Start',
            paragraph: ['Further exposure to computer science and programming occured while I was doing the Running Start program offered in Washington State, a program that enabled high schoolers to be dually enrolled in a participating community college. Here, I took Computer Science I and II (142/143 at UW).']
        },
        {
            top: '445vh',
            source: uws,
            heading: 'University of Washington',
            paragraph: ['Entering university, I made the ill-advised decision to not put CS, CE, or informatics on my application to the University of Washington, instead opting for an open major.', 'Despite this, I found that I loved the university, the campus, and its atmosphere. Instead of transferring, I chose to join the growing Geography Data Science program, where I could learn new skills and also supplement it with my own self-learning.']
        },
        {
            top: '545vh',
            source: iwp,
            heading: 'First Internship',
            paragraph: ['During the summer of 2022, I got my first internship at the IT department for a lumber company called International Wood Products down in Clackamas, Oregon.']
        },
        {
            top: '645vh',
        }
    ]

    return (
        <div ref={ref} className={`${view ? 'opacity-100 transition-opacity duration-1000' : 'opacity-25'} bg-[#1F2022] text-white z-10 absolute mb-11 top-[${chapters[index].top}] left-5 p-4 w-1/4 h-max rounded overflow-scroll`}>
            <h2 className="text-center text-2xl font-bold">
                {chapters[index].heading}
            </h2>
            <div className="p-4">
                {chapters[index].source ? <Image src={chapters[index].source!} /> : null}
            </div>
            <div>
                {chapters[index].paragraph ? chapters[index].paragraph!.map((text) => {
                    return (
                        <p className="p-4">{text}</p>
                    );
                }) : null}
                {chapters[index].top === '645vh' ? <div className="pb-6">
                    <Slideshow photos={['map/nhstc.png', 'map/target.jpg', 'map/fresh.png']} caption={[
                        { location: 'Newport Hills Swim and Tennis Club', duration: 'Mar 2018 - Sep 2020', title: 'Lifeguard' },
                        { location: 'Target', duration: 'Oct 2020 - Jan 2021', title: 'Fulfillment Expert' },
                        { location: 'Amazon Fresh', duration: 'May 2021 -  Jul 2022', title: 'Overnight Associate' }]} />
                         </div> : null}
            </div>
        </div>
    )
})

export default Chapter
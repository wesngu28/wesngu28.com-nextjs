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
            top: 'top-[30vh]',
            source: southVietnamFlag,
            alt: 'South Vietnamese flag',
            heading: 'Vietnam Origins',
            paragraph: ['Both my parents and their families came to the United States following the fall of the South Vietnamese government to flee communism. I am the first on my paternal side of the family to be born in the United States.']
        },
        {
            top: 'top-[130vh]',
            source: bellingham,
            alt: 'bellingham from the water',
            heading: 'Bellingham',
            paragraph: ['I was born in Bellingham, a relatively large and beautiful city in Northern Washington between Vancouver and Seattle. I moved down to the Renton area at age 5.']
        },
        {
            top: 'top-[230vh]',
            source: edhesive,
            alt: 'screengrab from my pokemon game made in rpg maker',
            heading: 'High School Roots',
            duration: "Sept 2015 -  June 2019",
            paragraph: ['My first exposure to computer science came in AP Computer Science at Hazen High School. My first language was Java and while I did not perform the best in class, I pushed forward to receive a 4 on the AP test.', 'A project that I made during my time in the course was a game using the RPG Maker XP engine and Pokemon Essentials that made use of many custom scripts in Ruby, but I sadly lost the files when resetting my Surface laptop.', 'After taking this class, I knew that I wanted to work in software development.']
        },
        {
            top: 'top-[330vh]',
            source: bc,
            alt: 'r building on bellevue college campus',
            heading: 'Running Start',
            duration: "Sept 2017 -  June 2019",
            paragraph: ['Further exposure to computer science and programming occured while I was doing the Running Start program offered in Washington State, a program that enabled high schoolers to be dually enrolled in a participating community college. Here, I took Computer Science I and II (142/143 at UW).']
        },
        {
            top: 'top-[430vh]',
            source: uws,
            alt: 'uw campus',
            heading: 'University of Washington',
            duration: "Sept 2019 -  2022/2023",
            paragraph: ['Entering university, I made the ill-advised decision to not put CS, CE, or informatics on my application to the University of Washington, instead opting for an open major.', 'Despite this, I found that I loved the university, the campus, and its atmosphere. Instead of transferring, I chose to join the growing Geography Data Science program, where I could learn new skills and also supplement it with my own self-learning.']
        },
        {
            top: 'top-[530vh]',
            source: iwp,
            alt: 'logo of international wood products',
            heading: 'First Internship',
            duration: "July 2022 -  September 2022",
            paragraph: ['During the summer of 2022, I got my first internship at the IT department for a lumber company called International Wood Products down in Clackamas, Oregon.', 'I learned a wide variety of things during this internship. Aside from setting up company computers and laptops, I helped to configure the company network through switch and access point configurations, managed Active Directory and exchange, as well as email servers.']
        },
        {
            top: 'top-[630vh]',
        }
    ]

    return (
        <div ref={ref} className={`${view ? 'opacity-100 transition-opacity duration-1000' : 'opacity-25'} rounded-3xl bg-[#1F2022] text-white z-10 absolute mb-11 ${chapters[index].top} left-5 p-4 w-1/4 h-max rounded overflow-scroll`}>
            <h2 className="text-center text-2xl font-bold">
                {chapters[index].heading}
            </h2>
            <p className="m-2 text-center">{chapters[index].duration ? chapters[index].duration : null}</p>
            <div className="p-4">
                {chapters[index].source ? <Image alt={chapters[index].alt} src={chapters[index].source!} /> : null}
            </div>
            <div>
                {chapters[index].paragraph ? chapters[index].paragraph!.map((text) => {
                    return (
                        <p key={text} className="md:p-4 text-left text-md md:text-lg leading-8">{text}</p>
                    );
                }) : null}
                {chapters[index].top === 'top-[630vh]' ? <div className="pb-6">
                    <Slideshow photos={['map/nhstc.png', 'map/target.jpg', 'map/fresh.png']} caption={[
                        { location: 'Newport Hills Swim and Tennis Club', duration: 'Mar 2018 - Sep 2020', title: 'Lifeguard' },
                        { location: 'Target', duration: 'Oct 2020 - Jan 2021', title: 'Fulfillment Expert' },
                        { location: 'Amazon Fresh', duration: 'May 2021 -  Jul 2022', title: 'Overnight Associate' }]} dynamicAlt={['newport hills swim club logo', 'target logo', 'amazon fresh logo']} />
                         </div> : null}
            </div>
        </div>
    )
})

Chapter.displayName = "Chapter"

export default Chapter
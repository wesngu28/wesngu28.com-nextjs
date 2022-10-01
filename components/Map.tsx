import Map, { MapRef, Marker } from 'react-map-gl';
import { useInView } from 'react-intersection-observer';
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef } from 'react';
import Link from 'next/link';
import Slideshow from './Slideshow';
import southVietnamFlag from '../public/map/flag.svg'
import bellingham from '../public/map/bham.jpg'
import edhesive from '../public/map/edhesive.png'
import bc from '../public/map/BC.jpg'
import nhstc from '../public/map/nhstc.jpg'
import uws from '../public/map/uw.jpg'
import iwp from '../public/map/iwp.jpg'
import Image from 'next/image';

export default function Maps() {
    const mapRef = useRef<MapRef>();
    const { ref: vietnam, inView: vietnamView } = useInView({ threshold: 0.25 })
    const { ref: bham, inView: bhamView } = useInView({ threshold: 0.25 })
    const { ref: hazen, inView: hazenView } = useInView({ threshold: 0.25 })
    const { ref: uw, inView: uwView } = useInView({ threshold: 0.25 })
    const { ref: rs, inView: rsView } = useInView({ threshold: 0.25 })
    const { ref: clack, inView: clackView } = useInView({ threshold: 0.25 })
    const { ref: otherCareer, inView: otherCareerView } = useInView({ threshold: 0.25 })

    if (mapRef.current) {
        if (vietnamView) {
            mapRef.current.getMap().flyTo({
                center: [107.800854, 15.82164],
                zoom: 6,
                pitch: 16.5,
                bearing: 0,
                duration: 3000,
                essential: true,
            })
            mapRef.current.getMap().setStyle('mapbox://styles/wesngu028/cl8qaisxu000m14nzgup6koq4')
        }
        if (bhamView) {
            mapRef.current.getMap().flyTo({
                center: [-122.488778, 48.752951],
                zoom: 12,
                pitch: 60.5,
                duration: 3000,
                essential: true,
            })
            mapRef.current.getMap().setStyle('mapbox://styles/mapbox/dark-v10')
        }
        if (hazenView) {
            mapRef.current.getMap().flyTo({
                center: [-122.1529, 47.5016],
                zoom: 16,
                pitch: 25.5,
                bearing: 25,
                duration: 3000,
                essential: true,
            })
        }
        if (uwView) {
            mapRef.current.getMap().flyTo({
                center: [-122.303366, 47.654353],
                zoom: 15.5,
                pitch: 45.0,
                bearing: 0,
                duration: 3000,
                essential: true,
            })
            mapRef.current.getMap().setStyle('mapbox://styles/wesngu028/cl8qbgdt6000b15t70lultgn5')
        }
        if (rsView) {
            mapRef.current.getMap().flyTo({
                center: [-122.148192, 47.584425],
                zoom: 16.5,
                pitch: 0,
                bearing: 0,
                duration: 3000,
                essential: true,
            })
            mapRef.current.getMap().setStyle('mapbox://styles/mapbox/dark-v10')
        }
        if (clackView) {
            mapRef.current.getMap().flyTo({
                center: [-122.565194, 45.416860],
                zoom: 17,
                pitch: 60.5,
                bearing: 30,
                duration: 3000,
                essential: true,
            })
            mapRef.current.getMap().setStyle('mapbox://styles/mapbox/dark-v10')
        }
        if (otherCareerView) {
            mapRef.current.getMap().flyTo({
                center: [-122.1914112, 47.5165244],
                zoom: 14.25,
                pitch: 60.5,
                bearing: 45,
                duration: 3000,
                essential: true,
            })
        }
    }

    return (
        <div className="h-[700vh]">
            <header className="absolute w-full z-10 p-8 flex items-center justify-center flex-col bg-[#1F2022]">
                <h1 className="text-center text-3xl font-bold">
                    Scrollytelling my Journey
                </h1>
                <p className="md:p-4 text-left text-md md:text-xl leading-8">
                    Fly around the world in my implementation of Mapbox's scrollytelling using intersection observer in React.
                </p>
                <Link href={'/'}>
                    <div className="hover:animate-pulse ransform h-max w-max transition duration-500 hover:scale-105">
                        <a className="hover:text-yellow-400 underline p-4 text-left text-sm md:text-xl leading-8 m-auto">Return home</a>
                    </div>
                </Link>
            </header>
            <div ref={vietnam} className={`${vietnamView ? 'opacity-100 transition-opacity duration-1000' : 'opacity-25'} bg-[#1F2022] text-white z-10 absolute mb-11 top-[45vh] left-5 p-4 w-1/4 h-max rounded overflow-scroll`}>
                <h2 className="text-center text-2xl font-bold">
                    Immigrant Family
                </h2>
                <div className="p-4">
                    <Image src={southVietnamFlag} />
                </div>
                <p className="p-4">
                    Both my parents and their families came to the United States following the fall of the South Vietnamese government to flee communism. I am the first on my father's side of the family to be born in the United States.
                </p>
            </div>
            <div ref={bham} className={`${bhamView ? 'opacity-100 transition-opacity duration-1000' : 'opacity-25'} bg-[#1F2022] text-white z-10 absolute mb-11 top-[145vh] left-5 w-1/4 h-max rounded overflow-scroll`}>
                <h2 className="text-center text-2xl font-bold">
                    Bellingham
                </h2>
                <div className="p-4">
                    <Image src={bellingham} />
                </div>
                <p className="p-4">
                    I was born in Bellingham, a relatively large and beautiful city in Northern Washington between Vancouver and Seattle. I moved down to the Renton area at age 5.
                </p>
            </div>
            <div ref={hazen} className={`flex flex-col ${hazenView ? 'opacity-100 transition-opacity duration-1000' : 'opacity-25'} bg-[#1F2022] text-white z-10 absolute top-[245vh] left-5 w-1/4 h-max rounded overflow-scroll`}>
                <h2 className="text-center text-2xl font-bold">
                    Software Beginnings
                </h2>
                <p className="p-4">
                    My first exposure to programming and development came in AP Computer Science at Hazen High School. My first language was Java and I did not do the best in the class, but managed to pick it up and study for the test and received a 4.
                </p>
                <div className="p-4 m-auto">
                    <Image src={edhesive} />
                </div>
                <p className="p-4">
                    A project that I made during my time in the course was a game using the RPG Maker XP engine and Pokemon Essentials that made use of many custom scripts in Ruby, but I sadly lost the files when resetting my Surface laptop.
                </p>
                <p className="p-4">
                    After taking this class, I knew that I wanted to work in software development.
                </p>
            </div>
            <div ref={rs} className={`${rsView ? 'opacity-100 transition-opacity duration-1000' : 'opacity-25'} bg-[#1F2022] text-white z-10 absolute top-[345vh] left-5 w-1/4 h-max rounded overflow-scroll`}>
                <h2 className="text-center text-2xl font-bold">
                    Running Start
                </h2>
                <div className="p-4 m-auto">
                    <Image src={bc} />
                </div>
                <p className="p-4">
                    Further exposure to computer science and programming occured while I was doing the Running Start program offered in Washington State, a program that enabled high schoolers to be dually enrolled in a participating community college. Here, I took Computer Science I and II (142/143 at UW).
                </p>
            </div>
            <div ref={uw} className={`${uwView ? 'opacity-100 transition-opacity duration-1000' : 'opacity-25'} bg-[#1F2022] text-white z-10 absolute top-[445vh] left-5 w-1/4 h-max rounded overflow-scroll`}>
                <h2 className="text-center text-2xl font-bold">
                    University
                </h2>
                <div className="p-4 m-auto">
                    <Image src={uws} />
                </div>
                <p className="p-4">
                    Entering university, I made the ill-advised decision to not put CS, CE, or informatics on my application to the University of Washington, instead opting for an open major. The reason is unknown to me to this day.
                </p>
                <p className="p-4">
                    Despie this, I loved the university, the campus, and its atmosphere. Instead of transferring, I chose to join the growing Geography Data Science program, where I could learn new skills and also supplement it with my own self-learning.
                </p>
            </div>
            <div ref={clack} className={`${clackView ? 'opacity-100 transition-opacity duration-1000' : 'opacity-25'} bg-[#1F2022] text-white z-10 absolute top-[545vh] left-5 w-1/4 h-max rounded overflow-scroll`}>
                <h2 className="text-center text-2xl font-bold">
                    First Internship
                </h2>
                <div className="p-4 m-auto">
                    <Image src={iwp} />
                </div>
                <p className="p-4">
                    During the summer of 2022, I got my first internship at the IT department for a lumber company called International Wood Products down in Clackamas, Oregon.
                </p>
            </div>
            <div ref={otherCareer} className={`${otherCareerView ? 'opacity-100 transition-opacity duration-1000' : 'opacity-25'} bg-[#1F2022] text-white z-10 absolute top-[645vh] left-5 w-1/4 h-max rounded overflow-scroll`}>
                <div className="pb-6">
                    <Slideshow photos={['map/nhstc.png', 'map/target.jpg', 'map/fresh.png']} caption={[
                        { location: 'Newport Hills Swim and Tennis Club', duration: 'Mar 2018 - Sep 2020', title: 'Lifeguard' },
                        { location: 'Target', duration: 'Oct 2020 - Jan 2021', title: 'Fulfillment Expert'},
                        { location: 'Amazon Fresh', duration: 'May 2021 -  Jul 2022', title: 'Overnight Associate'}]} />
                </div>
            </div>
            <div className="h-[100vh] w-full fixed top-0 bottom-0 left-0 right-0">
                <Map
                    ref={mapRef}
                    interactive={false}
                    mapStyle="mapbox://styles/mapbox/dark-v10"
                    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                >
                    {vietnamView ? <Marker longitude={107.800854} latitude={15.862164}></Marker> : null}
                    {bhamView ? <Marker longitude={-122.488778} latitude={48.752951}></Marker> : null}
                    {hazenView ? <Marker longitude={-122.1529} latitude={47.5016}></Marker> : null}
                    {rsView ? <Marker longitude={-122.148192} latitude={47.584425}>
                        <img src="/map/bc-logo.jpg" />
                    </Marker> : null}
                    {uwView ? <Marker longitude={-122.305366} latitude={47.654353}>
                        <img src="/map/uw-logo.png" />
                    </Marker> : null}
                    {clackView ? <Marker longitude={-122.565194} latitude={45.416860}></Marker> : null}
                    {otherCareerView ? <Marker longitude={-122.1800715} latitude={47.5532877}>
                        <img src="/map/nhstc-marker.png" />
                    </Marker> : null}
                    {otherCareerView ? <Marker longitude={-122.1999175} latitude={47.4968123}>
                        <img src="/map/target-marker.jpg" />
                    </Marker> : null}
                    {otherCareerView ? <Marker longitude={-122.1733261} latitude={47.575893}>
                        <img src="/map/fresh-marker.png" />
                    </Marker> : null}
                </Map>
            </div>
        </div>
    );
}
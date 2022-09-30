import Map, { MapRef, Marker } from 'react-map-gl';
import { useInView } from 'react-intersection-observer';
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useRef } from 'react';


export default function Maps() {
    const mapRef = useRef<MapRef>();
    const { ref: vietnam, inView: vietnamView } = useInView({ threshold: 0.25 })
    const { ref: bham, inView: bhamView } = useInView({ threshold: 0.25 })
    const { ref: hazen, inView: hazenView } = useInView({ threshold: 0.25 })
    const { ref: uw, inView: uwView } = useInView({ threshold: 0.25 })
    const { ref: clack, inView: clackView } = useInView({ threshold: 0.25 })
    const [lng, setLng] = useState(107.800854);
    const [lat, setLat] = useState(15.862164);
    const [zoom, setZoom] = useState(6);
    const [pitch, setPitch] = useState(16.5)

    if (mapRef.current) {
        if (vietnamView) {
            mapRef.current.getMap().flyTo({
                center: [107.800854, 15.82164],
                zoom: 6,
                pitch: 16.5,
                duration: 1500,
                essential: true,
            })
        }
        if (bhamView) {
            mapRef.current.getMap().flyTo({
                center: [-122.488778, 48.752951],
                zoom: 12,
                pitch: 60.5,
                duration: 1500,
                essential: true,
            })
        }
        if (hazenView) {
            mapRef.current.getMap().flyTo({
                center: [-122.1529, 47.5016],
                zoom: 12,
                pitch: 60.5,
                duration: 1500,
                essential: true,
            })
        }
        if (uwView) {
            mapRef.current.getMap().flyTo({
                center: [-122.309850, 47.656302],
                zoom: 12,
                pitch: 60.5,
                duration: 1500,
                essential: true,
            })
        }
        if (clackView) {
            mapRef.current.getMap().flyTo({
                center: [-122.565194, 45.416860],
                zoom: 12,
                pitch: 60.5,
                duration: 1500,
                essential: true,
            })
        }
    }

return (
    <div className="h-[500vh]">
        <header className="absolute w-full z-10 flex items-center justify-center">
            <h1>im a header</h1>
        </header>
        <div ref={vietnam} className={`${vietnamView ? 'opacity-100 transition-opacity duration-1000' : 'opacity-25'} bg-slate-600 text-white z-10 absolute mb-11 top-5 left-5  w-1/3 h-1/5 rounded overflow-scroll`}>
            <h1>The capital of kazakhstan</h1>
            <p className="p-4">
                Trundle enhances his next basic attack, dealing 20 / 40 / 60 / 80 / 100 (+15 / 25 / 35 / 45 / 55% of attack damage) physical damage and slowing its target by 75% for 0.1 seconds.

                This attack increases Trundle's attack damage by 20 / 25 / 30 / 35 / 40 for 5 seconds, with his opponent losing half of this amount for the same duration.
            </p>
        </div>
        <div ref={bham} className={`${bhamView ? 'opacity-100 transition-opacity duration-1000' : 'opacity-25'} bg-slate-600 text-white z-10 absolute mb-11 top-[100vh] left-5 w-1/3 h-1/5 rounded overflow-scroll`}>
            <p className="p-4">
                Ch'en always puts herself on the frontlines.
                At first, her colleagues thought she was foolhardy, and believed themselves proven right when she paid a price for it. Once she learned to wield Chi Xiao properly, however, they began to make way for her of their own accord,
                both because they do not want to get caught in the blade's wake, and because they know that when Ch'en says she can do something, she will not rest until it is done.
            </p>
        </div>
        <div ref={hazen} className={`${hazenView ? 'opacity-100 transition-opacity duration-1000' : 'opacity-25'} bg-slate-600 text-white z-10 absolute top-[200vh] left-5 w-1/3 h-1/5 rounded overflow-scroll`}>
            <p className="p-4">
                Ch'en always puts herself on the frontlines.
                At first, her colleagues thought she was foolhardy, and believed themselves proven right when she paid a price for it. Once she learned to wield Chi Xiao properly, however, they began to make way for her of their own accord,
                both because they do not want to get caught in the blade's wake, and because they know that when Ch'en says she can do something, she will not rest until it is done.
            </p>
        </div>
        <div ref={uw} className={`${uwView ? 'opacity-100 transition-opacity duration-1000' : 'opacity-25'} bg-slate-600 text-white z-10 absolute top-[300vh] left-5 w-1/3 h-1/5 rounded overflow-scroll`}>
            <p className="p-4">
                Ch'en always puts herself on the frontlines.
                At first, her colleagues thought she was foolhardy, and believed themselves proven right when she paid a price for it. Once she learned to wield Chi Xiao properly, however, they began to make way for her of their own accord,
                both because they do not want to get caught in the blade's wake, and because they know that when Ch'en says she can do something, she will not rest until it is done.
            </p>
        </div>
        <div ref={clack} className={`${clackView ? 'opacity-100 transition-opacity duration-1000' : 'opacity-25'} bg-slate-600 text-white z-10 absolute top-[400vh] left-5 w-1/3 h-1/5 rounded overflow-scroll`}>
            <p className="p-4">
                Ch'en always puts herself on the frontlines.
                At first, her colleagues thought she was foolhardy, and believed themselves proven right when she paid a price for it. Once she learned to wield Chi Xiao properly, however, they began to make way for her of their own accord,
                both because they do not want to get caught in the blade's wake, and because they know that when Ch'en says she can do something, she will not rest until it is done.
            </p>
        </div>
        <div className="h-[100vh] w-full fixed top-0 bottom-0 left-0 right-0">
            <Map
                ref={mapRef}
                interactive={false}
                mapStyle="mapbox://styles/mapbox/dark-v10"
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            >
                <Marker longitude={107.800854} latitude={15.862164}></Marker>
            </Map>
        </div>
        {/* <div ref={mapContainer} className="h-[100vh] w-[100vw] fixed top-0 bottom-0 left-0 right-0" /> */}
    </div>
);
}
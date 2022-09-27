export default function Specs() {
    return (
        <section className="mt-11 flex justify-center items-center bg-[#1F2022] ml-4 mr-4 w-[75vw] rounded-3xl">
            <div className="p-4 w-[75vw]">
                <h1 className="text-center text-3xl">
                    my systems
                </h1>
                <p className="p-4 text-left text-xl leading-8">
                    Laptop: <p className="text-green-300 ml-4 inline-block">HP Pavillion 15z-cw100 (openSuse Tumbleweed)</p>
                </p>
                <p className="p-4 text-left text-xl leading-8">
                    Development PC: <p className="text-sky-300 ml-4 inline-block">Dell Optiplex 3040 (Zorin)</p>
                </p>
                <p className="p-4 text-left text-xl leading-8">
                    Android PC: <p className="text-blue-300 ml-4 inline-block">Dell Optiplex 3040 (BlissOS)</p>
                </p>
                <p className="p-4 text-left text-xl leading-8">
                    General PC: <p className="text-blue-300 ml-4 inline-block">Windows 10</p>
                    <ul className="list-disc">
                        <li className="ml-10">CPU:  &nbsp; Ryzen 7 5600x</li>
                        <li className="ml-10">Motherboard:  &nbsp; MSI B450 Tomahawk</li>
                        <li className="ml-10">Memory:  &nbsp; Corsair Vengeance 32GB DDDR-3200</li>
                        <li className="ml-10">
                            Storage:
                            <ul className="list-disc">
                                <li className="ml-10">Primary SSD:  &nbsp; Samsung 970 Evo 1TB</li>
                                <li className="ml-10">Secondary SSD:  &nbsp; Adata SU630 480GB</li>
                                <li className="ml-10">Bulk:   &nbsp; Western Digital 1TB 7200RPM</li>
                            </ul>
                        </li>
                        <li className="ml-10">GPU:  &nbsp; Sapphire Radeon RX 5700XT (blower 😭 )</li>
                        <li className="ml-10">Power Supply:  &nbsp; EVGA 210-GQ 850W 80+ Gold Semi-modular</li>
                        <li className="ml-10">Case:  &nbsp; NZXT H500</li>
                    </ul>
                </p>
                <p className="p-4 text-left text-xl leading-8">
                    Displays
                    <ul>
                        <li className="ml-10">1.  &nbsp; Alienware 3423dw</li>
                        <li className="ml-10">2:  &nbsp; Acer XV272U</li>
                        <li className="ml-10">3:  &nbsp; LG 27MP35HQ</li>
                    </ul>
                </p>
                <p className="p-4 text-left text-xl leading-8">
                    Home Server: <p className="text-red-300 ml-4 inline-block">Dell Precision 5810 Debian</p>
                </p>
                <p className="p-4 text-left text-xl leading-8">
                    Mobile Devices
                    <ul className="list-disc">
                        <li className="ml-10">Phone:  &nbsp; OnePlus 9 Pro</li>
                        <li className="ml-10">Tablet:  &nbsp; Samsung Galaxy Tab S7</li>
                    </ul>
                </p>
                <p className="p-4 text-left text-xl leading-8">
                    Accessories
                    <ul className="list-disc">
                        <li className="ml-10">Router:  &nbsp; Dell Optiplex 5010 pfSense</li>
                        <li className="ml-10">WAP:  &nbsp; Tp-Link EAP610, Ubiquity Long Range</li>
                        <li className="ml-10">Modem:  &nbsp; Motorola MB8600</li>
                        <li className="ml-10">
                            Mice:  
                            <ul className="list-disc">
                                <li className="ml-10">General Mouse:  &nbsp; Logitech G502</li>
                                <li className="ml-10">Mobile Mouse:  &nbsp; Logitech M330</li>
                            </ul>
                        </li>
                        <li className="ml-10">Productivity Mouse:  &nbsp; Logitech M330</li>
                        <li className="ml-10">Keyboard:  &nbsp; Leopold FC660M Black 65% <span className="text-red-500">(reds)</span></li>
                        <li className="ml-10">
                            Headphones:  
                            <ul className="list-disc">
                                <li className="ml-10">General Headphones:  &nbsp; Beyerdynamic DT 770 Pro</li>
                                <li className="ml-10">Mobile Headphones:  &nbsp; Bose QC35 II</li>
                                <li className="ml-10">Earpods:  &nbsp; OnePlus Buds Pro</li>
                            </ul>
                        </li>
                        <li className="ml-10">Speakers:  &nbsp; Logitech-X-530 5.1</li>
                    </ul>
                </p>
            </div>
        </section>
    )
}
import ProjectCard from './ProjectCard'

export default function Projects() {
    return (
        <div className="w-[85vw] mt-11">
            <h1 className="text-center font-bold text-2xl p-2">Projects</h1>
            <p className="m-auto w-96 text-center">I like to make projects that are personal to me so I feel more engaged with my learning. Here are some of the ones I've worked on recently!</p>
            <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard techs={['Typescript', 'Tailwind', 'React', 'Next.js']} url={'https://github.com/wesngu28/rhodesapi'} image={'personal-web.png'}name={'Personal Website'} desc={'This very own website. I learned a lot about Tailwind through this project and got more exposure with the Next.js framework.'} />
                <ProjectCard techs={['Typescript', 'Node.js','Express.js', 'MongoDB']} url={'https://github.com/wesngu28/rhodesapi'} image={'rhodes.png'}name={'RhodesAPI'} desc={'A RESTful API for the gacha tower defense game Arknights. While the game does have some existing databases in various repositories and websites, most were out of date and lacked apis, so I made a scraper to hit the Gamepress page for each operator and stored them in an instance hosted on Mongo Atlas.'} />
                <ProjectCard techs={['Javascript', 'Mapbox', 'Sass']} url={'https://github.com/wesngu28/mapping-terrorism'} image={'mapping-terrorism.png'}name={'Mapping Terrorism'} desc={'A website dashboard that visualizes the data from the University of Maryland Global Terrorism Database. Made as a group project for Geography 458 with the University of Washington. Was responsible for the design and structure of the website and the icons on the map.'} />
                <ProjectCard techs={['Typescript', 'Discord.js', 'MongoDB', 'Docker']} url={'https://github.com/wesngu28/closurets'} image={'closure.png'}name={'Closure'} desc={'A discord bot with functionality made to serve some discord communities I am involved in. Made to complement the RhodesAPI. Implements operator commands, as well as commands to get live status for youtubers. Can be configured to announce Youtube livestreams at a comparable time to Pingcord.'} />
                <ProjectCard techs={['Typescript', 'Python', 'React', 'Next.js', 'Flask']} url={'https://github.com/wesngu28/searchify'} image={'searchify.png'}name={'Searchify'} desc={'A website that allows you to paste in a Spotify artist, track, playlist, or album, and get some information about them and also receive a table with YouTube links of the songs inside of it or recommendations. Also allows for you to login and get information about your listening habits.'} />
                <ProjectCard techs={['Python, Tkinter']} url={'https://github.com/wesngu28/Twitter-Translator'} image={'translator.png'} name={'Translattir'} desc={'A website that allows you to paste in a Spotify artist, track, playlist, or album, and get some information about them and also receive a table with YouTube links of the songs inside of it or recommendations. Also allows for you to login and get information about your listening habits.'} />
            </ul>
        </div>
    )
}
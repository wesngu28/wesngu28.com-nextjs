import ProjectCard from './ProjectCard'
import personalWebsite from '../public/personal-web.png'
import rhodes from '../public/rhodes.png'
import mappingTerrorism from '../public/mapping-terrorism.png'
import closure from '../public/closure.png'
import searchify from '../public/searchify.png'
import translator from '../public/translator.png'
import observatory from '../public/observatory.png'
import glaceon from '../public/pokemon.png'
import lux from '../public/champview.png'

export default function Projects() {
  return (
    <div className="w-[85vw] mt-11">
      <h1 className="text-center font-bold text-2xl p-2">Projects</h1>
      <p className="m-auto sm:w-96 break-normal text-center">
        I like to make projects that are personal to me so I feel more engaged with my
        learning. Here are some of the ones I have worked on recently!
      </p>
      <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          techs={['Typescript', 'Tailwind', 'React', 'Next.js', 'Mapbox']}
          live={'https://wesngu28.com'}
          url={'https://github.com/wesngu28/wesngu28.com'}
          image={personalWebsite}
          name={'Personal Website'}
          desc={
            'This very own website. I learned a lot about Tailwind through this project and got more exposure with the Next.js framework.'
          }
        />
        <ProjectCard
          techs={['Javascript', 'Mapbox', 'Sass']}
          live={'https://wesngu28.github.io/mapping-terrorism/'}
          url={'https://github.com/wesngu28/mapping-terrorism'}
          image={mappingTerrorism}
          name={'Mapping Terrorism'}
          desc={
            'A website dashboard that visualizes the data from the University of Maryland Global Terrorism Database. Made as a group project for Geography 458 with the University of Washington. Was responsible for the design and structure of the website and the icons on the map.'
          }
        />
        <ProjectCard
          techs={['Typescript', 'Node.js', 'Tailwind', 'React', 'Next.js', 'NPM']}
          live={'https://observatories.vercel.app/'}
          url={'https://github.com/wesngu28/observatory'}
          image={observatory}
          name={'Observatory'}
          desc={
            'A web app to complement a CLI I made. Input your package.json or requirements.txt dependency file, and the backend will parse the relevant github repositories and display a table of the ones you have yet to star. You can click to star or unstar the repos from that table.'
          }
        />
        <ProjectCard
          techs={['Typescript', 'SvelteKit', 'Prisma', 'CockroachDB']}
          live={'https://rustboro.vercel.app/'}
          url={'https://github.com/wesngu28/rustboro'}
          image={glaceon}
          name={'Rustboro Stats Game'}
          desc={
            'First real web project I made that has since been reforged in SvelteKit. Allows you to search for a specific pokemon or query six random pokemon. Also has a challenge feature, in which you must choose the Pokemon that has the higher of the specified stat. All the pokemon are stored in a CockroachDB instance.'
          }
        />
        <ProjectCard
          techs={['Typescript', 'Python', 'React', 'Next.js', 'Flask']}
          live={'https://searchifyy.vercel.app/'}
          url={'https://github.com/wesngu28/searchify'}
          image={searchify}
          name={'Searchify'}
          desc={
            'A website that allows you to paste in a Spotify artist, track, playlist, or album, and get some information about them and also receive a table with YouTube links of the songs inside of it or recommendations. Also allows for you to login and get information about your listening habits.'
          }
        />
        <ProjectCard
          techs={['Typescript', 'Vue', 'Nuxt.js']}
          live={'https://simplechampview.vercel.app/'}
          url={'https://github.com/wesngu28/simple-champion-viewer'}
          image={lux}
          name={'Champ Viewer'}
          desc={
            'A web app that allows you to query a champion and get their skins and spells, as well as other tidbits. Can be intensive for slower networks and is defaulted to Lux. Was made to learn a bit of Vue since I wanted to experience it a bit and got some Nuxt as a side dish.'
          }
        />
        <ProjectCard
          techs={['Typescript', 'Node.js', 'Express.js', 'MongoDB']}
          url={'https://github.com/wesngu28/rhodesapi'}
          image={rhodes}
          name={'RhodesAPI'}
          desc={
            'A RESTful API for the gacha tower defense game Arknights. While the game does have some existing databases in various repositories and websites, most were out of date and lacked apis, so I made a scraper to hit the Gamepress page for each operator and stored them in an instance hosted on Mongo Atlas and made it queryable.'
          }
        />
        <ProjectCard
          techs={['Typescript', 'Node.js', 'Discord.js', 'MongoDB', 'Docker']}
          live={'https://closurets.vercel.app/'}
          url={'https://github.com/wesngu28/closurets'}
          image={closure}
          name={'Closure'}
          desc={
            'A discord bot with both general and niche applications. Made to complement the RhodesAPI. Implements operator commands, as well as commands to get live status for youtubers. Can be configured to announce Youtube livestreams and uploads at a comparable time to Pingcord.'
          }
        />
        <ProjectCard
          techs={['Python', 'Tkinter']}
          url={'https://github.com/wesngu28/Twitter-Translator'}
          image={translator}
          name={'Translatter'}
          desc={
            'A little Tkinter or Pysimplegui based Python app that allows you to paste in a foreign-language twitter and receive five tweets in a specified time frame back and the rest of them in csv format.'
          }
        />
      </ul>
    </div>
  )
}

//https://www.pixiv.net/en/artworks/76168775 rhodes
//https://www.flickr.com/photos/sfwmd/33645199696 python

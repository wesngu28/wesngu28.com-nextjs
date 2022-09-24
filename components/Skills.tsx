import SkillCard from './SkillCard'

export default function Skills() {
    return (
        <div className="w-[80vw] mt-11">
            <h1 className="ml-10 text-2xl p-2">Skills</h1>
            <ul className="flex flex-wrap justify-center">
                <SkillCard images={['/skills/linux.svg', '/skills/git.svg', '/skills/docker.svg']} name={'Tools and Systems'} desc={'Operating systems and tools that change how we develop.'}/>
                <SkillCard images={['/skills/html5.svg', '/skills/css3.svg', '/skills/bootstrap.svg', '/skills/sass.svg', '/skills/tailwind.svg']} name={'HTML and CSS'} desc={'The building blocks of the internet. CSS enhanced by Bootstrap, Sass, and Tailwind.'}/>
                <SkillCard images={['/skills/js.svg', '/skills/ts.svg', 'skills/node.svg', '/skills/React.svg', '/skills/Svelte.svg', '/skills/next.svg']} name={'Javascript'} desc={'Javascript and its type-safe and server-side children, as well as frameworks to enhance its power.'}/>
                <SkillCard images={['/skills/python.svg', '/skills/flask.svg']} name={'Python'} desc={'The language of data and AI manipulated for the web.'}/>
                <SkillCard images={['/skills/mongo.svg', '/skills/redis.svg']} name={'Databases'} desc={'Storage of data in the backend'}/>
            </ul>
        </div>
    )
}
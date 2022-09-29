import SkillCard from './SkillCard'

export default function Skills() {
    return (
        <div className="w-[80vw] mt-11">
            <h1 className="text-center text-2xl p-4 font-bold">Skills</h1>
            <ul className="flex flex-wrap justify-center p-4">
                <SkillCard images={['skills/linux.svg', 'skills/git.svg', 'skills/docker.svg']} name={'Tools and Systems'} desc={'Operating systems and tools that help me run services and start new projects.'}/>
                <SkillCard images={['skills/html5.svg', 'skills/css3.svg', 'skills/bootstrap.svg', 'skills/sass.svg', 'skills/tailwind.svg']} name={'HTML and CSS'} desc={'The building blocks of the internet. CSS enhanced by Bootstrap, Sass, and Tailwind.'}/>
                <SkillCard images={['skills/js.svg', 'skills/ts.svg', 'skills/node.svg', 'skills/React.svg', 'skills/Svelte.svg', 'skills/next.svg']} name={'Javascript'} desc={'The various flavors of Javascript. I also know Vite and have worked a bit in SvelteKit.'}/>
                <SkillCard images={['skills/python.svg', 'skills/flask.svg']} name={'Python'} desc={'The language of data and AI. I have also used Jupyter. I have made guis with tkinter and pysimplegui.'}/>
                <SkillCard images={['skills/mongo.svg', 'skills/redis.svg']} name={'Databases'} desc={'Storage of data in the backend. I have worked with Postgres but have not used it in a project.'}/>
            </ul>
        </div>
    )
}
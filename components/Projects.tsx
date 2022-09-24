import ProjectCard from './ProjectCard'

export default function Projects() {
    return (
        <div className="w-[85vw] mt-11">
            <h1 className="ml-10 text-2xl p-2">Projects</h1>
            <ul className="flex flex-wrap justify-center">
                <ProjectCard techs={['Tailwind', 'React', 'Next.js']} image={'https://images.unsplash.com/photo-1661092133234-b96b766ccda1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI3MTQ4MA&ixlib=rb-1.2.1&q=80&w=1920'}name={'An API'} desc={'Some cool API for a media form that has no API.'} />
                <ProjectCard techs={['Typescript', 'Node.js','Express.js', 'MongoDB']} image={'https://images.unsplash.com/photo-1661092133234-b96b766ccda1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI3MTQ4MA&ixlib=rb-1.2.1&q=80&w=1920'}name={'An API'} desc={'Some cool API for a media form that has no API.'} />
                <ProjectCard techs={['Typescript', 'Express.js']} image={'https://images.unsplash.com/photo-1661092133234-b96b766ccda1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI3MTQ4MA&ixlib=rb-1.2.1&q=80&w=1920'}name={'An API'} desc={'Some cool API for a media form that has no API.'} />
                <ProjectCard techs={['Typescript', 'Express.js']} image={'https://images.unsplash.com/photo-1661092133234-b96b766ccda1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MzI3MTQ4MA&ixlib=rb-1.2.1&q=80&w=1920'}name={'An API'} desc={'Some cool API for a media form that has no API.'} />
            </ul>
        </div>
    )
}
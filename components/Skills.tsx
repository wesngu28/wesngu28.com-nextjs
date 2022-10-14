import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <div className="w-[100vw] relative">
      <div className="absolute top-0 left-0 overflow-hidden leading-none w-full">
        <svg
          className="relative block w-[calc(128%+2px)] h-[111px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            className="fill-[#1F2022]"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          ></path>
        </svg>
      </div>
      <h1 className="mt-11  text-center text-2xl p-4 font-bold">Skills</h1>
      <ul className="flex flex-wrap justify-center p-4">
        <SkillCard
          images={['skills/linux.svg', 'skills/git.svg', 'skills/docker.svg']}
          name={'Tools and Systems'}
          desc={
            'Operating systems and tools that help me run services and start new projects.'
          }
        />
        <SkillCard
          images={[
            'skills/html5.svg',
            'skills/css3.svg',
            'skills/bootstrap.svg',
            'skills/sass.svg',
            'skills/tailwind.svg',
          ]}
          name={'HTML and CSS'}
          desc={
            'The building blocks of the internet. CSS enhanced by Bootstrap, Sass, and Tailwind.'
          }
        />
        <SkillCard
          images={[
            'skills/js.svg',
            'skills/ts.svg',
            'skills/node.svg',
            'skills/React.svg',
            'skills/Svelte.svg',
            'skills/next.svg',
          ]}
          name={'Javascript'}
          desc={
            'The various flavors of Javascript. I also know Vite and have worked a bit in SvelteKit.'
          }
        />
        <SkillCard
          images={['skills/python.svg', 'skills/flask.svg']}
          name={'Python'}
          desc={
            'The language of data and AI. I have also used Jupyter. I have made guis with tkinter and pysimplegui.'
          }
        />
        <SkillCard
          images={['skills/mongo.svg', 'skills/redis.svg']}
          name={'Databases'}
          desc={
            'Storage of data in the backend. I have worked with Postgres but have not used it in a project.'
          }
        />
      </ul>
    </div>
  )
}

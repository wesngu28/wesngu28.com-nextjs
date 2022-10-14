import languageList from '../languages.json'
import Image, { StaticImageData } from 'next/image'
import useSWR from 'swr'

interface Props {
  techs: string[]
  image: StaticImageData
  name: string
  desc: string
  url: string
  live?: string
}

export default function ProjectCard({ techs, image, name, desc, url, live }: Props) {
  const swrFetch = async (url: string) => {
    const linguist = await fetch(url)
    const langs = await linguist.json()
    const counts: Array<number> = Object.values(langs)
    const total = counts.reduce(
      (previousValue: number, currentValue) => previousValue + currentValue,
      0
    )
    Object.keys(langs).map(extension => {
      langs[extension] = (langs[extension] / total) * 100
    })
    return langs
  }

  const { data, error } = useSWR(
    `/api/github?repo=${url.replace('https://github.com/wesngu28/', '')}`,
    swrFetch,
    {
      refreshInterval: 86400000,
      revalidateOnFocus: false,
    }
  )

  return (
    <li className="p-4 bg-[#21222a] m-4 inline-block">
      {live ? (
        <a className="m-auto" target="_blank" href={live} rel="noopener noreferrer">
          <Image
            alt={`${name} screenshot or related content if no screenshot makes sense`}
            src={image}
          />
        </a>
      ) : (
        <Image
          alt={`${name} screenshot or related content if no screenshot makes sense`}
          src={image}
        />
      )}
      <div className="-my-2 w-full">
        {data && Object.keys(data).length > 0
          ? Object.keys(data).map(lang => {
              const divStyle = {
                width: `${data[lang]}%`,
                backgroundColor: `${(languageList as any)[lang].color}`,
                color: `${(languageList as any)[lang].color}`,
              }
              return (
                <span
                  title={lang}
                  key={lang}
                  style={divStyle}
                  className={`inline-block bg-[#3178c6] text-[0.4rem]`}
                  data-view-component="true"
                >
                  .
                </span>
              )
            })
          : null}
      </div>
      <div className={`pr-2 pl-2`}>
        <ul className={'flex mt-1 justify-center flex-wrap'}>
          {techs.map((arr, i) => {
            return (
              <li key={arr} className="m-2 p-1 bg-[beige] text-black rounded-lg">
                <p>{arr}</p>
              </li>
            )
          })}
        </ul>
        <a target="_blank" href={url} rel="noopener noreferrer">
          <h2 className="hover:underline m-2 text-center font-bold text-lg">{name}</h2>
        </a>
        <p>{desc}</p>
      </div>
    </li>
  )
}

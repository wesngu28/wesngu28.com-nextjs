export default function Footer() {
  return (
    <>
      <div className="w-[100vw] mt-11 relative">
        <div className="absolute bottom-0 left-0 overflow-hidden leading-none w-full transform rotate-180">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[111px]"
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
      </div>
      <footer className="bg-[#1F2022] p-8 relative bottom-0 w-full">
        <p className="text-center">Made with Tailwind, React, and Next.js.</p>
        <p className="mt-3 text-center">Hosted by Vercel.</p>
        <p className="mt-3 text-center">Wesley Nguyen 2022</p>
      </footer>
    </>
  )
}

// import Link from 'next/link'

// interface Props {
//     fourth: string;
// }

// export default function Nav({fourth}: Props) {
//     return (
//         <nav>
//             <ul className="list-none flex justify-center flex-wrap">
//                 <li className="rounded-lg h-7 w-min flex justify-center items-center m-4 p-3 bg-[#1F2022]">
//                     <img className="box-border h-4 w-4 mr-2" src="/github.svg"/>
//                     <a target="_blank" href="https://github.com/wesngu28" rel="noopener noreferrer" className="text-xl hover:underline">wesngu28</a>
//                 </li>
//                 <li className="h-7 w-15 flex justify-center items-center m-4 p-3 bg-[#1F2022]">
//                     <img className="box-border h-4 w-4 mr-2" src="/linkedin.svg"/>
//                     <p className="text-xl">wesngu28</p>
//                 </li>
//                 <li className="h-7 w-min flex justify-center items-center m-4 p-3 bg-[#1F2022]">
//                     <img className="box-border h-4 w-4 mr-2" src="/email.svg"/>
//                     <p className="text-xl">gmail.com</p>
//                 </li>
//                 <li className="h-7 w-15 flex justify-center items-center m-4 p-3 bg-[#1F2022]">
//                     <Link href={fourth === 'about' ? `/${fourth}` : '/'}>
//                         <p className="text-xl">
//                             {fourth === 'about' ? 'More About' : 'Return Home'}
//                         </p>
//                     </Link>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

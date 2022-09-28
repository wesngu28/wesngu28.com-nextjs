export default function Footer() {
    return (
        <footer className='bg-[#21222a] p-8 relative bottom-0 mt-11 w-full'>
            <p className="text-center">Made with Tailwind, React, and Next.js.</p>
            <p className="mt-3 text-center">Hosted by Vercel.</p>
            <p className="mt-3 text-center">Wesley Nguyen 2022</p>
        </footer>
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
import Image from "next/image";
import Link from "next/link";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

const links = [
  {
    icon: GitHubLogoIcon,
    link: "https://github.com/zachyne",
    name: "Github"
  },
  {
    icon: LinkedInLogoIcon,
    link: "https://linkedin.com/in/zachyne",
    name: "LinkedIn"
  },
  {
    icon: InstagramLogoIcon,
    link: "https://instagram.com/cyzchynsy",
    name: "Instagram"
  }
];

const ProfileLink = ({ icon: Icon, link, name }) => (
  <div className="flex bg-gray-800 items-center p-3 rounded-xl gap-2">
    <Icon className="h-4 w-4" />
    <Link href={link} target="_blank">
      <button className="text-white rounded-lg">{name}</button>
    </Link>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col justify-start min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)] items-center">
      {/* Profile Pic and Name */}
      <div className='flex flex-col items-center pt-10 sm:p-0'> 
      <Image
              className='rounded-full items-center'
              src="/img/me.jpg"
              alt="Vercel logomark"
              width={160}
              height={160}
      />
      <h2 className='font-bold text-2xl mt-3'>ZACHYNE</h2>
        <p>A woman who designs and codes</p>
      </div>

      {/* Connect With Me  */}
      <div className='flex justify-center gap-5 m-10'>
        <div className="flex gap-4">
          {links.map((item, index) => (
            <ProfileLink key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <h2 className='text-3xl font-extrabold p-10'>PROJECTS</h2>
      <div className="flex justify-center transition-transform duration-300 hover:scale-105">
        {/* Left side - Image */}
        <div className="w-44 h-40">
          <Image
            className="rounded-tl-lg rounded-bl-lg w-full h-full"
            src={'/img/projects/plantify/plantify_main.png'}
            alt="Plantify"
            style={{ objectFit: "cover" }} 
            width={160} 
            height={100} 
          />
        </div>

        {/* Right side - Text (Longer) */}
        <div className="bg-gray-800 bg-opacity-30 backdrop-blur-lg rounded-tr-lg rounded-br-lg p-4 w-80 h-40 flex flex-col justify-center shadow-lg">
          <h2 className="text-white text-lg font-semibold">Plantify</h2>
          <h2 className="text-gray-300 text-sm">A thesis project in college made with passion by 4 students.</h2>
        </div>
      </div>

      {/* <h2 className='text-3xl font-extrabold p-10'>BLOGS</h2> */}
      {/* <div className="flex justify-center transition-transform duration-300 hover:scale-105">

        <div className="w-44 h-40">
          <Image
            className="rounded-tl-lg rounded-bl-lg w-full h-full"
            src={'/img/projects/plantify/plantify_main.png'}
            alt="Plantify"
            style={{ objectFit: "cover" }} 
            width={160} 
            height={100} 
          />
        </div>

        <div className="bg-gray-800 bg-opacity-30 backdrop-blur-lg rounded-tr-lg rounded-br-lg p-4 w-80 h-40 flex flex-col justify-center shadow-lg">
          <h2 className="text-white text-lg font-semibold">Plantify</h2>
          <h2 className="text-gray-300 text-sm">A thesis project in college made with passion by 4 students.</h2>
        </div>
      </div> */}
      <p className='mt-20'>Portfolio is in progress...</p>


    </div>
  );
}

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
    <Icon className="h-5 w-5" />
    <Link href={link} target="_blank">
      <button className="text-white rounded-lg">{name}</button>
    </Link>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col justify-start min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Profile Pic and Name */}
      <div className='flex flex-col items-center'> 
      <Image
              className='rounded-full items-center'
              src="/img/me.jpg"
              alt="Vercel logomark"
              width={180}
              height={180}
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


    </div>
  );
}

import Image from "next/image"
import Intro from "../components/Intro"

const profileImages = ["/img/me_1.jpg", "/img/me_2.png", "/img/me_3.jpg"];

const experiences = [
    {
        logo: "/img/about/landchecker.png",
        company: "Landchecker",
        role: "Intern",
        team: "Data Engineering Team",
        duration: "January 2025 - April 2025",
    },
];

const education = [
    {
        logo: "/img/about/bipsu.jpg",
        school: "Biliran Province State University",
        degree: "Bachelor of Science in Computer Science",
        years: "2021 - Present",
    },
    {
        logo: "/img/about/bipsu.jpg",
        school: "Biliran Province State University - Laboratory High School",
        degree: "Senior High School | STEM",
        honors: "Graduated with Honors",
        years: "2019 - 2021",
    },
    {
        logo: "/img/about/anhs.jpeg",
        school: "Almeria National High School",
        degree: "Junior High School",
        honors: "Moved up with Honors",
        years: "2015 - 2019",
    },
    {
        logo: "/img/about/asemco.png",
        school: "Almeria Seafarers Learning Center",
        degree: "Elementary",
        honors: "Graduated Salutatorian",
        years: "2015",
    },
];

const technologies = [
    { name: "Python", logo: "/img/about/python.png", category: "Programming Languages"},
    { name: "JavaScript", logo: "/img/about/javascript.png", category: "Programming Languages" },
    { name: "Bash", logo: "/img/about/bash.png", category: "Programming Languages" },
    { name: "PHP", logo: "/img/about/php.png", category: "Programming Languages" },
    { name: "Dart", logo: "/img/about/dart.png", category: "Programming Languages" },
    { name: "React", logo: "/img/about/react.png", category: "Web Development" },
    { name: "Next.js", logo: "/img/about/next.png", category: "Web Development" },
    { name: "PostgreSQL", logo: "/img/about/psql.png", category: "Web Development" },
    { name: "QGIS", logo: "/img/about/qgis.png", category: "Data & QGIS" },
    { name: "ETL", logo: "/img/about/etl.png", category: "Data & QGIS"  },
    { name: "Selenium", logo: "/img/about/selenium.png", category: "Selenium & Bash Scripting"  },
    { name: "Bash Scripting", logo: "/img/about/bash-script.png", category: "Selenium & Bash Scripting" },
    { name: "Flutter", logo: "/img/about/flutter.png", category: "Mobile App Development" },
];

const ProfileImage = ({ src }) => (
    <div className='flex items-center justify-center'>
        <Image src={src} width={300} height={300} className='rounded-lg' alt="Profile" />
    </div>
);

const ExperienceItem = ({ logo, company, role, team, duration }) => (
    <div className='flex'>
        <Image className='rounded-full' src={logo} alt={company} width={100} height={100} />
        <div className='ml-10 flex flex-col justify-between'>
            <div>
                <h2 className='font-bold text-2xl'>{company}</h2>
                <h3><strong>{role}</strong> <i>{team}</i></h3>
            </div>
            <div>
                <h4>{duration}</h4>
            </div>
        </div>
    </div>
);

const EducationItem = ({ logo, school, degree, honors, years }) => (
    <div className='flex'>
        <Image className='rounded-full' src={logo} alt={school} width={100} height={100} />
        <div className='ml-10 gap-5'>
            <div>
                <h2 className='font-bold'>{school}</h2>
                <h3>{degree}</h3>
                {honors && <h4 className='italic'>{honors}</h4>}
            </div>
            <div>
                <h4>{years}</h4>
            </div>
        </div>
    </div>
);

const groupedTechnologies = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech);
    return acc;
}, {});

const TechItem = ({ name, logo }) => (
    <div className='flex flex-col items-center transition-transform duration-300 hover:scale-105'>
        <Image className='rounded-full' src={logo} alt={name} width={100} height={100} />
        <h2 className='mt-3'>{name}</h2>
    </div>
);


export default function About() {
    return (
        <div className="flex flex-col justify-start min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Intro line1="who is" line2="ZACHYNE" line3="?" />

            {/* 3 Pictures  */}
            <div className='grid grid-cols-3 gap-4 text-center mt-8'>
                {profileImages.map((src, index) => <ProfileImage key={index} src={src} />)}
            </div>
    

            {/* About Me  */}
            <div className="flex p-2 mt-8">
                <div className="w-2/6 p-4">
                    {/* <!-- Content for the 1/2 section --> */}
                    <h2 className="text-xl font-bold">About Me</h2>
                </div>
                <div className="w-4/6 p-4">
                    {/* <!-- Content for the 3/4 section --> */}
                    <p className="mb-5">Hi! I am Cyrine and I go by the name of “Zachyne”, why? because it is cool. I am from the Philippines and I am currently a senior computer science student.</p>
                    <p className="mb-5">I am passionate in Web Development and Data Engineering.</p>
                    <p className="mb-5">I created this portfolio website so I can practice my coding skills. This website’s design might seem feel familiar because this is inspired by Brian Ruiz’s portfolio page. I am a fan of him.</p>
                </div>
            </div>

            {/* Experience */}
            <div className="flex p-2 mt-8">
                <div className="w-2/6 p-4">
                    {/* <!-- Content for the 1/2 section --> */}
                    <h2 className="text-xl font-bold">Experience</h2>
                </div>
                <div className="w-4/6 p-4">
                    {/* <!-- Content for the 3/4 section --> */}
                    <Section title='Experience'>
                        {experiences.map((exp, index) => <ExperienceItem key={index} {...exp} />)}
                    </Section>
                </div>
            </div>

            {/* Education */}
            <div className="flex p-2 mt-8">
                <div className="w-2/6 p-4">
                    {/* <!-- Content for the 1/2 section --> */}
                    <h2 className="text-xl font-bold">Education</h2>
                </div>
                <div className="w-4/6 p-4 flex flex-col gap-10">
                    {/* <!-- Content for the 3/4 section --> */}
                    <Section title='Education'>
                        {education.map((edu, index) => <EducationItem key={index} {...edu} />)}
                    </Section>
                </div>
            </div>

            {/* Technologies Used */}
            <div className="flex p-2 mt-8">
                <div className="w-2/6 p-4">
                    <h2 className="text-xl font-bold">Technologies Used</h2>
                </div>
                <div className="w-4/6 p-4">
                    {Object.entries(groupedTechnologies).map(([category, techs]) => (
                        <div key={category} className="flex flex-col mb-10">
                            <div className="font-semibold text-xl mb-5">{category}</div>
                            <div className="flex flex-wrap gap-x-8 gap-y-8">
                                {techs.map((tech, index) => (
                                    <TechItem key={index} {...tech} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const Section = ({ children }) => (
    <div>
        <div className="flex flex-col gap-5">{children}</div>
    </div>
);
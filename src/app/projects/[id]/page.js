"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Papa from "papaparse";
import Link from "next/link";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchCSV = async () => {
      const response = await fetch("/data/projects.csv");
      const text = await response.text();
      const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });

      // Find the project with the matching ID
      const selectedProject = parsed.data.find((p) => p.id === id);
      setProject(selectedProject);
    };

    fetchCSV();
  }, [id]);

  if (!project) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex flex-col justify-start min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="p-10 max-w-3xl mx-auto">
            <Link href="/projects" className="text-white hover:underline">← Back to Projects</Link>
            
            <h1 className="text-3xl font-bold mt-5">{project.title}</h1>
            <h2 className="text-sm text-justify">{project.subtitle}</h2>
            <h2 className="my-5">Year: {project.year}</h2>

            <div className="flex flex-col justify-center items-center text-justify">
                <Image
                    src={`/img/projects/${project.main_image}`}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-lg my-12"
                />

                <div>
                    <h2>{project.description_1}</h2>
                </div>

                <Image
                    src={`/img/projects/${project.image_2}`}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-lg my-12"
                />

                <div>
                    <h2>{project.description_2}</h2>
                </div>

                <Image
                    src={`/img/projects/${project.image_3}`}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-lg my-12"
                />

                <div>
                    <h2>{project.description_3}</h2>
                </div>

            </div>
        </div>
    </div>
    
  );
}

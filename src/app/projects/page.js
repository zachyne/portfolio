"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Papa from "papaparse";
import Intro from "../components/Intro";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchCSV = async () => {
      const response = await fetch("/data/projects.csv");
      const text = await response.text();
      const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
      setProjects(parsed.data);
    };

    fetchCSV();
  }, []);

  return (
    <div className="flex flex-col justify-start min-h-screen px-5 py-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Intro line1="these are my" line2="PROJECTS" line3="happy viewing" />

      <div className="flex justify-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center">
          Mobile App Development
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 place-items-center">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="max-w-sm w-full">
            <div className="w-full cursor-pointer transition-transform duration-300 hover:scale-105">
              {/* Image Container */}
              <div className="bg-gray-600 h-56 rounded-lg relative overflow-hidden">
                <Image
                  className="rounded-lg"
                  src={`/img/projects/${project.main_image}`}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Text Below */}
              <div className="mt-2 px-3">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-sm text-justify">{project.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

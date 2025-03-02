"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Papa from "papaparse";
import Intro from "../components/Intro";

export default function Kdramas() {
  const [kdramas, setKdramas] = useState([]);

  useEffect(() => {
    const fetchCSV = async () => {
      const response = await fetch("/data/kdramas.csv"); // Ensure CSV is in public/data
      const text = await response.text();
      const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
      setKdramas(parsed.data);
    };

    fetchCSV();
  }, []);

  return (
    <div className="flex flex-col justify-start min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Intro line1="my watched" line2="KDRAMAS" line3="because I am a big fan :>" />

      <div className="grid grid-cols-5 gap-8 text-center">
        {kdramas.map((kdrama, index) => (
          <div key={index} className="flex flex-col items-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={`/img/kdramas/${kdrama.poster_image}`} // Ensure images match filenames in /public/img/kdramas/
              width={192}
              height={269}
              className="rounded-lg"
              alt={kdrama.title}
            />
            <h2 className="font-bold text-lg mt-4">{kdrama.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

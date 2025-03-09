"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Papa from "papaparse";
import Intro from "../components/Intro";
import KdramaModal from "../components/KdramaModal"; // Import the modal component

export default function Kdramas() {
  const [kdramas, setKdramas] = useState([]);
  const [selectedKdrama, setSelectedKdrama] = useState(null); // Track clicked kdrama

  useEffect(() => {
    const fetchCSV = async () => {
      const response = await fetch("/data/kdramas.csv");
      const text = await response.text();
      const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
      setKdramas(parsed.data);
    };

    fetchCSV();
  }, []);

  return (
    <div className="flex flex-col justify-start min-h-screen px-5 py-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Intro line1="my watched" line2="KDRAMAS" line3="because I am a big fan :>" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center mt-10">
        {kdramas.map((kdrama, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedKdrama(kdrama)} // Open modal when clicked
          >
            <Image
              src={`/img/kdramas/${kdrama.poster_image}`}
              width={192}
              height={269}
              className="rounded-lg max-w-[192px]"
              alt={kdrama.title}
            />
            <h2 className="font-bold text-lg mt-4">{kdrama.title}</h2>
          </div>
        ))}
      </div>

      {/* Render the Modal if a kdrama is selected */}
      {selectedKdrama && <KdramaModal kdrama={selectedKdrama} onClose={() => setSelectedKdrama(null)} />}
    </div>
  );
}

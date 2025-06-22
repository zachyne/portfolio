"use client";
import { useEffect } from "react";
import { urlFor } from '../../lib/sanity';

export default function KdramaModal({ kdrama, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!kdrama) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Content layout */}
        <div className="flex flex-row gap-8">
          {/* Left: Poster and details */}
          <div className="flex flex-col items-center w-1/3">
            <img
              src={urlFor(kdrama.poster_image).url()}
              alt={kdrama.title}
              className="w-full max-w-xs aspect-[3/4] object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-4 uppercase text-gray-800">{kdrama.title}</h2>
            <div className="mt-4 text-sm text-gray-700 w-full">
              <p><strong>CASTS:</strong> <em>{kdrama.casts?.join(", ") || "N/A"}</em></p>
              <p><strong>EPISODES:</strong> {kdrama.episodes || "N/A"}</p>
              <p><strong>RELEASED YEAR:</strong> {kdrama.release_year || "N/A"}</p>
              <p><strong>WATCHED YEAR:</strong> {kdrama.watch_year || "N/A"}</p>
            </div>
          </div>

          {/* Right: Synopsis */}
          <div className="w-2/3">
            <h3 className="text-xl font-bold mb-2 text-gray-800">SYNOPSIS:</h3>
            <div className="max-h-[550px] overflow-y-auto pr-2 text-justify text-gray-800">
              <p>{kdrama.synopsis || "No synopsis available."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

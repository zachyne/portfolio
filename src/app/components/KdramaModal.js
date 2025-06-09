"use client";
import { useEffect } from "react";

export default function KdramaModal({ kdrama, onClose }) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!kdrama) return null; // Don't render if no kdrama is selected

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg max-w-lg w-full p-6 pt-10 relative">
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-600 hover:text-black" onClick={onClose}>
          ✖
        </button>

        {/* Kdrama Content */}
        <div className="flex gap-6 items-center h-auto">
          {/* Image + Title Section */}
          <div className="flex flex-col items-center w-1/3">
            <img
              src={`/img/kdramas/${kdrama.poster_image}`}
              alt={kdrama.title}
              className="rounded-lg w-48 h-auto mb-2"
            />
            <h2 className="text-xl font-bold text-center">{kdrama.title}</h2>
            <div>
              <h1 className="text-lg">
                Casts:
              </h1>
              <p>{kdrama.casts}</p>
            </div>
          </div>

          {/* Scrollable Synopsis Section */}
          <div className="w-2/3">
            <h3 className="text-lg font-semibold mb-2 text-white">Synopsis</h3>
            <div className="max-h-96 overflow-y-auto pr-2 text-justify text-gray-200">
              <p>{kdrama.synopsis || "No description available."}</p>
            </div>
          </div>

        </div>

        
      </div>
    </div>
  );
}

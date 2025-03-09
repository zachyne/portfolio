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
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-600 hover:text-black" onClick={onClose}>
          ✖
        </button>

        {/* Kdrama Content */}
        <div className="flex flex-col items-center">
          <img src={`/img/kdramas/${kdrama.poster_image}`} alt={kdrama.title} className="rounded-lg w-48 h-auto mb-4" />
          <h2 className="text-2xl font-bold">{kdrama.title}</h2>
          <p className="text-gray-600 mt-2">{kdrama.description || "No description available."}</p>
        </div>
      </div>
    </div>
  );
}

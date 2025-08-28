import React, { useState } from "react";

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[320px] h-[450px] mx-auto cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-gray-900/60 rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center">
          {front}
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-white">
          {back}
        </div>
      </div>
    </div>
  );
}

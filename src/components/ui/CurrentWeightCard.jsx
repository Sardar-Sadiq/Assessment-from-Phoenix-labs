import React from "react";

export default function CurrentWeightCard({ weight }) {
  return (
    <div className="bg-white shadow p-4 rounded-2xl w-full">
      <h3 className="text-lg font-semibold text-gray-700">Current Weight</h3>
      <p className="text-2xl font-bold text-gray-900">{weight} kg</p>
    </div>
  );
}

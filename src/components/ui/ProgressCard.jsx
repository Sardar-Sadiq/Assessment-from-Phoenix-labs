import React from "react";
import Progress from "@/components/ui/Progress";

export default function ProgressCard({ percent }) {
  return (
    <div className="bg-white shadow p-4 rounded-2xl w-full">
      <h3 className="text-lg font-semibold text-gray-700">Progress to Goal</h3>
      <p className="text-2xl font-bold text-gray-900 mb-2">{percent}%</p>
      <Progress value={percent} />
    </div>
  );
}

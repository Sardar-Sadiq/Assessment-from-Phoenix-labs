import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

import { patientData } from "../data/patientData";
import { users } from "../data/users";

function getBmiStatus(bmi) {
  if (bmi < 18.5) return { label: "Underweight", color: "text-blue-500" };
  if (bmi < 25) return { label: "Healthy", color: "text-green-600" };
  if (bmi < 30) return { label: "Overweight", color: "text-yellow-700" };
  return { label: "Obese", color: "text-red-600" };
}

export const Progress = ({ patientId }) => {
  const patient = patientData.find((p) => p.user === patientId);
  if (!patient) return <div className="text-red-500">Patient not found.</div>;

  const latestBMI = patient.weightHistory[patient.weightHistory.length - 1].bmi;
  const bmiStatus = getBmiStatus(latestBMI);
  const currentUserId = Number(localStorage.getItem("currentUserId")) || 1;
  const user = users.find((u) => u.id === currentUserId);
  const data = patientData.find((p) => p.userId === currentUserId);
  const { height } = data;

  return (
    <div className="w-full gap-8  mt-3">
      <div className="flex flex-col gap-8">
        {/* Row: Weight Chart + Stats */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Weight Over Time Chart */}
          <div className="bg-white rounded-xl shadow p-6 flex-1">
            <h2 className="text-xl font-semibold mb-2">Weight Over Time</h2>
            <p className="text-gray-500 text-sm mb-4">
              Your weight journey for the last 12 weeks
            </p>
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={patient.weightHistory}>
                <XAxis dataKey="date" />
                <YAxis
                  dataKey="weight"
                  domain={[
                    (dataMin) => Math.floor(dataMin - 2),
                    (dataMax) => Math.ceil(dataMax + 2),
                  ]}
                  width={35}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="weight"
                  name="Weight (kg)"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <ReferenceLine
                  y={patient.goalWeight}
                  stroke="#22c55e"
                  strokeDasharray="6 2"
                  label={{
                    position: "right",
                    value: "Goal Weight",
                    fill: "#22c55e",
                    fontSize: 12,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex items-center mt-2 text-green-600 gap-2">
              <span className="inline-block w-4 h-1 rounded bg-green-500"></span>
              <span className="text-xs font-medium">Goal Weight</span>
            </div>
          </div>

          {/* Stats & Progress */}
          <div className="bg-white rounded-xl shadow p-6 w-full md:w-[400px] flex flex-col gap-4">
            <div className="gap-1">
              <h2 className="text-lg font-semibold mb-2">Stats & Progress</h2>
              <h3 className="text-gray-500">Your current metrics</h3>
            </div>
            <div className="flex items-baseline flex-col gap-2">
              <span className="text-3xl font-bold">{latestBMI.toFixed(1)}</span>
              <span className={`${bmiStatus.color} text-[15px] font-semibold`}>
                {bmiStatus.label}
              </span>
              <h3 className="text-gray-500 text-md">Height: {height} cm</h3>
            </div>
            <div className="mb-2" aria-label="progress to goal">
              <div className=" text-3xl  mb-3 font-bold">
                {patient.progressSummary.percentToGoal}%{" "}
                <span className="text-sm text-gray-500">complete</span>
              </div>
              <div className="relative w-full h-4 bg-gray-200 rounded-xl overflow-hidden">
                <div
                  className="absolute h-4 left-0 top-0 bg-blue-600 rounded-xl"
                  style={{ width: `${patient.progressSummary.percentToGoal}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-3 pb-1">
                <span>Start: {patient.startWeight}kg</span>
                <span>Goal: {patient.goalWeight}kg</span>
              </div>
            </div>
            <h1 className="text-gray-500">Weight Metrics</h1>
            <div className="grid grid-cols-2 gap-5 w-full ">
              {/* 1 */}

              <div className="bg-[#F1F5F9] rounded px-6 py-2 flex flex-col justify-between shadow min-w-[110px]">
                <span className="text-xs text-gray-400 font-medium">
                  Current
                </span>
                <span className="text-xl font-bold leading-tight mt-1">
                  {patient.currentWeight} kg
                </span>
              </div>
              {/* 2 */}
              <div className="bg-[#F1F5F9] rounded px-6 py-2 flex flex-col justify-between shadow min-w-[110px]">
                <span className="text-xs text-gray-400 font-medium">Lost</span>
                <span className="text-xl font-bold leading-tight mt-1">
                  {patient.progressSummary.weightLost} kg
                </span>
              </div>
              {/* 3 */}
              <div className="bg-[#F1F5F9] rounded px-6 py-2 flex flex-col justify-between shadow min-w-[110px]">
                <span className="text-xs text-gray-400 font-medium">To Go</span>
                <span className="text-xl font-bold leading-tight mt-1">
                  {(patient.currentWeight - patient.goalWeight).toFixed(1)} kg
                </span>
              </div>
              {/* 4 */}
              <div className="bg-[#F1F5F9] rounded px-6 py-2 flex flex-col justify-between shadow min-w-[110px]">
                <span className="text-xs text-gray-400 font-medium">Rate</span>
                <span className="text-xl font-bold leading-tight mt-1">
                  {(
                    patient.progressSummary.weightLost /
                    patient.progressSummary.weeksOnProgram
                  ).toFixed(1)}{" "}
                  w/k
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BMI Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">BMI Over Time</h2>
          <p className="text-gray-500 text-sm mb-4">Your BMI history</p>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={patient.weightHistory}>
              <XAxis dataKey="date" />
              <YAxis
                dataKey="bmi"
                domain={[18, 32]}
                ticks={[18.5, 25, 30]}
                width={35}
              />
              <Tooltip
                formatter={(value) => value.toFixed(1)}
                labelFormatter={(label) => `Date: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="bmi"
                name="BMI"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <ReferenceLine y={18.5} stroke="#0ea5e9" strokeDasharray="3 1" />
              <ReferenceLine y={25} stroke="#22c55e" strokeDasharray="3 1" />
              <ReferenceLine y={30} stroke="#f59e42" strokeDasharray="3 1" />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex mt-2 gap-4 text-xs flex-wrap">
            <span className="text-blue-500">BMI &lt; 18.5: Underweight</span>
            <span className="text-green-600">BMI &lt; 25: Healthy</span>
            <span className="text-yellow-700">BMI &lt; 30: Overweight</span>
            <span className="text-red-600">BMI ≥ 30: Obese</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;

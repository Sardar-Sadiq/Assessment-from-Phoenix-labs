import React from "react";
import { patientData } from "../data/patientData";
import { users } from "../data/users";
import { Card, CardContent } from "../components/ui/Card";
import { Weight, TrendingUp, Package } from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const user = users.find((u) => u.id === patientData.userId);
  const {
    currentWeight,
    goalWeight,
    startWeight,
    weightHistory,
    shipments,
    nextShipmentDate,
  } = patientData;

  const weightLost = startWeight - currentWeight;
  const weightToGo = goalWeight - currentWeight;
  const percentToGoal = Math.round(
    (weightLost / (startWeight - goalWeight)) * 100
  );

  const pendingShipment = shipments.find((s) => s.status === "pending");

  return (
    <div className="p-6 space-y-6">
      {/* 👋 Welcome */}
      <div>
        <h1 className="text-3xl font-bold">Welcome, {user.fullName} 👋</h1>
        <p className="text-muted-foreground">Here is your latest progress</p>
      </div>

      {/* 📊 Cards Row */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* 🟥 Card 1: Current Weight */}
  <Card>
    <CardContent className="p-4 space-y-2">
      <div className="flex items-center gap-2">
        <Weight className="h-5 w-5 text-red-500" />
        <p className="text-muted-foreground">Current Weight</p>
      </div>
      <h2 className="text-2xl font-bold">{currentWeight} kg</h2>
      <p className="text-sm text-muted-foreground">
        <span className="text-green-600">{weightLost}</span> lost from start weight <br />
        Goal: {goalWeight}kg ({weightToGo} kg to go)
      </p>
    </CardContent>
  </Card>

  {/* 🟩 Card 2: Progress Summary */}
  <Card>
    <CardContent className="p-4 space-y-2">
      <div className="flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-green-500" />
        <p className="text-muted-foreground">Progress</p>
      </div>
      <h2 className="text-2xl font-bold">{weightLost} kg lost</h2>
      <p className="text-sm text-muted-foreground">
        {percentToGoal}% to goal • {weightHistory.length} weeks on program
      </p>
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${percentToGoal}%` }}
        ></div>
      </div>
    </CardContent>
  </Card>

  {/* 🟦 Card 3: Next Shipment */}
  <Card>
    <CardContent className="p-4 space-y-2">
      <div className="flex items-center gap-2">
        <Package className="h-5 w-5 text-blue-500" />
        <p className="text-muted-foreground">Next Shipment</p>
      </div>
      <h2 className="text-2xl font-bold">
        {new Date(nextShipmentDate).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </h2>
      <p className="text-sm text-muted-foreground">
        Status: {pendingShipment?.status ?? "N/A"} • Dosage: {pendingShipment?.dosage ?? "N/A"}
      </p>
    </CardContent>
  </Card>
</div>


      {/* 📈 Chart + 🚚 Shipments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-2">
        {/* 📈 Left: Weight Chart */}
        <div className="col-span-2 bg-white rounded-xl shadow-md p-5">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            Weight Change
          </h2>
          <p className="text-sm text-gray-500 mb-4">Your weight change</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weightHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[60, 85]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#6366f1"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 🚚 Right: Recent Shipments */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Recent Shipments
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Status of your medication deliveries
          </p>

          <div className="space-y-4">
            {shipments
              .slice(-3)
              .reverse()
              .map((s) => (
                <div key={s.id} className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-gray-800">
                      Wegovy {s.dosage}
                    </p>
                    <p className="text-sm text-gray-500">{s.date}</p>
                  </div>
                  <span
                    className={`capitalize text-xs font-semibold px-2 py-1 rounded-full ${
                      s.status === "pending"
                        ? "text-yellow-600 bg-yellow-100"
                        : s.status === "shipped"
                          ? "text-blue-600 bg-blue-100"
                          : "text-green-600 bg-green-100"
                    }`}
                  >
                    {s.status}
                  </span>
                </div>
              ))}
          </div>

          <p className="mt-4 text-sm text-blue-600 font-medium hover:underline cursor-pointer">
            View all shipments →
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

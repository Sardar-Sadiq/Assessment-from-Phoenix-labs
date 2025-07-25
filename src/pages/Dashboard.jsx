import React from "react";
import { patientData } from "../data/patientData";
import { users } from "../data/users";
import { Card, CardContent } from "../components/ui/Card";
import Progress from "../components/ui/Progress";

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

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome, {user.fullName} 👋</h1>
        <p className="text-muted-foreground">Here is your latest progress</p>
      </div>

      {/* ✅ ONLY 3 Cards - Based on your image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* 🟥 Card 1 - Current Weight */}
  <Card>
    <CardContent className="p-4">
      <p className="text-muted-foreground">Current Weight</p>
      <h2 className="text-2xl font-bold">{currentWeight} kg</h2>
      <p className="text-sm text-muted-foreground">
        <span className="text-green-600">8.0</span> lost from start weight <br/> Goal: 65kg (7.0 kg to go)
      </p>
    </CardContent>
  </Card>

  {/* 🟩 Card 2 - Progress Summary */}
  <Card>
    <CardContent className="p-4">
      <p className="text-muted-foreground">Progress</p>
      <h2 className="text-2xl font-bold">
        {startWeight - currentWeight} kg lost
      </h2>
      <p className="text-sm text-muted-foreground">
        {Math.round(
          ((startWeight - currentWeight) /
            (startWeight - goalWeight)) *
            100
        )}
        % to goal • {weightHistory.length} weeks on program
      </p>
    </CardContent>
  </Card>

  {/* 🟦 Card 3 - Next Shipment */}
  <Card>
    <CardContent className="p-4">
      <p className="text-muted-foreground">Next Shipment</p>
      <h2 className="text-2xl font-bold">
        {new Date(nextShipmentDate).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </h2>
      <p className="text-sm text-muted-foreground">
        Status:{" "}
        {
          shipments.find((s) => s.status === "pending")?.status ??
          "N/A"
        }
        {" • "}
        Dosage:{" "}
        {
          shipments.find((s) => s.status === "pending")?.dosage ??
          "N/A"
        }
      </p>
    </CardContent>
  </Card>
</div>


      {/* ✅ Weight Chart */}
      <div>
        <h2 className="text-xl font-semibold mb-2">📈 Weight Progress Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weightHistory}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis unit="kg" />
            <Tooltip />
            <Line type="monotone" dataKey="weight" stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ✅ Shipments Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">🚚 Medication Shipments</h2>
        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Date</th>
                <th className="p-2">Medication</th>
                <th className="p-2">Dosage</th>
                <th className="p-2">Status</th>
                <th className="p-2">Tracking</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((s) => (
                <tr key={s.id} className="border-t">
                  <td className="p-2">{s.date}</td>
                  <td className="p-2">{s.medication}</td>
                  <td className="p-2">{s.dosage}</td>
                  <td
                    className={`p-2 font-semibold ${
                      s.status === "pending"
                        ? "text-yellow-500"
                        : s.status === "shipped"
                        ? "text-blue-600"
                        : "text-green-600"
                    }`}
                  >
                    {s.status}
                  </td>
                  <td className="p-2">{s.trackingNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ Next Shipment */}
      <div>
        <h2 className="text-md font-semibold mt-4 text-muted-foreground">
          📦 Next Shipment Expected On:{" "}
          <span className="text-black font-bold">{nextShipmentDate}</span>
        </h2>
      </div>
    </div>
  );
};

export default Dashboard;

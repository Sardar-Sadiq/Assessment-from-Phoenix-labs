import React from "react";
import { patientData } from "../data/patientData";
import { users } from "../data/users";

// Status badge colors/styles
const statusStyle = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
  shipped: "bg-blue-100 text-blue-800 border-blue-300",
  delivered: "bg-green-100 text-green-700 border-green-300",
};

// Helper: Capitalize status
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Main component
export default function Shipments({ Id }) {
  const patient = patientData.find((p) => p.Id === Id);

  if (!patient) {
    return (
      <div className="p-4 text-red-500 text-center">Patient not found.</div>
    );
  }

  // Data
  const upcoming = patient.shipments.filter(
    (s) => s.status === "pending" || s.status === "shipped"
  );
  const previous = patient.shipments.filter((s) => s.status === "delivered");

  return (
    <div className=" mt-10 space-y-10 w-full">
      {/* --- UPCOMING --- */}
      <section className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Upcoming Shipments
        </h2>
        {upcoming.length === 0 ? (
          <p className="text-gray-400 text-sm">No upcoming shipments.</p>
        ) : (
          <ul className="space-y-4">
            {upcoming.map((s, idx) => (
              <li
                key={s.id}
                className="flex flex-col gap-2 border-b py-2 last:border-b-0 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-700">
                      {s.medication}
                    </span>
                    <span className="rounded text-xs bg-gray-100 px-2 py-0.5 font-medium text-gray-500">
                      {s.dosage}
                    </span>
                  </div>
                  <div className="text-gray-500 text-sm">
                    Expected: <span className="font-medium">{s.date}</span>{" "}
                    &middot; Tracking:{" "}
                    <span className="font-mono text-xs">
                      {s.trackingNumber}
                    </span>
                  </div>
                  {/* Bottom status lines for 1st and 2nd order only */}
                  {idx === 0 && s.status === "pending" && (
                    <div className="pt-1 text-[13px] text-amber-700 font-medium">
                      Your shipment is being prepared.
                    </div>
                  )}
                  {idx === 1 && s.status === "shipped" && (
                    <div className="pt-1 text-[13px] text-blue-600 font-medium">
                      Your shipment is on the way!
                    </div>
                  )}
                </div>
                <span
                  className={`self-start md:self-center px-3 py-1 border rounded-full text-xs font-semibold ${statusStyle[s.status] || "bg-gray-100 text-gray-700 border-gray-300"}`}
                >
                  {capitalize(s.status)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* --- PREVIOUS --- */}
      <section className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Previous Shipments
        </h2>
        {previous.length === 0 ? (
          <p className="text-gray-400 text-sm">No previous shipments.</p>
        ) : (
          <ul className="space-y-4">
            {previous.map((s) => (
              <li
                key={s.id}
                className="flex flex-col gap-2 border-b last:border-b-0 py-2 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-700">
                      {s.medication}
                    </span>
                    <span className="rounded text-xs bg-gray-100 px-2 py-0.5 font-medium text-gray-500">
                      {s.dosage}
                    </span>
                  </div>
                  <div className="text-gray-500 text-sm">
                    Delivered: <span className="font-medium">{s.date}</span>{" "}
                    &middot; Tracking:{" "}
                    <span className="font-mono text-xs">
                      {s.trackingNumber}
                    </span>
                  </div>
                </div>
                <span
                  className={`self-start md:self-center px-3 py-1 border rounded-full text-xs font-semibold ${statusStyle[s.status] || "bg-gray-100 text-gray-700 border-gray-300"}`}
                >
                  {capitalize(s.status)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

// Usage: <Shipments userId={1} />

import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [friends, setFriends] = useState([]);

  const statusStyles = {
    overdue: "bg-red-100 text-red-700",
    "almost due": "bg-amber-100 text-amber-700",
    "on-track": "bg-emerald-100 text-emerald-700",
  };

useEffect(() => {
  fetch("/friends.json")
    .then((res) => res.json())
    .then((data) => setFriends(data));
}, []);


  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
      
      {/* Banner */}
      <div className="text-center mb-12 pb-8">
        <h1 className="text-4xl font-bold mb-3 text-slate-900">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="bg-[#244D3F] text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto hover:bg-[#1F2937] transition">
          + Add a Friend
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 pb-8">
        <div className="p-6 bg-slate-50 rounded-3xl text-center shadow-sm">
          <div className="text-4xl font-bold text-slate-900 mb-2">10</div>
          <div className="text-sm text-gray-600">Total Friends</div>
        </div>
        <div className="p-6 bg-slate-50 rounded-3xl text-center shadow-sm">
          <div className="text-4xl font-bold text-slate-900 mb-2">3</div>
          <div className="text-sm text-gray-600">On Track</div>
        </div>
        <div className="p-6 bg-slate-50 rounded-3xl text-center shadow-sm">
          <div className="text-4xl font-bold text-slate-900 mb-2">6</div>
          <div className="text-sm text-gray-600">Need Attention</div>
        </div>
        <div className="p-6 bg-slate-50 rounded-3xl text-center shadow-sm">
          <div className="text-4xl font-bold text-slate-900 mb-2">12</div>
          <div className="text-sm text-gray-600">Interactions This Month</div>
        </div>
      </div>

      {/* Friends List */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <button
              type="button"
              key={friend.id}
              onClick={() => navigate(`/friend/${friend.id}`)}
              className="group block rounded-[32px] border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-col items-center gap-3">
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="h-24 w-24 rounded-full object-cover border border-slate-200"
                />

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {friend.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {friend.days_since_contact}d ago
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {friend.tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="text-[11px] uppercase tracking-[0.18em] bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex justify-center">
                <span className={`text-[11px] uppercase tracking-[0.18em] px-3 py-1 rounded-full ${statusStyles[friend.status] ?? "bg-slate-100 text-slate-700"}`}>
                  {friend.status.replace("-", " ")}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      </div>
    </div>

    
  );


}


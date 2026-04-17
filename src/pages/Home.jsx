import React from "react";
import { useEffect, useState } from "react";

export default function Home() {

  const [friends, setFriends] = useState([]);

useEffect(() => {
  fetch("/src/data/friends.json")
    .then((res) => res.json())
    .then((data) => setFriends(data));
}, []);


  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
      
      {/* Banner */}
      <div className="text-center mb-12 pb-8 border-b">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 pb-8 border-b">
        <div className="p-6 bg-slate-50 rounded-lg text-center">
          <div className="text-4xl font-bold text-slate-900 mb-2">10</div>
          <div className="text-sm text-gray-600">Total Friends</div>
        </div>
        <div className="p-6 bg-slate-50 rounded-lg text-center">
          <div className="text-4xl font-bold text-slate-900 mb-2">3</div>
          <div className="text-sm text-gray-600">On Track</div>
        </div>
        <div className="p-6 bg-slate-50 rounded-lg text-center">
          <div className="text-4xl font-bold text-slate-900 mb-2">6</div>
          <div className="text-sm text-gray-600">Need Attention</div>
        </div>
        <div className="p-6 bg-slate-50 rounded-lg text-center">
          <div className="text-4xl font-bold text-slate-900 mb-2">12</div>
          <div className="text-sm text-gray-600">Interactions This Month</div>
        </div>
      </div>

      
      </div>
    </div>

    
  );


}


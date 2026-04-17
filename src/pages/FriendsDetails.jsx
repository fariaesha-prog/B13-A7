import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiPhone, FiMessageCircle, FiVideo } from "react-icons/fi";

export default function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  const statusStyles = {
    overdue: "bg-red-100 text-red-700",
    "almost due": "bg-amber-100 text-amber-700",
    "on-track": "bg-emerald-100 text-emerald-700",
  };

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriend(data.find((f) => f.id === parseInt(id)));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-6">Loading friend...</div>;
  if (!friend) return <div className="p-6">Friend not found</div>;

  const categoryTag = friend.tags[0] || "Friend";

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 xl:grid-cols-[380px_minmax(0,1fr)] gap-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center text-center gap-4">
            <img
              src={friend.picture}
              alt={friend.name}
              className="h-28 w-28 rounded-full object-cover border border-slate-200"
            />
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">{friend.name}</h1>
              <div className="mt-2 flex items-center justify-center gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${statusStyles[friend.status] ?? "bg-slate-100 text-slate-700"}`}>
                  {friend.status.replace("-", " ")}
                </span>
                <span className="rounded-full bg-emerald-100 text-emerald-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                  {categoryTag}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-center">
            <p className="text-slate-500 italic">“{friend.bio}”</p>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Preferred: email</p>
          </div>

          <div className="mt-8 space-y-3">
            <button className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-100">
              Snooze 2 Weeks
            </button>
            <button className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-100">
              Archive
            </button>
            <button className="w-full rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-left text-sm font-semibold text-red-700 hover:bg-red-100">
              Delete
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-none border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="mt-3 text-3xl font-semibold text-slate-900">{friend.days_since_contact}</p>
              <p className="text-sm text-slate-500">Days Since Contact</p>
            </div>
            <div className="rounded-none border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="mt-3 text-3xl font-semibold text-slate-900">{friend.goal}</p>
              <p className="text-sm text-slate-500">Goal (Days)</p>
            </div>
            <div className="rounded-none border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="mt-3 text-3xl font-semibold text-slate-900">{friend.next_due_date}</p>
              <p className="text-sm text-slate-500">Next Due</p>
            </div>
          </div>

          <div className="rounded-none border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-700">Relationship Goal</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Connect every {friend.goal} days</p>
              </div>
              <button className="rounded-none border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                Edit
              </button>
            </div>
          </div>

          <div className="rounded-none border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-700">Quick Check-In</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <button className="flex flex-col items-center justify-center gap-2 rounded-none border border-slate-200 bg-white px-4 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-50">
                <FiPhone className="h-5 w-5 text-slate-900" />
                Call
              </button>
              <button className="flex flex-col items-center justify-center gap-2 rounded-none border border-slate-200 bg-white px-4 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-50">
                <FiMessageCircle className="h-5 w-5 text-slate-900" />
                Text
              </button>
              <button className="flex flex-col items-center justify-center gap-2 rounded-none border border-slate-200 bg-white px-4 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-50">
                <FiVideo className="h-5 w-5 text-slate-900" />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useMemo, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { useTimeline } from "../context/TimelineContext";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

const icons = {
  Call: { type: "image", src: callIcon },
  Text: { type: "image", src: textIcon },
  Video: { type: "image", src: videoIcon },
  Meetup: { type: "icon", component: FiMapPin },
};

export default function Timeline() {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("all");

  const filteredTimeline = useMemo(() => {
    if (filter === "all") return timeline;
    return timeline.filter(item => item.type === filter);
  }, [timeline, filter]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Timeline</h1>

      {/* Filter */}
      <select
        className="mb-6 p-2 border rounded-lg text-sm"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Filter timeline</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
        <option value="Meetup">Meetup</option>
      </select>

      {/* Timeline List */}
      <div className="space-y-4">
        {filteredTimeline.map((item) => {
          const iconData = icons[item.type];

          return (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100">
                {iconData?.type === "image" ? (
                  <img
                    src={iconData.src}
                    alt={item.type}
                    className="w-5 h-5"
                  />
                ) : (
                  <iconData.component className="h-5 w-5 text-gray-600" />
                )}
              </div>

              {/* Text */}
              <div>
                <p className="text-sm font-medium">
                  <span className="text-emerald-700">{item.type}</span>
                  <span className="text-slate-900 font-semibold">
                    {' '}with {item.friendName ?? item.title}
                  </span>
                </p>
                <p className="text-xs text-gray-500">
                  {item.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
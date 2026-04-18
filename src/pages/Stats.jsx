import { useTimeline } from "../context/TimelineContext";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#8b5cf6", "#1f2937", "#22c55e"];

export default function Stats() {
  const { timeline } = useTimeline();

  const counts = { Text: 0, Call: 0, Video: 0 };

  timeline.forEach((item) => {
    if (counts[item.type] !== undefined) {
      counts[item.type]++;
    }
  });

  const data = Object.entries(counts).map(([name, value]) => ({ name, value }));

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
        {/* Header */}
        <h1 className="text-3xl font-bold text-slate-900 mb-1">Friendship Analytics</h1>
        <div className="border-t border-dashed border-slate-300 my-4" />

        {/* Subtitle */}
        <p className="text-sm text-slate-500 mb-8">By Interaction Type</p>

        {/* Chart */}
        <div className="flex flex-col items-center gap-4">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={130}
              paddingAngle={4}
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>

          {/* Legend */}
          <div className="flex items-center gap-6">
            {data.map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-1.5">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-sm text-slate-600">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
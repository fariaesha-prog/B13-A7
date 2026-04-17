import { createContext, useContext, useEffect, useState } from "react";

const TimelineContext = createContext(null);

export function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("keenKeeperTimeline") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("keenKeeperTimeline", JSON.stringify(timeline));
  }, [timeline]);

  const addEntry = (entry) => {
    setTimeline((current) => [entry, ...current]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used inside a TimelineProvider");
  }
  return context;
}

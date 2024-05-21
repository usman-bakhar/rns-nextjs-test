// components/Timer.tsx
"use client";

import { Clock9 } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type TimerProps = {
  initialTimeLeft: number;
};

const Timer: React.FC<TimerProps> = ({ initialTimeLeft }) => {
  // will get user session from session
  let isUser = false;

  const router = useRouter();

  const [timeLeft, setTimeLeft] = useState<number>(initialTimeLeft);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  };

  const handleClick = () => {
    if (!isUser) {
      router.push("/login");
    }
  };

  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center gap-2 text-sm font-semibold text-white-100">
        <p>Next Draw:</p>
        <p>
          <Clock9 />
        </p>
        <p>{formatTime(timeLeft)}</p>
      </div>

      <div>
        <button
          className="bg-white-100 text-cosmic-200 font-medium px-7 py-1 rounded"
          onClick={handleClick}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Timer;

import React from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import dynamic from "next/dynamic";
import { LotteryData } from "@/types";

const Timer = dynamic(() => import("../components/timer"), { ssr: false });
const PoolStatus = dynamic(() => import("../components/pool-status"), {
  ssr: false,
});

type AtomicProps = {
  data: LotteryData;
};

const Atomic: React.FC<AtomicProps> = ({ data }) => {
  return (
    <div className="bg-atomic-100 rounded-md py-4">
      <div className="flex justify-between items-center px-4">
        <div className="flex gap-3">
          <div>
            <Image
              src="/logo-atomic.png"
              width={94}
              height={14}
              alt="logo atomic"
            />
          </div>
          <div>
            <p className="text-sm">No. {data.data.roundNumber}</p>
          </div>
        </div>
        <div>
          <ZoomIn size={16} color="#00AEB1" />
        </div>
      </div>

      <div className="mt-6 flex gap-2 px-4">
        {data.data.previousWinningticket.map((pwt: number, index: number) => (
          <span
            key={index}
            className="text-white-100 bg-gray-100 py-1 px-3 rounded-full"
          >
            {pwt}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mt-3 px-4">
        <p className="text-xs">Winning Pot</p>
        <p className="text-lg font-bold text-gray-300">
          {data.data.winningPot}
          <span className="text-xs font-light">LUCKI</span>
        </p>
      </div>

      <div className="flex justify-between bg-atomic-200 py-2 px-4">
        <Timer initialTimeLeft={data.data.nextDraw} />
      </div>
      <PoolStatus
        poolAmounts={data.data.poolAmount}
        ticketCount={data.data.ticketCount}
      />
    </div>
  );
};

export default Atomic;

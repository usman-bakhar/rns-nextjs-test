// "use client";

// import React, { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import Image from "next/image";

// import Bitcoin from "/public/Bitcoin_16.png";
// import Doge from "/public/Bitcoin_16.png";
// import Eth from "/public/Bitcoin_16.png";
// import Inae from "/public/Bitcoin_16.png";
// import Sol from "/public/Bitcoin_16.png";
// import Tron from "/public/Bitcoin_16.png";
// import XRP from "/public/Bitcoin_16.png";

// type PoolAmount = {
//   poolId: string;
//   lotteryId: string;
//   coinId: string;
//   coinSymbol: string;
//   coinName: string;
//   poolAmount: string;
// };

// type PoolStatusProps = {
//   poolAmounts: PoolAmount[];
//   ticketCount: number;
// };

// const PoolStatus: React.FC<PoolStatusProps> = ({
//   poolAmounts,
//   ticketCount,
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   return (
//     <div className="mt-4 bg-gray-200 p-4 rounded-md">
//       <div
//         className="flex justify-center items-center cursor-pointer"
//         onClick={toggleExpand}
//       >
//         <p>{!isExpanded && <ChevronDown />}</p>
//         <p className="text-lg font-semibold">Current Pool Status</p>
//       </div>
//       {isExpanded && (
//         <div className="mt-2">
//           <p className="mb-2">
//             The number of tickets as count of LUCKI for all lotteries
//             collectively: {ticketCount}
//           </p>
//           <div>
//             {poolAmounts.map((pool) => (
//               <div key={pool.poolId} className="mb-2">
//                 <p className="text-sm">
//                   <Image src={Bitcoin} width={20} height={20} alt="icon" />{" "}
//                   {pool.coinName} ({pool.coinSymbol}): {pool.poolAmount}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       <p onClick={toggleExpand}>
//         {isExpanded && (
//           <span className="flex justify-center">
//             <ChevronUp /> close
//           </span>
//         )}
//       </p>
//     </div>
//   );
// };

// export default PoolStatus;

// components/PoolStatus.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

import Bitcoin from "/public/Bitcoin_16.png";
import Doge from "/public/Doge_16.png";
import Eth from "/public/Eth_16.png";
import Inae from "/public/Inae_16.png";
import Sol from "/public/Solana_16.png";
import Tron from "/public/Tron_16.png";
import XRP from "/public/XRP_16.png";

type PoolAmount = {
  poolId: string;
  lotteryId: string;
  coinId: string;
  coinSymbol: string;
  coinName: string;
  poolAmount: string;
};

type PoolStatusProps = {
  poolAmounts: PoolAmount[];
  ticketCount: number;
};

// Mapping of coin symbols to their respective icons
const coinIcons: { [key: string]: any } = {
  BTC: Bitcoin,
  DOGE: Doge,
  ETH: Eth,
  INAE: Inae,
  SOL: Sol,
  TRX: Tron,
  XRP: XRP,
};

const PoolStatus: React.FC<PoolStatusProps> = ({
  poolAmounts,
  ticketCount,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="mt-4 bg-gray-200 px-4 rounded-md">
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={toggleExpand}
      >
        <p>{!isExpanded && <ChevronUp />}</p>
        <p className="text-lg font-semibold">Current Pool Status</p>
        {/* <p>{isExpanded ? <ChevronUp /> : <ChevronDown />}</p> */}
      </div>
      {isExpanded && (
        <div className="mt-2">
          <div>
            {poolAmounts?.map((pool) => (
              <div
                key={pool.poolId}
                className="mb-2 flex justify-between items-center"
              >
                <Image
                  src={coinIcons[pool.coinSymbol]}
                  width={20}
                  height={20}
                  quality={100}
                  alt={`${pool.coinName} icon`}
                />
                <p className="text-sm ml-2">
                  {pool.poolAmount} {pool.coinName} ({pool.coinSymbol})
                </p>
              </div>
            ))}
          </div>
          <p className="mb-2 text-center mt-2">{ticketCount} LUCKI</p>
        </div>
      )}
      <p className=" cursor-pointer flex justify-center" onClick={toggleExpand}>
        {isExpanded && (
          <>
            <ChevronDown /> Close
          </>
        )}
      </p>
    </div>
  );
};

export default PoolStatus;

import { getLotteryData } from "@/lib/data";
import { LotteryData } from "@/types";

import Cosmic from "./cosmic";
import Classic from "./classic";
import Atomic from "./atomic";

const LotteryTemplate = async () => {
  const cosmicdata: LotteryData = await getLotteryData("COSMIC");
  const classicData: LotteryData = await getLotteryData("CLASSIC");
  const atomicData: LotteryData = await getLotteryData("ATOMIC");

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg font-bold">Latest Results</h1>
      <Cosmic data={cosmicdata} />
      <Classic data={classicData} />
      <Atomic data={atomicData} />
    </div>
  );
};

export default LotteryTemplate;

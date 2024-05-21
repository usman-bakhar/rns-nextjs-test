export type PoolAmount = {
  poolId: string;
  lotteryId: string;
  coinId: string;
  coinSymbol: string;
  coinName: string;
  poolAmount: string;
  createdAt: string;
};

export type LotteryData = {
  result: boolean;
  code: number;
  message: string;
  data: {
    lotteryName: string;
    lotteryPrice: number;
    roundNumber: number;
    previousWinningticket: number[];
    poolAmount: PoolAmount[];
    winningPot: number;
    currentPool: number;
    nextDraw: number;
    ticketCount: number;
    prevTicketCount: number;
    showPoolDetail: boolean;
  };
};

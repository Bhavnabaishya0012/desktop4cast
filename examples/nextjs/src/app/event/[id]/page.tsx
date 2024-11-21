'use client';

import { useParams } from 'next/navigation';
import {
  useGame,
  useActiveMarkets,
  useResolvedMarkets,
  useGameStatus,
  useBetsSummaryBySelection,
} from '@azuro-org/sdk';
import { type GameQuery, GameStatus } from '@azuro-org/toolkit';

import { GameInfo, GameMarkets } from '@/components';
import { useAccount } from 'wagmi';

// Type definitions
type GamePageProps = {};

// ResolvedMarkets Component
const ResolvedMarkets: React.FC<{ gameId: string; gameStatus: GameStatus }> = ({
  gameId,
  gameStatus,
}) => {
  const { address } = useAccount();
  const { groupedMarkets, loading } = useResolvedMarkets({ gameId });
  const { betsSummary } = useBetsSummaryBySelection({
    account: address!, // Fallback to an empty string if address is undefined
    gameId,
    gameStatus,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!groupedMarkets?.length) {
    return <div>No resolved markets available</div>;
  }

  return (
    <div className="mt-12">
      <GameMarkets markets={groupedMarkets} betsSummary={betsSummary} isResult />
    </div>
  );
};

// ActiveMarkets Component
const ActiveMarkets: React.FC<{ gameId: string; gameStatus: GameStatus }> = ({
  gameId,
  gameStatus,
}) => {
  const { loading, markets } = useActiveMarkets({
    gameId,
    gameStatus,
    livePollInterval: 10000,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!markets?.length) {
    return <div>No active markets available</div>;
  }

  return <GameMarkets markets={markets} />;
};

// Markets Component
const Markets: React.FC<{ gameId: string; gameStatus: GameStatus }> = ({
  gameId,
  gameStatus,
}) => {
  if (gameStatus === GameStatus.Resolved) {
    return <ResolvedMarkets gameId={gameId} gameStatus={gameStatus} />;
  }

  return <ActiveMarkets gameId={gameId} gameStatus={gameStatus} />;
};

// Content Component
const Content: React.FC<{ game: GameQuery['games'][0]; isGameInLive: boolean }> = ({
  game,
  isGameInLive,
}) => {
  const { status: gameStatus } = useGameStatus({
    startsAt: +game.startsAt,
    graphStatus: game.status,
    isGameExistInLive: isGameInLive,
  });

  return (
    <>
      <GameInfo game={game} />
      <Markets gameId={game.gameId} gameStatus={gameStatus} />
    </>
  );
};

// Default Export Component for Next.js
const Page: React.FC<GamePageProps> = () => {
  const params = useParams<{ id: string }>();

  if (!params?.id) {
    return <div>Invalid game ID</div>;
  }

  const { loading, game, isGameInLive } = useGame({
    gameId: params.id,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!game) {
    return <div>Game info not found</div>;
  }

  return <Content game={game} isGameInLive={isGameInLive} />;
};

export default Page;

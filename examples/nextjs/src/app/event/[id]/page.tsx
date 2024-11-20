'use client';
import { useParams } from 'next/navigation';
import { useGame, useActiveMarkets, useResolvedMarkets, useGameStatus, useBetsSummaryBySelection } from '@azuro-org/sdk';
import { type GameQuery, GameStatus } from '@azuro-org/toolkit';

import { GameInfo, GameMarkets } from '@/components';
import { useAccount } from 'wagmi';

type MarketsProps = {
  gameId: string;
  gameStatus: GameStatus;
  searchQuery?: string;  // Added search query
};

const ResolvedMarkets: React.FC<MarketsProps> = ({ gameId, gameStatus, searchQuery }) => {
  const { address } = useAccount();
  const { groupedMarkets, loading } = useResolvedMarkets({ gameId });
  const { betsSummary } = useBetsSummaryBySelection({
    account: address!,
    gameId,
    gameStatus,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!groupedMarkets?.length) {
    return <div>Empty</div>;
  }

  // Filter markets by search query
  const filteredMarkets = groupedMarkets.filter((market) =>
    market.name.toLowerCase().includes(searchQuery?.toLowerCase() || '')
  );

  return (
    <div className="mt-12">
      <GameMarkets markets={filteredMarkets} betsSummary={betsSummary} isResult />
    </div>
  );
};

const ActiveMarkets: React.FC<MarketsProps> = ({ gameId, gameStatus, searchQuery }) => {
  const { loading, markets } = useActiveMarkets({
    gameId,
    gameStatus,
    livePollInterval: 10000,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!markets) {
    return <div>Empty</div>;
  }

  // Filter markets by search query
  const filteredMarkets = markets.filter((market) =>
    market.name.toLowerCase().includes(searchQuery?.toLowerCase() || '')
  );

  return <GameMarkets markets={filteredMarkets} />;
};

const Markets: React.FC<MarketsProps> = (props) => {
  const { gameId, gameStatus, searchQuery } = props;

  if (gameStatus === GameStatus.Resolved) {
    return <ResolvedMarkets {...props} searchQuery={searchQuery} />;
  }

  return (
    <div className="mt-12">
      <ActiveMarkets {...props} searchQuery={searchQuery} />
    </div>
  );
};

type ContentProps = {
  game: GameQuery['games'][0];
  isGameInLive: boolean;
  searchQuery?: string;
};

const Content: React.FC<ContentProps> = ({ game, isGameInLive, searchQuery }) => {
  const { status: gameStatus } = useGameStatus({
    startsAt: +game.startsAt,
    graphStatus: game.status,
    isGameExistInLive: isGameInLive,
  });

  return (
    <>
      <GameInfo game={game} />
      <Markets gameId={game.gameId} gameStatus={gameStatus} searchQuery={searchQuery} />
    </>
  );
};

export default function Game({ searchQuery }: { searchQuery: string }) {
  const params = useParams();

  const { loading, game, isGameInLive } = useGame({
    gameId: params.id as string,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!game) {
    return <div>Game info not found</div>;
  }

  return <Content game={game} isGameInLive={isGameInLive} searchQuery={searchQuery} />;
}

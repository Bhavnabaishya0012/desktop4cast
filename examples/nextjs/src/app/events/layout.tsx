'use client';
import { SportsNavigation, Sport } from '@/components';
import { useParams } from 'next/navigation';
import { useSports, type UseSportsProps, useLive } from '@azuro-org/sdk';
import { Game_OrderBy, OrderDirection } from '@azuro-org/toolkit';

const useData = () => {
  const params = useParams();
  const isTopPage = params && params.sport === 'top';
  const { isLive } = useLive();

  // Safely type-cast params fields to `string | undefined` for compatibility
  const sportSlug: string = (params?.sport as string) || '';
  const countrySlug: string = (params?.country as string) || '';
  const leagueSlug: string = (params?.league as string) || '';

  const props: UseSportsProps = isTopPage
    ? {
        gameOrderBy: Game_OrderBy.Turnover,
        filter: {
          limit: 10,
        },
        isLive,
      }
    : {
        gameOrderBy: Game_OrderBy.StartsAt,
        orderDir: OrderDirection.Asc,
        filter: {
          sportSlug,
          countrySlug,
          leagueSlug,
        },
        isLive,
      };

  const { loading, sports } = useSports(props);

  return {
    sports,
    loading,
  };
};

export default function EventsLayout() {
  const { loading, sports } = useData();

  return (
    <>
      <SportsNavigation />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {sports.map((sport) => (
            <Sport key={sport.slug} sport={sport} />
          ))}
        </div>
      )}
    </>
  );
}

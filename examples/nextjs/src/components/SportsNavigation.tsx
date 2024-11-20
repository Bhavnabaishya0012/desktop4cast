'use client'
import { useSportsNavigation, useLive } from '@azuro-org/sdk'
// Removed import of ActiveLink because we no longer need it.

export function SportsNavigation() {
  const { isLive } = useLive()
  const { loading, sports } = useSportsNavigation({
    withGameCount: true,
    isLive,
  })

  if (loading) {
    return <div>Loading...</div>
  }

  // Removed the top button rendering code completely to avoid showing them outside the sidebar
  return null;
}

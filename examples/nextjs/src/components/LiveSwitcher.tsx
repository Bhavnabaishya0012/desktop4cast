'use client'
import { useLive } from "@azuro-org/sdk"

export function LiveSwitcher() {
  const { isLive, changeLive } = useLive()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeLive(event.target.checked)
  }

  return (
    <div className="flex items-left mr-4 mt-1 live-checkbox py-4"> {/* Added py-2 for padding */}
      <label className="mr-1" htmlFor="live">LIVE EVENTS</label>
      <input id="live" type="checkbox" checked={isLive} onChange={handleChange} />
    </div>
  )
}

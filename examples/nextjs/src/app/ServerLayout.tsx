import { cookies } from 'next/headers';
import ClientLayout from './ClientLayout'; // This will be your client-side layout

export default function ServerLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies();
    const initialChainId = cookieStore.get('appChainId')?.value;
    const initialLiveState = JSON.parse(cookieStore.get('live')?.value || 'false');

    return (
    <html lang="en">
        <body>
        <ClientLayout initialChainId={initialChainId} initialLiveState={initialLiveState}>
            {children}
        </ClientLayout>
        </body>
    </html>
    );
}

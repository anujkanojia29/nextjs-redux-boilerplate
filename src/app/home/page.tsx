"use client"

import AuthUpdater from "@/components/auth/auth-updater";
import AuthViewer from "@/components/auth/auth-viewer";
import ReduxProvider from "@/store/providers/redux-provider";

export default function Home() {
  return (
    <ReduxProvider>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <AuthViewer/>
        <AuthUpdater/>
        </main>
    </ReduxProvider>
  );
}

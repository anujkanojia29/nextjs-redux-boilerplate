"use client"

import AuthUpdater from "@/components/auth/auth-updater";
import AuthViewer from "@/components/auth/auth-viewer";
import { logger, withLogger } from "@/helpers/logger";
import ReduxProvider from "@/store/providers/redux-provider";
import { useEffect } from "react";

export default function Home() {
  function exampleFunction() {
    logger('exampleFunction', 'This is a log message', { key: 'value' });
    // Your function logic here...
    return "Example function executed";
  }
  useEffect(() => {
    const temp = withLogger(exampleFunction);
    temp();
  }, [])
  
  return (
    <ReduxProvider>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <AuthViewer/>
        <AuthUpdater/>
        </main>
    </ReduxProvider>
  );
}

// import '@/styles/globals.css'
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import TeamsProvider from "../Context/TeamProvider";
import NhlThemeProvider from "../Context/Theme/ThemeProvider";
import Sidebar from "../components/Sidebar/Sidebar";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <TeamsProvider>
        <NhlThemeProvider>
          <div>
            <Sidebar logout={() => {}} />
            <Component {...pageProps} />
          </div>
        </NhlThemeProvider>
      </TeamsProvider>
    </QueryClientProvider>
  );
}

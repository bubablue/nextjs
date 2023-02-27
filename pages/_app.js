// import '@/styles/globals.css'
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import TeamsProvider, { useTeams } from "../Context/TeamProvider";
import NhlThemeProvider from "../Context/Theme/ThemeProvider";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const {logout} = useTeams()
  return (
    <QueryClientProvider client={queryClient}>
      <TeamsProvider>
        <NhlThemeProvider>
          <div>
            <Sidebar logout={logout} />
            <Component {...pageProps} />
          </div>
        </NhlThemeProvider>
      </TeamsProvider>
    </QueryClientProvider>
  );
}

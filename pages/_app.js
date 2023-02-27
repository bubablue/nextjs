// import '@/styles/globals.css'
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import TeamsProvider from "../Context/TeamProvider";
import NhlThemeProvider from "../Context/Theme/ThemeProvider";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <TeamsProvider>
        <NhlThemeProvider>
          <Component {...pageProps} />
        </NhlThemeProvider>
      </TeamsProvider>
    </QueryClientProvider>
  );
}

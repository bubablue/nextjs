// import '@/styles/globals.css'
import axios from "axios";
import { useRouter } from 'next/router';
import React, { useEffect } from "react";
import TeamsProvider from "../Context/TeamProvider";
import NhlThemeProvider from "../Context/Theme/ThemeProvider";
import Dashboard from "./dashboard";
import Sidebar from "../Components/Sidebar/Sidebar";
import UserSidebar from "../Components/Sidebar/UserSidebar/UserSidebar";

export default function App({ Component, pageProps }) {

  return (
    <TeamsProvider>
      <NhlThemeProvider>
        <Component {...pageProps} />
      </NhlThemeProvider>
    </TeamsProvider>
  );
}

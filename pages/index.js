import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from '@/styles/Home.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>NHL Teams</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <main>
          <h1 className="title">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
        <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/dashboard">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
    </ul>
      </div>
    </>
  );
}

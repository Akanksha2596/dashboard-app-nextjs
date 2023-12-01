// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
import { Global } from "@/styles/Global";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { ReactElement } from "react";
export const myFont = localFont({src: "../../public/strawford-regular-webfont.woff2",
});


import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import MainContainer from "@/components/MainContainer";

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      {/* <nav
        style={{
          padding: "25px 25px",
          borderBottom: "1px solid grey",
          textAlign: "center",
        }}
      >
        Navbar
      </nav>
      {children}
      <footer
        style={{
          padding: "25px 25px",
          borderTop: "1px solid grey",
          textAlign: "center",
        }}
      >
        Footer
      </footer> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
          padding:"0px 33px",
        }}
      >
        <Link href="/">
          <SlArrowLeft />
        </Link>
        <h1>My Dashboard</h1>
        <Link href="/">
          <IoMdClose />
        </Link>
      </div>
    </>
  );
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={myFont.className}>
        <Layout>
          <MainContainer />
        </Layout>

        <Global />
        <Component {...pageProps} />
      </main>
    </>
  );
}

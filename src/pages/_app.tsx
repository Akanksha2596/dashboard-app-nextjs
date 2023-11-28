// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
// import { Global } from "@/styles/Global";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

export const myFont = localFont({
  src: "../../public/strawford-regular-webfont.woff2",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      {/* <Global /> */}
      <Component {...pageProps} />
    </main>
  );
}

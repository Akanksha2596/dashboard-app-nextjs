// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
import { Global } from "@/styles/Global";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const myFont = localFont({
  src: "../../public/strawford-regular-webfont.woff2",
});

import MainContainer from "@/components/MainContainer";
import "@/styles/globals.css";
import MobileHeader from "@/components/MobileHeader";

export default function App({ Component, pageProps }: AppProps) {
  console.log("pageProps", pageProps);
  // console.log("Component", Component);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [shouldRenderLayout, setShouldRenderLayout] = useState(false);

  useEffect(() => {
    setShouldRenderLayout(isMobile);
  }, [isMobile]);

  return (
    <main className={myFont.className}>
      <Global />
      {shouldRenderLayout ? (
        <MobileHeader>{<Component {...pageProps} />}</MobileHeader>
      ) : (
        <Component {...pageProps} />
      )}
    </main>
  );
}

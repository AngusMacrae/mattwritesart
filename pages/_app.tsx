import { useEffect } from "react";
import { useRouter } from "next/router";

import "../src/common/styles/styles.scss";

import * as ga from '../src/lib/ga'

import FilterProvider from "../src/common/contexts/FilterContext";

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <FilterProvider>
      <Component {...pageProps} />
    </FilterProvider>
  );
}

export default App;

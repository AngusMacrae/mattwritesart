import FilterProvider from "../context/FilterContext";

function App({ Component, pageProps }) {
  return (
    <FilterProvider>
      <Component {...pageProps} />
    </FilterProvider>
  );
}

export default App;

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      hello
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

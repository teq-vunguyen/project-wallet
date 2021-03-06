import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import { store } from '@src/app/store';
import Layout from "@src/components/Layout";
import "@src/assets/scss/main.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>My Wallet</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <meta name="description" content="testing wallet app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};
export default App;

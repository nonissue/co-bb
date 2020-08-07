import NextApp from 'next/app';
import { Provider as BumbagProvider } from 'bumbag';
export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <BumbagProvider isSSR>
        <Component {...pageProps} />
      </BumbagProvider>
    );
  }
}

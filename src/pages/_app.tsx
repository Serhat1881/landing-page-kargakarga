import '@/styles/globals.css';
import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;

import type { AppProps } from 'next/app';

import '@styles/global.css';
import { useEffect, useState } from 'react';

import BaseSEO from '@components/BaseSEO';
import Navbar from '@components/Navbar';

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<'dark' | 'light' | 'system'>('system');
  useEffect(() => {
    if (!localStorage.theme) {
      return setTheme('dark');
    } else {
      setTheme(localStorage.theme);
    }
  });
  return (
    <div className={theme}>
      <Navbar />
      <Component {...pageProps} />;
    </div>
  );
};

export default App;

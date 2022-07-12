import type { AppProps } from 'next/app';

import '@styles/global.css';
import { useEffect, useState } from 'react';

import BaseSEO from '@components/BaseSEO';
import Navbar from '@components/Navbar';
import { Theme } from '@typings';
import { systemTheme } from 'utils/Tools';
import BaseLayout from '@components/BaseLayout';

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    if (localStorage.theme) {
      setTheme(localStorage.theme);
    } else {
      localStorage.setItem('theme', systemTheme());
      setTheme(systemTheme());
    }

    console.log(`Hello World`);
    console.log(theme);
  }, []);
  return (
    <div className={`${theme} flex flex-col`}>
      <BaseSEO />
      <BaseLayout setTheme={setTheme} theme={theme}>
        <Component {...pageProps} />
      </BaseLayout>
    </div>
  );
};

export default App;

import type { AppProps } from 'next/app';

import '@styles/global.css';
import { useEffect, useState } from 'react';

import BaseSEO from '@components/BaseSEO';
import Navbar from '@components/Navbar';
import { Theme } from '@typings';
import { systemTheme } from 'utils/Tools';

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
      <Navbar setTheme={setTheme} theme={theme} />
      <div className="dark:bg-black bg-slate-200 min-h-screen">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default App;

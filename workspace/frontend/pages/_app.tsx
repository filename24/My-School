import '../styles/globals.css';
import type { AppProps } from 'next/app';
import BaseLayout from '../components/BaseLayout';
import { useEffect, useState } from 'react';
import Navbar from '@components/Navbar';
import { Theme } from '@types';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    if (localStorage.theme) setTheme(localStorage.theme);
    else {
      localStorage.setItem('theme', 'dark');
    }
  });
  return (
    <div className={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </div>
  );
}

export default MyApp;

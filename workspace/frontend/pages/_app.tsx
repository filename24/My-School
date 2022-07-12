import '../styles/globals.css';
import type { AppProps } from 'next/app';
import BaseLayout from '../components/BaseLayout';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (localStorage.theme) setTheme(localStorage.theme);
    else {
      localStorage.setItem('theme', 'dark');
    }
  });
  return (
    <div className={theme}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </div>
  );
}

export default MyApp;

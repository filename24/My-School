import { Theme } from '@typings';
import { FC, ReactNode } from 'react';
import BaseContainer from './BaseContainer';
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
const BaseLayout: FC<LayoutProps> = ({ children, className, theme, setTheme }) => {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <BaseContainer className={className ?? ''}>{children}</BaseContainer>
      <Footer />
    </>
  );
};

export default BaseLayout;

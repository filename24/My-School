import { FC, ReactNode } from 'react';

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return <div className="h-full">{children}</div>;
};

interface BaseLayoutProps {
  children: ReactNode;
}
export default BaseLayout;

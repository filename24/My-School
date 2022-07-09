import { ReactNode } from 'react';

const BaseLayout: React.FC<LayoutProps> = ({ className, paddingTop = false, children }) => {
  return (
    <div className={`text-black dark:text-gray-100 ${paddingTop ? 'pt-20' : ''}`}>
      <div className={`container mx-auto px-4 ${className}`}>{children}</div>
    </div>
  );
};

interface LayoutProps {
  className?: string;
  paddingTop?: boolean;
  children: ReactNode;
}

export default BaseLayout;

import { Disclosure } from '@headlessui/react';
import { Theme } from '@types';
import { FC } from 'react';

const Navbar: FC<NavbarProps> = ({ theme, setTheme }) => {
  return (
    <Disclosure as="nav" className="bg-tHeader">
      {({ open }) => (
        <>
          <div></div>
        </>
      )}
    </Disclosure>
  );
};

interface NavbarProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
export default Navbar;

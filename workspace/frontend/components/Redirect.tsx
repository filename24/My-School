import { FC, useEffect } from 'react';

const Redirect: FC<RedirectProps> = ({ link, text = 'Redirecting... Else click here' }) => {
  useEffect(() => {
    window.location.href = link;
  });
  return (
    <div>
      <div className="container mx-auto px-4">
        <a href={link}>{text}</a>
      </div>
    </div>
  );
};

interface RedirectProps {
  link: string;
  text?: string;
}
export default Redirect;

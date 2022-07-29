import { GoogleSystem } from '@utils/Constants';
import { FC } from 'react';
import AdSense from 'react-adsense';

const AdBar: FC<AdBarProps> = ({ size = 'short' }) => {
  return (
    <div className="py-5 px-2">
      <div
        className={`z-0 mx-auto w-full text-center text-white ${
          process.env.NODE_ENV === 'production' ? '' : 'py-12 bg-sky-800'
        }`}
        style={size === 'short' ? { height: '90px' } : { height: '330px' }}
      >
        {process.env.NODE_ENV === 'production' ? (
          <AdSense.Google
            style={{
              display: 'inline-block',
              width: '100%',
              height: size === 'short' ? '90px' : '330px',
            }}
            client={GoogleSystem.AdClientID}
            slot={GoogleSystem.AdSlotID}
            format=""
          />
        ) : (
          'Ad place'
        )}
      </div>
    </div>
  );
};

declare global {
  interface Window {
    adsbygoogle: {
      loaded?: boolean;
      push(obj: unknown): void;
    };
  }
}

interface AdBarProps {
  size?: 'short' | 'tall';
}

export default AdBar;

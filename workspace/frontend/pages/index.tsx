import BaseLayout from '@components/BaseLayout';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <BaseLayout className="mt-24 text-center">
      Under Construction{' '}
      <span role="img" aria-label="roadwork sign">
        🚧
      </span>
    </BaseLayout>
  );
};

export default Home;

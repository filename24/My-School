import BaseLayout from '@components/BaseLayout';
import { NextPage } from 'next';
import Link from 'next/link';

const Offline: NextPage = () => {
  return (
    <div className="flex items-center h-screen select-none px-20">
      <BaseLayout>
        <h2 className="text-4xl font-semibold">hmm... Энэ юувэ?</h2>
        <p className="text-md mt-1">Таны интернэт тасалдсан байгаа тул та интернэтийн холбоог шалгана уу!</p>
      </BaseLayout>
    </div>
  );
};

export default Offline;

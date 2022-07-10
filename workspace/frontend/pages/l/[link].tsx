import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { type APIContent, EndPoint } from '../../typings';
import { useState } from 'react';
import Redirect from '@components/Redirect';

const LinkPage: NextPage = () => {
  const router = useRouter();
  const { link } = router.query;
  const [content, setContent] = useState<APIContent<string>>({
    code: 404,
    data: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  });

  fetch(`${EndPoint.API}/links/${link}`)
    .then(async (res) => {
      setContent((await res.json()) as APIContent);
    })
    .catch((e) => console.error(e));

  return <div>{content.code !== 404 && <Redirect link={content.data} />}</div>;
};

export default LinkPage;

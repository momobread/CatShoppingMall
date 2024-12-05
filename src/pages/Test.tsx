import { useState } from 'react';
import Modal from '../components/modal';

const Test = () => {
  const [isclick, setIsClick] = useState<boolean>(false);

  return (
    <>
      {isclick && <Modal />}
      <button onClick={() => setIsClick((v) => !v)}>Test</button>
    </>
  );
};
export default Test;

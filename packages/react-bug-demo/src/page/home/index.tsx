import { useRef } from 'react';

const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  return <div ref={ref}>{'memory-leak'}</div>;
};

export default Home;

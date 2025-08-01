import { Link } from 'react-router';

const Home = () => {
  return (
    <div>
      <header>{'这里放一些bug的例子'}</header>
      <Link to={'/ref-memory-leak'}>{'内存泄漏'}</Link>
    </div>
  );
};

export default Home;

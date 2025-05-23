import classNames from 'classnames';

const Home = () => {
  return (
    <div
      className={classNames('absolute', 'top-0', 'bottom-0', 'left-0', 'right-0', 'bg-amber-200', 'flex', 'flex-col')}
    >
      <div className={classNames('flex-1', 'bg-amber-700')}></div>
      <div className={classNames('bg-amber-950')}>114514</div>
    </div>
  );
};

export default Home;

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

const RefMemoryLeak = () => {
  const heavyObject = useRef(new Array(1000000)); // 创建一个大对象
  const [s, setS] = useState(true);
  useEffect(() => {
    // 每次组件挂载时都创建一个新的heavyObject
    // 但没有清理，导致内存泄漏
    heavyObject.current = new Array(1000000);
    // 模拟数据获取
    const fetchData = async () => {
      // 模拟API调用
      const data = await new Promise((resolve) => setTimeout(() => resolve('data'), 1));
      console.log(JSON.stringify(data));
    };
    fetchData();
    // 没有清理函数，所以每次挂载都会创建新对象
  }, [s]);
  return (
    <div>
      <div>{'组件内容'}</div>
      <Link to={'/'}>{'回到主页'}</Link>
      <button
        onClick={() => {
          setS(!s);
        }}
      >
        {'挤压内存'}
      </button>
    </div>
  );
};

export default RefMemoryLeak;

import Home from '@/page/home';
import RefMemoryLeak from '@/page/ref-memory-leak';
import { createBrowserRouter } from 'react-router';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/ref-memory-leak',
    Component: RefMemoryLeak
  }
]);

export default routes;

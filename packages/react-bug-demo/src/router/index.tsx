import Home from '@/page/home';
import { createBrowserRouter } from 'react-router';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: Home
  }
]);

export default routes;

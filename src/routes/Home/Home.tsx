import { Outlet } from 'react-router-dom';

import Directory from '../../components/Directory/Directory';

const Home = () => {
  return (
    <div>
      {/* Outlet is the nested Route, the order is important here  */}
      <Outlet />
      <Directory />
    </div>
  )
};

export default Home;
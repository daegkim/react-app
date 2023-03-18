import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideNav from './SideNav';

function Layout() {
  return (
    <div className="h-full w-full grid grid-rows-layout">
      <Header className="px-3" />
      <div className="grid grid-cols-layout w-full h-full">
        <SideNav className="px-3 h-full w-full" />
        <div className="h-full w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;

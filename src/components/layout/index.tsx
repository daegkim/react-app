import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideNav from './SideNav';

function Layout() {
  return (
    <div className="h-full w-full">
      <Header className="px-3 h-10 fixed" />
      <>
        <SideNav className="px-3 h-full fixed w-40 top-10" />
        <div className="relative top-10 left-40 h-[calc(100%-theme(space.10))] w-[calc(100%-theme(space.40))] overflow-auto">
          <Outlet />
        </div>
      </>
    </div>
  );
}

export default Layout;

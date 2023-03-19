import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideNav from './SideNav';

function Layout() {
  return (
    <div className="h-full w-full">
      <Header className="fixed h-10 w-full px-3" />
      <>
        <SideNav className="fixed top-10 h-full w-40 px-3 " />
        <div className="relative top-10 left-40 h-[calc(100%-theme(space.10))] w-[calc(100%-theme(space.40))] overflow-auto">
          <Outlet />
        </div>
      </>
    </div>
  );
}

export default Layout;

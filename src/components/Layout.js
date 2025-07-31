import { useLocation } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const showNav = location.pathname === "/about" || location.pathname === "/contact";

  return (
    <div>
      {showNav && <NavigationBar />}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

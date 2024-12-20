import { NavLink, Outlet } from "react-router";
import About from "../pages/About";


export default function AdminLayout() {
  return (
    <div>
      <h1>Jumpy Admin</h1>
      <NavLink to="/admin/about">About</NavLink>
      <NavLink to="/admin">Home</NavLink>
      <Outlet />
    </div>
  );
}



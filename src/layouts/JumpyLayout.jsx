import { NavLink, Outlet } from "react-router";
import About from "../pages/About";


export default function JumpyLayout() {
  return (
    <div>
      <h1>Jumpy</h1>
      <NavLink to="about">About</NavLink> | 
      <NavLink to="/">Home</NavLink> |
      <NavLink to="/admin">Admin</NavLink> |
      <Outlet />
    </div>
  );
}



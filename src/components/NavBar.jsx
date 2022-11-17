import { NavLink } from "react-router-dom";


export default function NavBar() {
  return (
    <nav className="bg-black px-2 py-4 flex items-center font-bold text-white">
      <img
        src="https://static.vecteezy.com/system/resources/previews/008/480/739/original/pizza-icon-simple-colored-pizza-icon-pizza-logo-free-png.png"
        className="h-16 w-16 cursor-pointer"
        alt=""
      ></img>
      <ul className="flex justify-end w-screen">
        <li className="mr-4">
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "orange" } : {};
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "orange" } : {};
            }}
            to="/menu"
          >
            Menu
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

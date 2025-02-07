import { Outlet, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Nav from "../../componets/Nav";
import profile from "/images/BJD-favicon.png";

function Navbar() {
  // const [open, setOpen] = React.useState(false)
  const styling2 = ({ isActive }) =>
    isActive
      ? "bg-indigo-700 text-white  hover:bg-pink-600 underline hover:text-white text-lg rounded-md px-3 py-2"
      : "text-white hover:bg-pink-600  hover:text-white hover:underline text-lg rounded-md px-3 py-2";
  return (
    <nav className="bg-gray-800 text-white p-4 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={profile} alt="BJD profile" />
              <span className=" text-white text-2xl font-bold ml-2">
                Company logo
              </span>
            </NavLink>
            <Nav />
            <NavLink className="block md:hidden cursor-pointer" to="/blog">
              <FaBars />
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}
export default Navbar;

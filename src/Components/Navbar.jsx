import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import UseAuth from "../../Utilities/UseAuth";

const Navbar = () => {
  const { user, userLogout } = UseAuth();
  const { displayName, photoURL } = user;
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    userLogout()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  const handleGotoLogin = () => {
    navigate("/login");
  };
  const navLinks = (
    <>
      <li className="text-base">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user ? (
        <li className="text-base">
          <NavLink to={"/add-product"}>Add Product</NavLink>
        </li>
      ) : (
        <li className="text-base">
          <button onClick={handleGotoLogin}>Add Product</button>
        </li>
      )}
      {user ? (
        <li className="text-base">
          <NavLink to={"/cart"}>My Cart</NavLink>
        </li>
      ) : (
        <li className="text-base">
          <button onClick={handleGotoLogin}>My Cart</button>
        </li>
      )}
    </>
  );
  return (
    <div className="h-24 flex items-center bg-[#FFA45B] rounded-t-lg">
      <div className="navbar bg-[#FFA45B] max-w-screen-2xl mx-auto text-[#FBF6F0] ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#FFDA77] text-black rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex items-center  hover:cursor-pointer">
            <img
              className="w-10 "
              src={"https://i.ibb.co/vYwrtWv/website-logo-1.png"}
              alt=""
            />
            <p className="text-xl md:text-3xl font-bold">JussEatIt</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <h3 className="font-bold">{displayName}</h3>
                <div className="hidden md:block avatar">
                  <div className="w-10 mask mask-squircle">
                    <img src={photoURL} />
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="btn btn-xs md:btn md:bg-[#FFDA77] bg-[#FFDA77] border-none"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link to={"/login"} className="btn bg-[#FFDA77] border-none">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

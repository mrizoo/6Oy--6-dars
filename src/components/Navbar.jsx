import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

import { useContext } from "react";
import { GlobalContext } from "../context/useGlobal";
function Navbar() {
  const { dispatch, user } = useContext(GlobalContext);

  const handleLogout = () => {
    dispatch({ type: "LOG_OUT" });
  };

  return (
    <div className=" bg-base-300 py-6 mb-10">
      <div className="navbar max-w-5xl mx-auto">
        <div className="navbar-start">
          <Link to="/" className="btn btn-secondary hidden lg:flex">
            MyMarket
          </Link>
          <div className="dropdown lg:hidden btn-secondary">
            <div tabIndex={0} role="button" className="btn m-1">
              MyMarket
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLinks />
        </div>

        <div className="navbar-end flex gap-5">
          {user && <p>{user.displayName}</p>}
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} />
            </div>
          </div>
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

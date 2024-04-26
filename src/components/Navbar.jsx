import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
function Navbar() {
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

        <div className="navbar-end">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="md:flex justify-between items-center py-5">
        <div className="md:ml-0 ml-10">
          <img src="/src/assets/Images/Logo.png" alt="logo" />
        </div>
        <div>
          <ul className="flex gap-5 justify-center md:mt-0 mt-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline font-medium"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline font-medium"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline font-medium"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

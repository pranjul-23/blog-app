import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
// import { logout } from "../store/slices/auth/auth.slice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const linkClass = (path: string) =>
    location.pathname === path ? "text-white" : "text-gray-300";

  const handleLogout = () => {
    // dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Middle: Menu Links (hidden on mobile) */}
          <div className="hidden sm:flex space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium hover:text-white 
                ${linkClass("/")}`}
            >
              Home
            </Link>
            {!isAuthenticated && (
              <Link
                to="/login"
                className={`text-sm font-medium hover:text-white 
                ${linkClass("/login")}`}
              >
                Login
              </Link>
            )}
            {!isAuthenticated && (
              <Link
                to="/signup"
                className={`text-sm font-medium hover:text-white 
                ${linkClass("/signup")}`}
              >
                Signup
              </Link>
            )}
            {isAuthenticated && (
              <span
                className="text-sm font-medium text-gray-300 hover:text-white cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </span>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {/* Hamburger Icon */}
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-3">
          <Link
            to="/"
            className="text-sm font-medium text-gray-300 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-sm font-medium text-gray-300 hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-sm font-medium text-gray-300 hover:text-white"
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

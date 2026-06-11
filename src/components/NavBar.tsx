import type { Dispatch, SetStateAction } from "react";
import { Link, NavLink } from "react-router-dom";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

export const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  return (
    <nav
      className="
        sticky
        top-0
        z-50
        bg-white/80
        dark:bg-gray-900/80
        backdrop-blur-md
        border-b
        border-pink-200
        dark:border-gray-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="
    text-xl
    md:text-3xl
    font-extrabold
    text-pink-500
    hover:scale-105
    transition
  "
        >
          🍩 <span className="hidden sm:inline">Sweet Donuts</span>
        </Link>

        {/* Menú */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold transition hover:text-pink-500 ${
                isActive ? "text-pink-500" : "text-gray-700 dark:text-gray-300"
              }`
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/presupuesto"
            className={({ isActive }) =>
              `font-semibold transition hover:text-pink-500 ${
                isActive ? "text-pink-500" : "text-gray-700 dark:text-gray-300"
              }`
            }
          >
            Presupuesto
          </NavLink>

          {/* Botón tema */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              w-12
              h-12
              rounded-full
              bg-pink-100
              dark:bg-gray-800
              hover:scale-110
              transition
              cursor-pointer
              text-xl
            "
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

import { Link, NavLink } from "react-router-dom";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
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
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          h-18
          flex
          items-center
          justify-between
          gap-2
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="
    flex
    items-center
    gap-2
    min-w-0
    text-pink-500
    hover:scale-105
    transition
  "
        >
          <span className="text-xl sm:text-2xl md:text-3xl">🍩</span>

          <span
            className="
      text-base
      sm:text-xl
      md:text-3xl
      font-extrabold
      truncate
    "
          >
            Sweet Donuts
          </span>
        </Link>

        {/* Menú */}
        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-4
            md:gap-6
          "
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm md:text-base font-semibold transition hover:text-pink-500 ${
                isActive ? "text-pink-500" : "text-gray-700 dark:text-gray-300"
              }`
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/presupuesto"
            className={({ isActive }) =>
              `text-sm md:text-base font-semibold transition hover:text-pink-500 ${
                isActive ? "text-pink-500" : "text-gray-700 dark:text-gray-300"
              }`
            }
          >
            Presupuesto
          </NavLink>

          {/* Tema */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              w-10
              h-10
              md:w-12
              md:h-12
              rounded-full
              bg-pink-100
              dark:bg-gray-800
              hover:scale-110
              transition
              cursor-pointer
              text-lg
              md:text-xl
              flex
              items-center
              justify-center
            "
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

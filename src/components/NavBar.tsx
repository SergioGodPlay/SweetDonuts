import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-semibold transition hover:text-pink-500 ${
      isActive ? "text-pink-500" : "text-gray-700 dark:text-gray-300"
    }`;

  return (
    <>
      {/* Navbar */}
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

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={navLinkClass}>
              Inicio
            </NavLink>

            <NavLink to="/presupuesto" className={navLinkClass}>
              Presupuesto
            </NavLink>

            <NavLink to="/canvas" className={navLinkClass}>
              Canvas
            </NavLink>

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

          {/* Menú móvil */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="
                w-10
                h-10
                rounded-full
                bg-pink-100
                dark:bg-gray-800
                hover:scale-110
                transition
                text-lg
              "
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="
              text-pink-500
                hover:scale-110
                transition
              "
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`
          fixed
          inset-0
          bg-black/40
          backdrop-blur-sm
          transition-all
          duration-300
          z-40

          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Drawer lateral */}
      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-72
          bg-white
          dark:bg-gray-900
          shadow-2xl
          z-50

          transition-transform
          duration-300
          ease-in-out

          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header Drawer */}
        <div
          className="
            flex
            items-center
            justify-between
            p-6
            border-b
            dark:border-gray-700
          "
        >
          <h2 className="text-2xl font-bold text-pink-500">Menú</h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="
    hover:text-pink-500
    transition
  "
          >
            <X size={32} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-6 gap-6">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/presupuesto"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Presupuesto
          </NavLink>

          <NavLink
            to="/canvas"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Canvas
          </NavLink>

          {/*
          <NavLink
            to="/productos"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Productos
          </NavLink>

          <NavLink
            to="/contacto"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Contacto
          </NavLink>
          */}
        </div>
      </div>
    </>
  );
};

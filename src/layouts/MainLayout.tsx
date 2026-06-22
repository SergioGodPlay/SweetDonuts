import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "../components/NavBar";

export default function MainLayout() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className="
        min-h-screen
        bg-rose-50
        dark:bg-[#0f0a14]
        text-gray-800
        dark:text-white
        transition-all
        duration-500
        overflow-x-hidden
      "
    >

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Outlet />

      <footer
        className="
          bg-pink-500
          dark:bg-black
          border-t
          dark:border-pink-500/20
          text-white
          py-6
          text-center
        "
      >
        <p>© 2026 Sweet Donuts - Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}
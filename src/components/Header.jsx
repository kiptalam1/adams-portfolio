import { useEffect, useState } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { GiMoonOrbit } from "react-icons/gi";
import { PiSunHorizon } from "react-icons/pi";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  const dot = "●";

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Adams Kiptalam</h1>
        <button
          className="cursor-pointer hover:shadow-lg transition-all"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <PiSunHorizon color="#FBBF24" size={20} />
          ) : (
            <GiMoonOrbit color="#818CF8" size={20} />
          )}
        </button>
      </div>
      <p className="text-lg text-muted ">
        Full-stack Software Engineer{" "}
        <span className="mx-2 text-gray-500">{dot}</span> Based in Kenya
      </p>
      <p className="">
        I design and build production-grade full-stack systems, from{" "}
        <span className="inline-flex items-center gap-1 bg-surface-muted w-fit px-2 rounded-lg">
          <FaReact size={14} color="#61DAFB" />
          React{" "}
        </span>{" "}
        interfaces to{" "}
        <span className="inline-flex items-center gap-1 bg-surface-muted w-fit px-2 rounded-lg">
          <FaNodeJs size={14} color="#68A063" /> Node.js{" "}
        </span>{" "}
        APIs, with a focus on <strong>scalability</strong>,{" "}
        <strong>security</strong>, and <strong>maintainability</strong>.
      </p>
    </div>
  );
}

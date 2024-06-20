"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import CodeEditor from "./components/CodeEditor";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-gradient-to-b from-teal-700 to-teal-500">
      <Navbar darkMode={darkMode} changeDarkMode={changeDarkMode} />
      <div className="flex min-h-screen flex-col md:flex-row">
        <section
          className={`m-4 bg-white px-8 py-5 shadow-2xl shadow-slate-900 md:w-1/2 ${
            darkMode
              ? "bg-gradient-to-r from-slate-900 to-slate-700 text-white"
              : ""
          }`}
        >
          <h1 className="mb-4 text-2xl font-bold">Problem Statement</h1>
          <hr />
          <p className={`mt-5 ${darkMode ? "statement-color" : ""}`}>
            Write a function that returns the sum of two numbers.
          </p>
          <p className={darkMode ? "statement-color" : ""}>
            Example: sum(1, 2) should return 3.
          </p>
        </section>
        <section className="p-4 md:w-1/2">
          <CodeEditor darkMode={darkMode} />
        </section>
      </div>
    </div>
  );
}

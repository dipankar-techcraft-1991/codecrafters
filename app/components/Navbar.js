const Navbar = ({ darkMode, changeDarkMode }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-navbar shadow-2xl">
      <div className="text-xl font-bold text-white">CODE CRAFTERS</div>
      <button
        onClick={changeDarkMode}
        className="px-4 py-2 bg-toggle text-toggletext  rounded"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;

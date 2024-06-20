const Navbar = ({ darkMode, changeDarkMode }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-navbar shadow-2xl">
      <div className="text-xl font-bold text-white">CODE CRAFTERS</div>
      <button
        onClick={changeDarkMode}
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 outline-none"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;

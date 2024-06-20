const Navbar = ({ darkMode, changeDarkMode }) => {
  return (
    <nav className="flex items-center justify-between bg-gradient-to-r from-slate-900 to-slate-700 p-4 shadow-xl shadow-slate-500">
      <div className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-xl font-extrabold text-transparent">
        CODE CRAFTERS
      </div>
      <button
        onClick={changeDarkMode}
        className="me-2 rounded-lg bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 px-1 py-1 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-teal-300"
      >
        {darkMode ? (
          <img src="./light.png" alt="light" height={`30px`} width={`30px`} />
        ) : (
          <img src="./dark.png" alt="dark" height={`30px`} width={`30px`} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;

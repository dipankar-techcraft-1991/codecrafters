const Navbar = ({ darkMode, changeDarkMode }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-slate-900 to-slate-700 shadow-2xl shadow-slate-800">
      <div className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
        CODE CRAFTERS
      </div>
      <button
        onClick={changeDarkMode}
        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-1 py-1 text-center me-2"
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

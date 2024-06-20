const Navbar = ({ darkMode, changeDarkMode }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-navbar shadow-2xl">
      <div className="text-xl font-bold text-white">CODE CRAFTERS</div>
      <button
        onClick={changeDarkMode}
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-1 py-1 text-center me-2"
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

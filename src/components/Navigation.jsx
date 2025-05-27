const Navigation = ({
  setCurrentView,
  setShowAdmin,
  showAdmin,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  currentView,
}) => {
  return (
    <nav className="bg-white border-b">
      <div className="px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold text-gray-900">Profile Mapper</h1>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setCurrentView("profiles")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentView === "profiles"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Profiles
            </button>
            <button
              onClick={() => setShowAdmin(!showAdmin)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                showAdmin
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Admin Panel
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg text-gray-600"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-2">
              <button
                onClick={() => {
                  setCurrentView("profiles");
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentView === "profiles"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Profiles
              </button>
              <button
                onClick={() => {
                  setShowAdmin(!showAdmin);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  showAdmin
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Admin Panel
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

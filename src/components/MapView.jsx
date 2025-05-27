const MapView = ({
  selectedProfile,
  setIsLoading,
  setCurrentView,
  isLoading,
}) => {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-white p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Location Map</h2>
          <button
            onClick={() => {
              setIsLoading(false);
              setCurrentView("profiles");
            }}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close map view"
          >
            <span className="text-gray-600 text-2xl font-bold">✕</span>
          </button>
        </div>
        {selectedProfile && (
          <p className="text-gray-600 mt-2">
            Showing location for: {selectedProfile.name}
          </p>
        )}
      </div>

      <div className="flex-1 bg-gray-100 relative overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading map...</p>
            </div>
          </div>
        ) : (
          <div className="h-full relative">
            {/* Mock Map Interface */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
              <div className="absolute inset-4 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 relative">
                  {/* Mock map controls */}
                  <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-2 space-y-2">
                    <button className="block w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded text-lg font-bold">
                      +
                    </button>
                    <button className="block w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded text-lg font-bold">
                      -
                    </button>
                  </div>

                  {selectedProfile && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-red-400 opacity-75"></div>
                        <div className="relative inline-flex rounded-full h-8 w-8 bg-red-500 items-center justify-center">
                          <span className="text-white text-base">📍</span>
                        </div>
                      </div>
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 min-w-64">
                        <div className="flex items-center gap-3">
                          <img
                            src={selectedProfile.photo}
                            alt={selectedProfile.name}
                            className="w-12 h-12 rounded-full object-cover"
                            onError={(e) => {
                              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                selectedProfile.name
                              )}&background=6366f1&color=fff`;
                            }}
                          />
                          <div>
                            <h4 className="font-semibold">
                              {selectedProfile.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {selectedProfile.address}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white bg-opacity-75 px-2 py-1 rounded">
                    Mock Map View - Integrated with mapping service
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapView;

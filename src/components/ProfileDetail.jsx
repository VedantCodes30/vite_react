const ProfileDetail = ({
  selectedProfile,
  setCurrentView,
  handleShowSummary,
}) => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="bg-white">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Profile Details</h2>
            <button
              onClick={() => {
                setCurrentView("profiles");
              }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <span className="text-gray-600 text-2xl font-bold">✕</span>
            </button>
          </div>
        </div>

        {selectedProfile && (
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <img
                  src={selectedProfile.photo}
                  alt={selectedProfile.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      selectedProfile.name
                    )}&background=6366f1&color=fff`;
                  }}
                />
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedProfile.name}
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  {selectedProfile.company}
                </p>
                <p className="text-gray-700 mb-6">
                  {selectedProfile.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Contact Information
                    </h3>
                    <div className="space-y-2">
                      <p>
                        <span className="font-medium">Email:</span>{" "}
                        {selectedProfile.email}
                      </p>
                      <p>
                        <span className="font-medium">Phone:</span>{" "}
                        {selectedProfile.phone}
                      </p>
                      <p>
                        <span className="font-medium">Address:</span>{" "}
                        {selectedProfile.address}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Interests & Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProfile.interests.map((interest, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <button
                    onClick={() => handleShowSummary(selectedProfile)}
                    className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                  >
                    <span className="h-5 w-5 text-white">📍</span>
                    View on Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDetail;

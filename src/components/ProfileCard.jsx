const ProfileCard = ({
  profile,
  showActions = false,
  handleProfileClick,
  handleShowSummary,
  handleEditProfile,
  handleDeleteProfile,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-16 h-16 rounded-full object-cover"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                profile.name
              )}&background=6366f1&color=fff`;
            }}
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900">
              {profile.name}
            </h3>
            <p className="text-gray-600 text-sm">{profile.company}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-4 line-clamp-2">{profile.description}</p>

        <div className="flex items-center gap-2 mb-4">
          {/* Replaced MapPin icon with a Unicode '📍' emoji */}
          <span className="text-gray-500 text-sm">📍</span>
          <span className="text-sm text-gray-600">{profile.address}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {profile.interests.slice(0, 3).map((interest, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {interest}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => handleProfileClick(profile)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            View Details
          </button>
          <button
            onClick={() => handleShowSummary(profile)}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm"
          >
            Show on Map
          </button>
          {showActions && (
            <>
              <button
                onClick={() => handleEditProfile(profile)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                aria-label="Edit profile"
              >
                <span className="text-sm">✏️</span>
              </button>
              <button
                onClick={() => handleDeleteProfile(profile.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                aria-label="Delete profile"
              >
                <span className="text-sm">🗑️</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

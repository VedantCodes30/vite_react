import { useState, useCallback } from "react";
import { initialProfiles } from "./data/initialProfiles";

import Navigation from "./components/Navigation";
import SearchBarAndFilter from "./components/SearchBarAndFilter";
import AdminPanelControls from "./components/AdminPanelControls";
import ProfileCard from "./components/ProfileCard";
import NoProfilesFound from "./components/NoProfilesFound";
import ProfileDetail from "./components/ProfileDetail";
import MapView from "./components/MapView";
import ProfileForm from "./components/ProfileForm";

const App = () => {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("all");
  const [showAdmin, setShowAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProfile, setEditingProfile] = useState(null);
  const [currentView, setCurrentView] = useState("profiles");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredProfiles = profiles.filter((profile) => {
    const matchesSearch =
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.address.toLowerCase().includes(searchTerm.toLowerCase());

    if (filterCriteria === "all") return matchesSearch;

    return (
      matchesSearch &&
      profile.interests.some((interest) =>
        interest.toLowerCase().includes(filterCriteria.toLowerCase())
      )
    );
  });

  const handleShowSummary = useCallback((profile) => {
    setIsLoading(true);
    setSelectedProfile(profile);

    setTimeout(() => {
      setCurrentView("map");
      setIsLoading(false);
      setIsMobileMenuOpen(false);
    }, 1000);
  }, []);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
    setCurrentView("detail");
    setIsMobileMenuOpen(false);
  };

  const handleDeleteProfile = (id) => {
    if (window.confirm("Are you sure you want to delete this profile?")) {
      setProfiles(profiles.filter((p) => p.id !== id));
      if (selectedProfile && selectedProfile.id === id) {
        setSelectedProfile(null);
        setCurrentView("profiles");
      }
    }
  };

  const handleEditProfile = (profile) => {
    setEditingProfile(profile);
    setShowAddForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation
        setCurrentView={setCurrentView}
        setShowAdmin={setShowAdmin}
        showAdmin={showAdmin}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        currentView={currentView}
      />

      <div className="flex-1 flex flex-col">
        {currentView === "map" && (
          <MapView
            selectedProfile={selectedProfile}
            setIsLoading={setIsLoading}
            setCurrentView={setCurrentView}
            isLoading={isLoading}
          />
        )}
        {currentView === "detail" && selectedProfile && (
          <ProfileDetail
            selectedProfile={selectedProfile}
            setCurrentView={setCurrentView}
            handleShowSummary={handleShowSummary}
          />
        )}
        {currentView === "profiles" && (
          <div className="flex-1 overflow-hidden">
            <SearchBarAndFilter
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filterCriteria={filterCriteria}
              setFilterCriteria={setFilterCriteria}
            />

            {showAdmin && (
              <AdminPanelControls setShowAddForm={setShowAddForm} />
            )}

            <div className="flex-1 overflow-y-auto p-4">
              <div className="max-w-7xl mx-auto">
                {filteredProfiles.length === 0 ? (
                  <NoProfilesFound />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProfiles.map((profile) => (
                      <ProfileCard
                        key={profile.id}
                        profile={profile}
                        showActions={showAdmin}
                        handleProfileClick={handleProfileClick}
                        handleShowSummary={handleShowSummary}
                        handleEditProfile={handleEditProfile}
                        handleDeleteProfile={handleDeleteProfile}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Profile Form Modal */}
      {showAddForm && (
        <ProfileForm
          profile={editingProfile}
          onSave={(profileData) => {
            if (editingProfile) {
              setProfiles(
                profiles.map((p) =>
                  p.id === editingProfile.id ? profileData : p
                )
              );
            } else {
              setProfiles([...profiles, profileData]);
            }
            setShowAddForm(false);
            setEditingProfile(null);
          }}
          onCancel={() => {
            setShowAddForm(false);
            setEditingProfile(null);
          }}
        />
      )}
    </div>
  );
};

export default App;

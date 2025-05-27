const AdminPanelControls = ({ setShowAddForm }) => {
  return (
    <div className="bg-blue-50 border-b p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Admin Panel</h2>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <span className="text-white text-lg leading-none">+</span>
            Add Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelControls;

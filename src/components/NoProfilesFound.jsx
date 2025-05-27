const NoProfilesFound = () => {
  return (
    <div className="text-center py-12">
      <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-4xl mx-auto mb-4 relative">
        <span className="absolute top-1/4 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gray-400"></span>
        <span className="absolute bottom-0 w-10 h-6 rounded-t-full bg-gray-400"></span>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        No profiles found
      </h3>
      <p className="text-gray-600">
        Try adjusting your search or filter criteria.
      </p>
    </div>
  );
};

export default NoProfilesFound;

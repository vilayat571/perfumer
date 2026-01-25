const StatsSection = () => {
  return (
    <div className="bg-linear-to-r from-amber-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              140+
            </div>
            <div className="text-gray-500">Products Available</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              1M+
            </div>
            <div className="text-gray-500">Sales Already</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              80+
            </div>
            <div className="text-gray-500">Industrial Franchises</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              1.01m
            </div>
            <div className="text-gray-500">Connections</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

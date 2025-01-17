import React from 'react';

const MarketingReferral: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">마케팅 및 홍보</h2>
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg transition duration-300 hover:bg-yellow-500">
            해외 마케팅
          </button>
          <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg transition duration-300 hover:bg-yellow-500">
            퍼블리셔
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketingReferral;

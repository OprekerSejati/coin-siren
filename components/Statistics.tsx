import React from 'react';

const Statistics: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">주요 통계</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-800 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-yellow-400">120명</h3>
            <p className="text-gray-300">월간 지원자 수</p>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-yellow-400">3회</h3>
            <p className="text-gray-300">최대 면접 횟수</p>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-yellow-400">10일</h3>
            <p className="text-gray-300">평균 채용 소요일</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

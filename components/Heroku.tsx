'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Profile {
  id: number;
  name: string;
  years: string;
  skills: string[];
  image: string;
}

const initialProfiles: Profile[] = [
  {
    id: 1,
    name: 'Abhishek Gupta',
    years: '2년+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리'],
    image: '/profile1.jpg',
  },
  {
    id: 2,
    name: 'Abhishek Gupta',
    years: '2년+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리'],
    image: '/profile1.jpg',
  },
  {
    id: 3,
    name: 'Abhishek Gupta',
    years: '2년+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리'],
    image: '/profile1.jpg',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [profiles] = useState(initialProfiles);

  const getPosition = (index: number) => {
    const normalizedIndex =
      (index - currentIndex + profiles.length) % profiles.length;
    if (normalizedIndex === 0) return 'center';
    if (normalizedIndex === profiles.length - 1) return 'left';
    return 'right';
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-500 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="text-white lg:w-1/2">
            <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
              풀스택, 파트타임
            </span>
            <h1 className="text-5xl font-bold mt-8 mb-4">
              최고의 실력을 가진
              <br />
              외국인 인재를 찾고 계신가요?
            </h1>
            <p className="text-xl mb-6">
              법률 및 인사관리 부담없이
              <br />
              1주일 이내에 확격으로 채용해보세요.
            </p>
          </div>

          <div className="lg:w-1/2 relative w-full max-w-[600px] mx-auto">
            <div className="absolute -top-8 right-8 z-30">
              <div className="bg-white text-teal-600 rounded-full px-4 py-1 flex items-center gap-2 shadow-lg">
                <span>월</span>
                <span className="font-bold">100만원</span>
              </div>
            </div>

            <div className="relative h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {profiles.map((profile, index) => {
                  const position = getPosition(index);
                  return (
                    <div
                      key={profile.id}
                      className={`
                        absolute w-[320px]
                        transition-all duration-500 ease-in-out transform
                        ${
                          position === 'left'
                            ? '-translate-x-[30%] z-10 opacity-90 scale-[0.85]'
                            : ''
                        }
                        ${
                          position === 'center'
                            ? 'translate-x-0 z-20 opacity-100 scale-100'
                            : ''
                        }
                        ${
                          position === 'right'
                            ? 'translate-x-[30%] z-10 opacity-90 scale-[0.85]'
                            : ''
                        }
                      `}
                    >
                      <div className="bg-white rounded-xl p-5 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <Image
                            src={profile.image}
                            alt={profile.name}
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <div>
                            <h3 className="font-bold text-base text-gray-800">
                              {profile.name}
                            </h3>
                            <p className="text-gray-500 text-sm">
                              {profile.years}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          {profile.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm w-full text-center"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-30 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
              onClick={handlePrev}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-30 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
              onClick={handleNext}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 p-6 rounded-xl text-white text-center">
              <h3 className="text-2xl font-bold">평균 월 120만원</h3>
              <p className="text-sm opacity-80 mt-2">업계 최저 국가별 기준</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl text-white text-center">
              <h3 className="text-2xl font-bold">최대 3회 인터뷰</h3>
              <p className="text-sm opacity-80 mt-2">빠상 채용체크리스트</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl text-white text-center">
              <h3 className="text-2xl font-bold">평균 3일, 최대 10일</h3>
              <p className="text-sm opacity-80 mt-2">글로벌 채용 프로세스</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

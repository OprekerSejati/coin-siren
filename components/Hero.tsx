'use client';

import { useState, useEffect } from 'react';
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
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

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

  const stats = [
    {
      id: 1,
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: '해외 마케팅',
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: '퍼블리셔',
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      title: '캐드원(제도사)',
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      title: '해외 세일즈',
    },
    {
      id: 5,
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: '해외 CS',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % stats.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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

            <div className="relative h-[350px]">
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

        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentStatIndex * 25}%)`,
              width: `${(stats.length * 100) / 4}%`,
            }}
          >
            {[...stats, ...stats].map((stat, index) => (
              <div key={`${stat.id}-${index}`} className="w-1/4 flex-shrink-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white text-center hover:bg-white/20 transition-colors cursor-pointer mx-2">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <p className="text-sm font-medium">{stat.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

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

const profiles: Profile[] = [
  {
    id: 1,
    name: 'Abhishek Gupta',
    years: '2년+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리'],
    image: '/profile1.jpg',
  },
  // Add more profiles as needed
];

const ProfileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? profiles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === profiles.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="absolute top-8 right-8">
        <div className="bg-teal-100 text-teal-800 rounded-full px-4 py-1 flex items-center gap-2">
          <span className="text-teal-500">월</span>
          <span className="font-bold">100만원</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 p-2 rounded-full"
            aria-label="Previous profile"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex gap-4 justify-center">
            {profiles.map((profile, index) => (
              <div
                key={profile.id}
                className={`w-80 bg-white rounded-xl p-6 transition-all duration-300 ${
                  index === currentIndex
                    ? 'scale-105 shadow-lg'
                    : 'scale-95 opacity-50'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{profile.name}</h3>
                    <p className="text-gray-500">{profile.years}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 p-2 rounded-full"
            aria-label="Next profile"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileCarousel;

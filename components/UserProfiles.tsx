import React from 'react';

interface Profile {
  name: string;
  role: string;
}

const UserProfiles: React.FC = () => {
  const profiles: Profile[] = [
    { name: 'John Doe', role: 'Software Engineer' },
    { name: 'Jane Smith', role: 'Product Manager' },
    { name: 'Alice Johnson', role: 'UX Designer' },
  ];

  return (
    <section className="bg-blue-900 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">사용자 프로필</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-400">
                {profile.name}
              </h3>
              <p className="text-gray-300">{profile.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserProfiles;

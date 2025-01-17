import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-transparent z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Image
          src="/hyperhire-logo.png"
          alt="HyperHire Logo"
          width={120}
          height={30}
        />
        <div className="flex items-center gap-6">
          <select className="bg-transparent text-white">
            <option value="ko">제품</option>
          </select>
          <button className="text-white">해외 개발자 활용 서비스</button>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg">
            문의하기
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

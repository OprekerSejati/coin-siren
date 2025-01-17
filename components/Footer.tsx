import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Image
              src="/hyperhire-logo.png"
              alt="HyperHire Logo"
              width={150}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-600 max-w-md">
              우리는 국가의 경계를 넘어 최고의 인재를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">해외 개발자 검색용</h4>
              <button className="text-gray-600 hover:text-gray-900">
                바로가기
              </button>
            </div>
            <div>
              <h4 className="font-bold mb-4">외국인 한글 채용(비개발)</h4>
              <button className="text-gray-600 hover:text-gray-900">
                바로가기
              </button>
            </div>
            <div>
              <h4 className="font-bold mb-4">한국어 가능 외국인 채용</h4>
              <button className="text-gray-600 hover:text-gray-900">
                바로가기
              </button>
            </div>
            <div>
              <h4 className="font-bold mb-4">해외 개발자 활용 서비스</h4>
              <button className="text-gray-600 hover:text-gray-900">
                바로가기
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h5 className="font-bold mb-2">상호명</h5>
              <p className="text-gray-600">Hyperhire India Private Limited</p>
            </div>
            <div>
              <h5 className="font-bold mb-2">대표 CEO</h5>
              <p className="text-gray-600">김주현</p>
            </div>
            <div>
              <h5 className="font-bold mb-2">사업자등록번호 CIN</h5>
              <p className="text-gray-600">427-88-01187</p>
            </div>
            <div>
              <h5 className="font-bold mb-2">주소 ADDRESS</h5>
              <p className="text-gray-600">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, 110053
                India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

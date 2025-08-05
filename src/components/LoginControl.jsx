import { useState } from "react";

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="p-6 bg-white w-1/4 rounded-xl shadow-md text-center space-y-4">
      <h2 className="text-xl font-semibold">조건부 로그인</h2>
      {isLoggedIn ? (
        <>
          <p>안녕하세요, 사용자님!</p>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
          >
            로그아웃
          </button>
        </>
      ) : (
        <>
          <p>로그인이 필요합니다.</p>
          <button
            onClick={() => setIsLoggedIn(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            로그인
          </button>
        </>
      )}
    </div>
  );
};

export default LoginControl;

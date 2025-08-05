import { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState(["홍길동", "홍일"]);
  const [name, setName] = useState("");

  const addUser = () => {
    if (name.trim()) {
      setUsers([...users, { id: currentId, name }]);
      setCurrentId(currentId + 1);
      setName("");
    }
  };

  const deleteUser = (indexToDelete) => {
    setUsers(users.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="p-6 bg-white w-1/4 rounded-xl shadow-md text-center space-y-5">
      <h2 className="text-xl font-semibold text-gray-800">사용자 목록</h2>

      <div className="flex gap-2">
        <input
          className="flex-1 border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addUser();
            }
          }}
          placeholder="이름 입력"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={addUser}
        >
          추가
        </button>
      </div>

      <ul className="text-left text-gray-700 max-h-40 overflow-y-auto space-y-2">
        {users.map((user, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-1 border-b border-gray-200"
          >
            <span>{user}</span>
            <button
              className="px-3 py-1 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-300"
              onClick={() => deleteUser(index)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

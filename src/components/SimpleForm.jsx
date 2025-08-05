import { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;
    alert(`${name}님 안녕하세요~ ^^;`);
    setName("");
  };

  return (
    <div className="p-6 bg-white w-1/4 rounded-xl shadow-md text-center space-y-4">
      <h2 className="text-xl font-semibold">SimpleForm</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2
           focus:ring-blue-400 "
          placeholder="이름 입력"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition duration-300"
        >
          인사
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;

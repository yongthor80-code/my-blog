"use client";

import { useEffect, useState } from "react";

export default function Counter() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    console.log("name::===>", name);
  }, [name, phone]);

  return (
    <div className="space-y-4 rounded-xl border bg-white p-6 shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">ຂໍ້ມູນຂອງຂ້ອຍ</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="ໃສ່ຊື່"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none"
      />

      <input
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="ໃສ່ເບີໂທ"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-amber-500 focus:outline-none"
      />

      <div className="text-gray-700">
        <p>ສະບາຍດີ, {name}</p>
        <p>Your phone number is: {phone}</p>
      </div>

      <button
        onClick={() => setLikes(likes + 1)}
        className="rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-blue-600"
      >
        Like {likes}
      </button>
    </div>
  );
}
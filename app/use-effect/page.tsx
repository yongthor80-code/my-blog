"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto mt-10 max-w-xs rounded-xl border bg-white p-8 text-center shadow-md">
      <p className="text-gray-500">ນັບຖອຍຫຼັງ</p>
      <h1 className="mt-2 text-7xl font-bold text-green-600">{count}</h1>
    </div>
  );
}
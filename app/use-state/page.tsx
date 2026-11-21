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
    <div className="space-y-4 rounded-xl border bg-card p-6 shadow-md">
      <h1 className="text-2xl font-bold text-foreground">ຂໍ້ມູນຂອງຂ້ອຍ</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="ໃສ່ຊື່"
        className="w-full rounded-lg border border-border bg-background text-foreground px-3 py-2 focus:border-green-500 focus:outline-none"
      />

      <input
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="ໃສ່ເບີໂທ"
        className="w-full rounded-lg border border-border bg-background text-foreground px-3 py-2 focus:border-amber-500 focus:outline-none"
      />

      <div className="text-foreground">
        <p>ສະບາຍດີ, {name}</p>
        <p>Your phone number is: {phone}</p>
      </div>

      <button
        onClick={() => setLikes(likes + 1)}
        className="rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-blue-600"
      >
        Like {likes}
      </button>
      
      <button className="btn-primary">Click here</button>
      
    </div>
    
  );
}
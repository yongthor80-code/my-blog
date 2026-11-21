export default function Profile() {
  return (
    <div className="max-w-sm w-full bg-card rounded-2xl shadow-lg p-6 flex flex-col items-center">
      {/* 1. ຮູບຢູ່ເທິງສຸດ */}
      <img
        src="/my-file/ii.jpeg"
        alt="Avatar"
        className="w-24 h-24 rounded-full border-4 border-blue-100 object-cover"
      />

      {/* 2. ຊື່ ແລະ bio */}
      <h2 className="mt-4 text-xl font-bold text-card-foreground">Yongthor Vangyar</h2>
      <p className="text-sm text-muted-foreground tracking-wide">
        ສະບາຍດີ, ຂ້ອຍເປັນນັກພັດທະນາເວັບໄຊ ແລະ ແອັບ.
      </p>

      {/* 3. ຕົວເລກ */}
      <div className="mt-6 flex justify-between w-full text-sm">
        <div>
          <p className="font-bold text-card-foreground">111</p>
          <p className="text-muted-foreground">Posts</p>
        </div>
        <div>
          <p className="font-bold text-card-foreground">12M</p>
          <p className="text-muted-foreground">Followers</p>
        </div>
        <div>
          <p className="font-bold text-card-foreground">0</p>
          <p className="text-muted-foreground">Following</p>
        </div>
      </div>

      {/* 4. ປຸ່ມ */}
      <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg font-medium">
        Follow
      </button>
    </div>
  );
}
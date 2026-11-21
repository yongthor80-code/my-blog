export type Product = {
  id: number;
  name: string;
  price: number; // ເກັບເປັນຕົວເລກ (ກີບ) ແລ້ວຄ່ອຍຈັດຮູບແບບຕອນສະແດງ
  emoji: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "ໂທລະສັບ",
    price: 3000000,
    emoji: "📱",
    description: "ໂທລະສັບສະມາດໂຟນ ໜ້າຈໍໃຫຍ່ ແບັດເຕີຣີຢູ່ໄດ້ທັງມື້",
  },
  {
    id: 2,
    name: "ແລັບທັອບ",
    price: 8000000,
    emoji: "💻",
    description: "ແລັບທັອບສຳລັບຮຽນ ແລະ ຂຽນໂປຣແກຣມ ເບົາ ພົກພາງ່າຍ",
  },
  {
    id: 3,
    name: "ຫູຟັງ",
    price: 500000,
    emoji: "🎧",
    description: "ຫູຟັງສຽງດີ ໃສ່ສະບາຍ ຟັງເພງໄດ້ດົນ",
  },
  {
    id: 4,
    name: "ໂທລະທັດ",
    price: 4500000,
    emoji: "📺",
    description: "ໂທລະທັດຈໍໃຫຍ່ ພາບຄົມຊັດ ເໝາະກັບການເບິ່ງໜັງໃນຄອບຄົວ",
  },
  {
    id: 5,
    name: "ກ້ອງຖ່າຍຮູບ",
    price: 6000000,
    emoji: "📷",
    description: "ກ້ອງຖ່າຍຮູບດິຈິຕອນ ຖ່າຍພາບສວຍ ທັງກາງເວັນ ແລະ ກາງຄືນ",
  },
  {
    id: 6,
    name: "ໂມງອັດສະລິຍະ",
    price: 1200000,
    emoji: "⌚",
    description: "ໂມງອັດສະລິຍະ ບອກເວລາ ແລະ ຕິດຕາມການອອກກຳລັງກາຍ",
  },
  {
    id: 7,
    name: "ແປ້ນພິມ",
    price: 350000,
    emoji: "⌨️",
    description: "ແປ້ນພິມກົນຈັກ ກົດສະບາຍ ເໝາະກັບການຂຽນໂປຣແກຣມ",
  },
];

// ຫາສິນຄ້າຈາກ id (ຖ້າບໍ່ພົບ ຈະໄດ້ undefined)
export function getProductById(id: number) {
  return products.find((product) => product.id === id);
}

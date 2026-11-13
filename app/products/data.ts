export type Product = {
  id: number;
  name: string;
  price: number;
  emoji: string;
};

export const products: Product[] = [
  { id: 1, name: "ໂທລະສັບ", price: 3000000, emoji: "📱" },
  { id: 2, name: "ແລັບທັອບ", price: 8000000, emoji: "💻" },
  { id: 3, name: "ຫູຟັງ", price: 500000, emoji: "🎧" },
];
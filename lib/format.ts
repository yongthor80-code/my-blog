// ປ່ຽນຕົວເລກເປັນຂໍ້ຄວາມລາຄາ ເຊັ່ນ 3000000 → "3,000,000 ກີບ"
export function formatPrice(price: number) {
  return price.toLocaleString("en-US") + " ກີບ";
}

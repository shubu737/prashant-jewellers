import { getProductCategories, getProducts } from "../../lib/products";
import ShopBrowser from "../../components/shop-browser";

const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under ₹25,000", min: 0, max: 25000 },
  { label: "₹25,000 - ₹50,000", min: 25000, max: 50000 },
  { label: "Above ₹50,000", min: 50000, max: Infinity },
];

export default async function ShopPage() {
  const products = await getProducts();
  const categories = await getProductCategories();

  return <ShopBrowser initialProducts={products} categories={categories} priceRanges={priceRanges} />;
}

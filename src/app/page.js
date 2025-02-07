import HomeBanner from "@/components/home/HomeBanner";
import HomeCat from "@/components/home/HomeCat";
import ProductList from "@/components/product/productList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeCat />
      <HomeBanner />
      <ProductList />
    </>
  );
}

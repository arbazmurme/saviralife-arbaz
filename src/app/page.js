import HomeBanner from "@/components/home/HomeBanner";
import ProductList from "@/components/product/productList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <ProductList /> 
    </>
  );
}

import HomeBanner from "@/components/home/HomeBanner";
import ProductList from "@/components/product/productList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">
        {" "}
        this is using tailwind and next js with with SCO.{" "}
      </h1>
      <HomeBanner />
      <ProductList />
    </>
  );
}

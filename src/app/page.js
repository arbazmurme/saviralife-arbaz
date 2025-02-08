import ExploreProduct from "@/components/home/ExploreProduct";
import HomeBanner from "@/components/home/HomeBanner";
import HomeCat from "@/components/home/HomeCat";
import ProductList from "@/components/product/productList";

export default function Home() {
  return (
    <>
      <HomeCat />
      <HomeBanner />
      <ExploreProduct />
      <ProductList />
    </>
  );
}

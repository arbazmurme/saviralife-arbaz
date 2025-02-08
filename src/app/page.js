import Adsection from "@/components/home/Adsection";
import ExploreProduct from "@/components/home/ExploreProduct";
import HomeBanner from "@/components/home/HomeBanner";
import HomeCat from "@/components/home/HomeCat";
import WinterTea from "@/components/home/WinterTea";

export default function Home() {
  return (
    <>
      <HomeCat />
      <HomeBanner />
      <ExploreProduct />
      <WinterTea />
      <Adsection />
    </>
  );
}

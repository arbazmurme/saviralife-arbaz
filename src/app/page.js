import Adsection from "@/components/home/Adsection";
import BoostSection from "@/components/home/BoostSection";
import ExploreProduct from "@/components/home/ExploreProduct";
import HomeBanner from "@/components/home/HomeBanner";
import HomeCat from "@/components/home/HomeCat";
import TeaLover from "@/components/home/TeaLover";
import WinterTea from "@/components/home/WinterTea";
import "./tailwind.css";
export default function Home() {
  return (
    <>
      <section id="wrapper" className="container">
        <aside id="notifications">
          <div className="notifications-container container"></div>
        </aside>
        <div className="bread-top">
          <div className="category-cover">
            <img
              src="https://demo80leotheme.b-cdn.net/prestashop/leo_teapoz_elementor_demo/themes/leo_teapoz/assets/img/BRCC.jpg"
              className="img-fluid"
              alt="Breadcrumb image"
            />
          </div>
          <div className="container">
            <nav data-depth={1} className="breadcrumb hidden-sm-down">
              <ol>
                <li>
                  <span>Home</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div
            id="content-wrapper"
            className="col-lg-12 col-xs-12 js-content-wrapper"
            style={{ padding: "0px" }}
          >
            <section id="main">
              <section id="content" className="page-home">
                <div
                  data-elementor-type="post"
                  data-elementor-id={25}
                  className="elementor elementor-25"
                  data-elementor-settings="[]"
                >
                  <div className="elementor-inner">
                    <div className="elementor-section-wrap">
                      <HomeCat />
                      <HomeBanner />
                      <ExploreProduct />
                      <WinterTea />
                      <Adsection />
                      <TeaLover />
                      <BoostSection />
                    </div>
                  </div>
                </div>
              </section>
              <footer className="page-footer">{/* Footer content */}</footer>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

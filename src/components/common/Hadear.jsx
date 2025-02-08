"use client";
import React, { useEffect, useState } from "react";
import  Link  from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import "./Header.css";
import "./FooterMoblie_ver.css";

const Hadear = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header id="header" className={`header ${isSticky ? "sticky" : ""}`}>
        <div className="header-top">
          <div className="inner">
            <div className="elementor elementor-24">
              <div className="elementor-inner">
                <div className="elementor-section-wrap">
                  <section className="elementor-element elementor-element-79e65fc header-nav-h1 header-top-h1 header-nav-h2 elementor-section-full_width elementor-section-height-default elementor-section-height-inner-default elementor-section elementor-inner-section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div
                        className="elementor-row"
                        style={{ padding: "6px 0px" }}
                      >
                        <div className="elementor-widget-wrap">
                          <div className="elementor-element elementor-element-b631c61 LeoBlockLink-toggle-none elementor-widget elementor-widget-LeoBlockLink">
                            <div className="elementor-widget-container">
                              <div className="LeoBlockLink">
                                <div
                                  className="linklist-toggle h6"
                                  data-toggle="linklist-widget"
                                >
                                  <marquee>
                                    <div className="title_block mt-lg-5">
                                      Exciting News! 🎉 We're launching our
                                      brand-new website on 18th January! Stay
                                      tuned for exclusive offers, updates, and a
                                      whole new experience.
                                    </div>
                                  </marquee>
                                  <span className="icon-toggle fa fa-angle-down" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="elementor-element elementor-element-fb9019b header-top-h4 elementor-section-full_width elementor-section-height-default elementor-section-height-inner-default elementor-section elementor-top-section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <div className="elementor-element elementor-element-b6a31d8 elementor-column elementor-col-100 elementor-top-column">
                          <div className="elementor-column-wrap  elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <section className="elementor-element elementor-element-9d4761a elementor-section-full_width elementor-section-height-default elementor-section-height-inner-default elementor-section elementor-inner-section">
                                <div className="elementor-container elementor-column-gap-default">
                                  <div className="elementor-row">
                                    <div className="elementor-element elementor-element-952dffe logo-menu-w elementor-column elementor-col-33 elementor-inner-column">
                                      <div className="elementor-column-wrap  elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div className="elementor-element elementor-element-4884a17 elementor-widget elementor-widget-LeoGenCode">
                                            <div className="elementor-widget-container">
                                              <div className="header_logo">
                                                <Link href="/">
                                                  <img
                                                    className="logo img-fluid"
                                                    src="https://saviralife.com/assets/images/logo.png"
                                                    style={{
                                                      width: "200px",
                                                      height: "80px",
                                                    }}
                                                    alt="logo"
                                                  />
                                                </Link>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div
                                      className="elementor-element elementor-element-fdff87e elementor-column elementor-col-33 elementor-inner-column"
                                      data-id="fdff87e"
                                      data-element_type="column"
                                    >
                                      <div
                                        className="elementor-column-wrap  elementor-element-populated"
                                        style={{
                                          margin: "0px 5px",
                                        }}
                                      >
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="elementor-element elementor-element-a4f0d1d elementor-widget__width-inherit elementor-widget elementor-widget-LeoModule"
                                            data-id="a4f0d1d"
                                            data-element_type="widget"
                                            data-widget_type="LeoModule.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div
                                                id="leo_search_block_top"
                                                className="block exclusive"
                                              >
                                                <div className="block_content clearfix leoproductsearch-content">
                                                  <div className="leoproductsearch-result">
                                                    <div className="leoproductsearch-loading cssload-speeding-wheel" />
                                                    <input
                                                      className="search_query form-control grey ac_input"
                                                      type="text"
                                                      id="leo_search_query_top"
                                                      name="search_query"
                                                      data-content='["What are you looking for?"]'
                                                      placeholder="What are you looking for?"
                                                      autoComplete="off"
                                                    />
                                                    <div
                                                      className="ac_results lps_results"
                                                      style={{
                                                        width: "608.297px",
                                                        display: "none",
                                                      }}
                                                    />
                                                  </div>
                                                  <Link href="/search">
                                                    <div className="btn btn-default button button-small">
                                                      <span>Search </span>
                                                    </div>
                                                  </Link>
                                                </div>
                                              </div>
                                              {/* /Block search module */}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="elementor-element elementor-element-1604c12 icon-w elementor-column elementor-col-33 elementor-inner-column Mfooter_part">
                                      <div className="elementor-column-wrap  elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div
                                            className="elementor-element elementor-element-692f2b9 elementor-widget__width-initial elementor-widget elementor-widget-LeoModule"
                                            data-id="692f2b9"
                                            data-element_type="widget"
                                            data-widget_type="LeoModule.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="userinfo-selector links dropdown js-dropdown popup-over">
                                                <Link href="/login">
                                                  <FaRegUser size={20} />
                                                </Link>
                                              </div>
                                            </div>
                                          </div>

                                          <div
                                            className="elementor-element elementor-element-ae36715 elementor-widget__width-initial elementor-widget elementor-widget-LeoGenCode"
                                            data-id="ae36715"
                                            data-element_type="widget"
                                            data-widget_type="LeoGenCode.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <a
                                                className="ap-btn-wishlist ap-wishlist text-gray-700"
                                                title="Wishlist"
                                                rel="nofollow"
                                              >
                                                <FaRegHeart size={20}/>
                                              </a>
                                            </div>
                                          </div>

                                          <div
                                            className="elementor-element elementor-element-213f612 elementor-widget__width-initial elementor-widget elementor-widget-LeoModule"
                                            data-id="213f612"
                                            data-element_type="widget"
                                            data-widget_type="LeoModule.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <Link href="/cart">
                                                <div id="_desktop_cart">
                                                  <div className="blockcart cart-preview leo-blockcart show-leo-loading inactive">
                                                    <div className="header">
                                                      <MdOutlineShoppingBag
                                                        size={24}
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>

                              <section className="elementor-element elementor-element-962fb27 elementor-section-boxed elementor-section-height-default elementor-section-height-inner-default elementor-section elementor-inner-section">
                                <div className="elementor-container elementor-column-gap-default">
                                  <div className="elementor-row">
                                    <div className="elementor-element elementor-element-f63b2c8 group-nav elementor-column elementor-col-50 elementor-inner-column">
                                      <div className="elementor-column-wrap  elementor-element-populated">
                                        <div className="elementor-widget-wrap">
                                          <div className="elementor-element elementor-element-040e7cb elementor-widget elementor-widget-LeoBootstrapmenu">
                                            <div className="elementor-widget-container">
                                              <div className="ApMegamenu">
                                                <nav className="leo-megamenu cavas_menu navbar navbar-default enable-canvas ">
                                                  <div className="navbar-header">
                                                    <button
                                                      className="navbar-toggler hidden-lg-up"
                                                      onClick={() =>
                                                        setShowToggle(
                                                          !showToggle
                                                        )
                                                      }
                                                    >
                                                      <IoMenu size={24} />
                                                    </button>
                                                  </div>
                                                  {showToggle === true ? (
                                                    <>
                                                      <div className="leo-top-menu collapse navbar-toggleable-md megamenu-off-canvas megamenu-off-canvas-ac70e5b81cccd4671f8c75a464e569bd">
                                                        <ul className="nav navbar-nav megamenu horizontal">
                                                          <li
                                                            data-menu-type="controller"
                                                            className="nav-item parent dropdown leo-1 active"
                                                          >
                                                            <a
                                                              className="nav-link dropdown-toggle has-category"
                                                              data-toggle="dropdown"
                                                            >
                                                              <span className="menu-title">
                                                                Home
                                                              </span>
                                                            </a>
                                                            <b className="caret" />
                                                            <div
                                                              className="dropdown-sub dropdown-menu"
                                                              style={{
                                                                width: 250,
                                                              }}
                                                            >
                                                              <div className="dropdown-menu-inner">
                                                                <div className="row">
                                                                  <div className="mega-col col-md-12">
                                                                    <div className="mega-col-inner ">
                                                                      <div className="leo-widget">
                                                                        <div className="widget-links">
                                                                          <div className="widget-inner">
                                                                            <div
                                                                              id="tabs1638046899"
                                                                              className="panel-group"
                                                                            >
                                                                              <ul className="nav-links">
                                                                                <li>
                                                                                  <a>
                                                                                    Home
                                                                                    01
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a>
                                                                                    Home
                                                                                    02
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a>
                                                                                    Home
                                                                                    03
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a>
                                                                                    Home
                                                                                    04
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a>
                                                                                    Home
                                                                                    05
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a>
                                                                                    Home
                                                                                    06
                                                                                  </a>
                                                                                </li>
                                                                              </ul>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>{" "}
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </li>
                                                          <li
                                                            data-menu-type="category"
                                                            className="nav-item parent  dropdown aligned-fullwidth  leo-1"
                                                          >
                                                            <a
                                                              className="nav-link dropdown-toggle has-category"
                                                              data-toggle="dropdown"
                                                              target="_self"
                                                            >
                                                              <span className="menu-title">
                                                                Shop
                                                              </span>
                                                            </a>
                                                            <b className="caret" />
                                                            <div className="dropdown-sub dropdown-menu">
                                                              <div className="dropdown-menu-inner">
                                                                <div className="row">
                                                                  <div className="mega-col col-md-2">
                                                                    <div className="mega-col-inner ">
                                                                      <div
                                                                        className="leo-widget"
                                                                        data-id_widget={
                                                                          1678958794
                                                                        }
                                                                      >
                                                                        <div className="widget-links">
                                                                          <div className="menu-title">
                                                                            Tea
                                                                            Bags
                                                                          </div>
                                                                          <div className="widget-inner">
                                                                            <div
                                                                              id="tabs2005488170"
                                                                              className="panel-group"
                                                                            >
                                                                              <ul className="nav-links">
                                                                                <li>
                                                                                  <a>
                                                                                    Loose
                                                                                    Leaf
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a>
                                                                                    Tea
                                                                                    Bags
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a>
                                                                                    Dragon
                                                                                    Beard
                                                                                    Tea
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a>
                                                                                    Lotus
                                                                                    Tea
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a>
                                                                                    White
                                                                                    Tea
                                                                                  </a>
                                                                                </li>
                                                                              </ul>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>{" "}
                                                                    </div>
                                                                  </div>
                                                                  <div className="mega-col col-md-2">
                                                                    <div className="mega-col-inner ">
                                                                      <div
                                                                        className="leo-widget"
                                                                        data-id_widget={
                                                                          1678958913
                                                                        }
                                                                      >
                                                                        <div className="widget-links">
                                                                          <div className="menu-title">
                                                                            Loose-Leaf
                                                                            Tea
                                                                          </div>
                                                                          <div className="widget-inner">
                                                                            <div
                                                                              id="tabs956855260"
                                                                              className="panel-group"
                                                                            >
                                                                              <ul className="nav-links">
                                                                                <li>
                                                                                  <a>
                                                                                    Best
                                                                                    Selling{" "}
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a>
                                                                                    Pouches{" "}
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a>
                                                                                    Cartons{" "}
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a>
                                                                                    Caddies{" "}
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a>
                                                                                    Caffeine
                                                                                    Free
                                                                                  </a>
                                                                                </li>
                                                                              </ul>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>{" "}
                                                                    </div>
                                                                  </div>
                                                                  <div className="mega-col col-md-3">
                                                                    <div className="mega-col-inner ">
                                                                      <div
                                                                        className="leo-widget"
                                                                        data-id_widget={
                                                                          1678958732
                                                                        }
                                                                      >
                                                                        <div className="widget-links">
                                                                          <div className="widget-inner">
                                                                            <div
                                                                              id="tabs453369484"
                                                                              className="panel-group"
                                                                            >
                                                                              <ul className="nav-links">
                                                                                <li>
                                                                                  <a>
                                                                                    Black
                                                                                    Tea
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a>
                                                                                    Caffeine-Free
                                                                                  </a>
                                                                                </li>
                                                                                <li>
                                                                                  <a>
                                                                                    Green
                                                                                    Teas
                                                                                  </a>
                                                                                </li>
                                                                              </ul>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>{" "}
                                                                    </div>
                                                                  </div>
                                                                  <div className="mega-col col-md-5">
                                                                    <div className="mega-col-inner ">
                                                                      <div
                                                                        className="leo-widget"
                                                                        data-id_widget={
                                                                          1557391205
                                                                        }
                                                                      >
                                                                        <div className="widget-html">
                                                                          <div className="widget-inner">
                                                                            <p>
                                                                              <img
                                                                                className="img-fluid"
                                                                                src="/prestashop/leo_teapoz_elementor_demo/themes/leo_teapoz/assets/img/modules/leobootstrapmenu/menu-product-1.jpg"
                                                                                alt
                                                                              />
                                                                            </p>{" "}
                                                                          </div>
                                                                        </div>
                                                                      </div>{" "}
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </>
                                                  ) : (
                                                    <></>
                                                  )}
                                                </nav>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-b78dcac elementor-column elementor-col-50 elementor-inner-column"
                                      data-id="b78dcac"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-column-wrap">
                                        <div className="elementor-widget-wrap"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hadear;

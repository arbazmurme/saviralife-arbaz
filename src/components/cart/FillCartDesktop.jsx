import React, { useState } from "react";
import { Drawer, Collapse } from "antd";
import styles from "./CartSlider.module.css";
import TipComponent from "./TipComponent.module.css";
import { BiCoin } from "react-icons/bi";
import { Button, Input, Space } from "antd";
import {
  FaCheckSquare,
  FaChevronLeft,
  FaRegCheckCircle,
  FaAngleRight,
  FaTruck,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { RiCoupon3Fill } from "react-icons/ri";
import { RiBillLine } from "react-icons/ri";
import Link from "next/link"; 
import Hslider from "./Your.module.css";

const FillCartDesktop = ({ isCartVisible, toggleCart }) => {
  const shippingCost = 75;
  const [tipAmount, setTipAmount] = useState(10);

  const taxes = 0;
  const initialCartItems = [
    {
      id: 1,
      name: "Jade Orchid Green Tea Pyramid",
      price: 29,
      quantity: 1,
      size: "S",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016443/Category/DesktopImage/avrx2tqqmkzl6aq1fy1o.jpg",
    },
    {
      id: 2,
      name: "Tea Forte Lotus Relaxing Teas Presentation Box Tea",
      price: 23,
      quantity: 1,
      size: "S",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016443/Category/DesktopImage/avrx2tqqmkzl6aq1fy1o.jpg",
    },
    {
      id: 3,
      name: "Chamomile Herbal Tea Box",
      price: 19,
      quantity: 1,
      size: "M",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016443/Category/DesktopImage/avrx2tqqmkzl6aq1fy1o.jpg",
    },
    {
      id: 4,
      name: "Lemon Ginger Green Tea box",
      price: 25,
      quantity: 1,
      size: "L",
      image:
        "https://res.cloudinary.com/dpplqvnx6/image/upload/v1734016443/Category/DesktopImage/avrx2tqqmkzl6aq1fy1o.jpg",
    },
  ];
  const [cartItems, setCartItems] = useState(initialCartItems);
  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingCost + taxes;

  const items = [
    {
      key: "1",
      label: (
        <div className={styles.rowContainer}>
          <RiBillLine size={28} color="#262A2E" />
          <div className={styles.columnContainer}>
            <span className={styles.mainText}>To Pay</span>
            <span className={styles.smallText}>
              Incl. all taxes and charges
            </span>
          </div>
        </div>
      ),
      children: (
        <>
          <h3 className={styles.billSummaryHeader}>Bill Summary</h3>
          <div className={styles.billSummaryItem}>
            <span className={styles.billSummaryLabel}>Item Total</span>
            <span className={styles.billSummaryValue}>₹{total}</span>
          </div>
          <div className={styles.billSummaryItem}>
            <span className={styles.billSummaryLabel}>Handling Charge</span>
            <span className={styles.billSummaryValue}>₹15</span>
          </div>
          <div className={styles.billSummaryItem}>
            <span className={styles.billSummaryLabel}>Delivery Fee</span>
            <span className={styles.billSummaryValue}>₹25</span>
          </div>
          <div className={styles.billSummaryTotal}>
            <span className={styles.billSummaryLabel}>Total Bill</span>
            <span className={`${styles.billSummaryValue} ${styles.total}`}>
              ₹{total + 25 + 15}
            </span>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: (
        <div className={styles.rowContainer}>
          <FaTruck size={28} color="#262A2E" />
          <div className={styles.columnContainer}>
            <span className={styles.mainText}>Delivery Instructions</span>
            <span className={styles.smallText}>
              Delivery partner will be notified
            </span>
          </div>
        </div>
      ),
      children: (
        <div className={Hslider.container}>
          <div className={Hslider.borderTop}>
            <div className={Hslider.bgSkinBase}>
              <div className={Hslider.noScrollbar}>
                <div className={Hslider.scrollWrapper}>
                  <span className={Hslider.button}>
                    <img
                      alt="bewareOfPets"
                      loading="lazy"
                      width="50"
                      height="40"
                      className={Hslider.image}
                      src="https://cdn.zeptonow.com/app/images/beware_of_pets.png"
                    />
                    <div className={Hslider.textWrapper}>
                      <p className={Hslider.title}>Beware Of Pets</p>
                      <p className={Hslider.subtitle}>
                        Delivery partner will be informed about the presence of
                        pet(s)
                      </p>
                    </div>
                  </span>
                  <span className={Hslider.button}>
                    <img
                      alt="doNotRingBell"
                      loading="lazy"
                      width="50"
                      height="40"
                      className={Hslider.image}
                      src="https://cdn.zeptonow.com/app/images/do_not_ring_bell.png"
                    />
                    <div className={Hslider.textWrapper}>
                      <p className={Hslider.title}>Do Not Ring The Bell</p>
                      <p className={Hslider.subtitle}>
                        Delivery partner will not ring the bell
                      </p>
                    </div>
                  </span>
                  <span className={Hslider.button}>
                    <img
                      alt="leaveAtGate"
                      loading="lazy"
                      width="50"
                      height="40"
                      className={Hslider.image}
                      src="https://cdn.zeptonow.com/app/images/no_contact_delivery.png"
                    />
                    <div className={Hslider.textWrapper}>
                      <p className={Hslider.title}>No Contact Delivery</p>
                      <p className={Hslider.subtitle}>
                        Delivery partner will leave your order at your door
                      </p>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className={styles.rowContainer}>
          <FaHandHoldingUsd size={28} color="#262A2E" />
          <div className={styles.columnContainer}>
            <span className={styles.mainText}>Delivery Partner Tip</span>
            <span className={styles.smallText}>
              This amount goes to your delivery partner
            </span>
          </div>
        </div>
      ),
      children: (
        <div className={TipComponent.container}>
          <div className={`${TipComponent.flex}`}>
            <div
              className={`${TipComponent.button}`}
              type="button"
              aria-label="Tip"
            >
              <div className={`${TipComponent.textWrapper}`}>
                <BiCoin className={`${TipComponent.buttonImage}`} size={16} />
                <p className={`${TipComponent.buttonText}`}>₹10</p>
              </div>
            </div>

            <div
              className={`${TipComponent.button}`}
              type="button"
              aria-label="Tip"
            >
              <div className={`${TipComponent.textWrapper}`}>
                <BiCoin className={`${TipComponent.buttonImage}`} size={16} />
                <p className={`${TipComponent.buttonText}`}>₹20</p>
              </div>
            </div>

            <div
              className={`${TipComponent.button}`}
              type="button"
              aria-label="Tip"
            >
              <div className={`${TipComponent.textWrapper}`}>
                <BiCoin className={`${TipComponent.buttonImage}`} size={16} />
                <p className={`${TipComponent.buttonText}`}>₹35</p>
              </div>
            </div>
          </div>

          <Space.Compact
            style={{ width: "100%" }}
            className={TipComponent.SpaceCompact}
          >
            <Input
              defaultValue="Add Custom Tip"
              className={TipComponent.input}
            />
            <Button type="primary" className={TipComponent.buttonPrimary}>
              Submit
            </Button>
          </Space.Compact>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className={styles.bgColor}>
        <Drawer
          className={styles.customDrawer}
          onClose={toggleCart}
          open={isCartVisible}
          width={450}
          title={null}
          closable={false}
          style={{ overflow: "auto" }}
          styles={{
            flex: "1",
            padding: "10px",
            backgroundColor: "#DCE5F3",
          }}
        >
          <div className={styles.fixT}> 
            <h2>
              <FaChevronLeft onClick={toggleCart} />
              <span className={styles.YourCart}>Your Cart</span>
              <span className={styles.saved}>
                {" "}
                SAVED <span className={styles.price}>₹221</span>
              </span>
            </h2>
            <p>
              <span className={styles.saved1}>
                <span className={styles.CheckCircle}>
                  <FaRegCheckCircle size={20} />
                </span>
                Saved ₹221
              </span>
              including <span className={styles.bold}>₹25</span> through free
              delivery!
            </p>
          </div>

          {/* cashback with CRED */}
          <div className={styles.card} style={{ marginTop: "78px" }}>
            <div className={styles.gridContainer}>
              <div className={styles.gridItem}>
                <RiCoupon3Fill color="#0FBA52" size={30} />
              </div>
              <div className={styles.gridItem}>
                <span style={{ color: "#000000", fontWeight: "bold" }}>
                  Up to ₹300 cashback with CRED
                </span>
                <span style={{ fontSize: "14px", color: "#555" }}>
                  Code: arbazmurme
                </span>
              </div>
              <div className={styles.gridItem}>
                <button> Apply </button>
              </div>
              <div className={styles.gridItem}>
                View all coupons <FaAngleRight />
              </div>
            </div>
          </div>

          {/* cart items list */}
          <div className={styles.card}>
            <div className={styles.timer}>
              <IoTimeSharp size={44} color="#73DEBD" />
              <span className={styles.timerText}>Delivery in 6 mins</span>
            </div>
            {cartItems.map((item) => (
              <div className={styles.cartItem} key={item.id}>
                <div className={styles.cartItemInfo}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.cartItemImage}
                  />
                  <div className={styles.cartItemDetails}>
                    <span className={styles.cartItemName}>{item.name}</span>
                    <span className={styles.cartItemSize}>
                      Size: {item.size}
                    </span>
                  </div>
                </div>
                <div className={styles.cartItemActions}>
                  <span onClick={() => decrementQuantity(item.id)}>-</span>
                  <span className={styles.QuantityPrice}>{item.quantity}</span>
                  <span onClick={() => incrementQuantity(item.id)}>+</span>
                </div>
                <div className={styles.cartItemPrice}>
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          {/* Collapse component */}
          <Collapse
            items={items}
            defaultActiveKey={["1"]}
            onChange={(key) => console.log(key)}
            expandIconPosition="end"
            className={styles.customCollapse}
          />

          <div className={styles.dommy}></div>

          <div className={styles.fixB}>
            <div className={styles.container}>
              <div className={styles.dL}>
                <img
                  className={styles.icon}
                  src="https://cdn.zeptonow.com/production/tr:w-100,ar-40-40,pr-true,f-auto,q-80/app/images/address_home_icon_v3.png"
                  alt="address icon"
                />
              </div>
              <div className={styles.add}>
                <h6 className={styles.text}>Delivering to room </h6>
                <span className={styles.colorL}>
                  East Srinivas Nagar Colony, Srinivasa Nagar..
                </span>
              </div>
            </div>

            <div className={styles.flexRow}>
              <div className={styles.paymentDetails}>
                <span>
                  <button
                    className={styles.iconButton}
                    onClick={() => alert("Icon clicked!")}
                    aria-label="Select"
                  >
                    <FaCheckSquare />
                  </button>
                  <span className={styles.amount}>₹22</span>
                </span>
                <span className={styles.cashType}>savira cash</span>
              </div>
              <Link href="/checkout" className={styles.payBtn} onClick={toggleCart}>
                Click to Pay{" "}
                <span className={styles.payBtnPrice}>₹{total + tipAmount}</span>
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default FillCartDesktop;

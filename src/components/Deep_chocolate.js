import React from "react";
import warm_beige from "../images/warm-bronze-m4.png";
import warm_beigec1 from "../images/warm-beige-c1.png";
import powder from "../images/translucent.png";
import bronze_4 from "../images/Bronze_4.png";
import { useNavigate } from "react-router-dom";
import { Link, Route, Routes, Switch } from "react-router-dom";

function Deep_chocolate() {
  return (
    <div className="deep_chocolate_div">
      <div className="animation_deep_chocolate">
        <section className="product_info_container">
          <h1 className="Title_">This Products Will Work Fine ON You</h1>
          <div className="img_product_info_div">
            <div className="images_product_info_div">
              <div className="img_div">
                <Link
                  to="https://ujvbeauty.com/product/deep-bronze-m7/"
                  className="warm_beie_img"
                >
                  <img
                    src={warm_beige}
                    alt="warm beige image"
                    className="warm_beie_img"
                  />
                </Link>

                <h6 className="product_category">FOUNDATION</h6>
              </div>
              <h3 className="product_title">Deep Bronze M7</h3>
              <span className="product_price_span">22,99 €</span>
              <div className="paragraph_text_div">
                <p className="product_description">
                  This foundation was specially formulated for women of colour.
                  The formula contains vitamin E, which protects the skin from
                  environmental damage.
                </p>
              </div>
              <Link
                to="https://ujvbeauty.com/product/deep-bronze-m7/"
                className="warm_beie_img"
              >
                <button className="buy_now_btn">Buy Now</button>
              </Link>
            </div>
            <div className="images_product_info_div2">
              <div className="img_div">
                <Link
                  to="https://ujvbeauty.com/product/deep-bronze-c4/"
                  className="warm_beie_img"
                >
                  <img
                    src={warm_beigec1}
                    alt="warm beige image"
                    className="warm_beie_img"
                  />
                </Link>
                <h6 className="product_category">CONCEALER</h6>
              </div>
              <h3 className="product_title">Deep Bronze C4</h3>
              <span className="product_price_span">11,99 €</span>
              <div className="paragraph_text_div">
                <p className="product_description">
                  This concealers are specifically designed for women of colour,
                  caramel, brown and chocolate complexsion, offering a range of
                  shades that perfectly match their skin tones.
                </p>
              </div>
              <Link
                to="https://ujvbeauty.com/product/deep-bronze-c4/"
                className="warm_beie_img"
              >
                <button className="buy_now_btn">Buy Now</button>
              </Link>
            </div>
            <div className="images_product_info_div3">
              <div className="img_div">
                <Link
                  to="https://ujvbeauty.com/product/translucent/"
                  className="warm_beie_img"
                >
                  <img
                    src={powder}
                    alt="warm beige image"
                    className="warm_beie_img"
                  />
                </Link>
                <h6 className="product_category">POWDER</h6>
              </div>
              <h3 className="product_title">Translucent</h3>
              <span className="product_price_span">25,00 €</span>
              <div className="paragraph_text_div">
                <p className="product_description">
                  This powder is specifically designed for women of colour to
                  enhance their natural beauty. it provides a smooth and even
                  finish to the skin.
                </p>
              </div>
              <Link
                to="https://ujvbeauty.com/product/translucent/"
                className="warm_beie_img"
              >
                <button className="buy_now_btn">Buy Now</button>
              </Link>
            </div>
            <div className="images_product_info_div3">
              <div className="img_div">
                <Link
                  to="https://ujvbeauty.com/product/bronze/"
                  className="warm_beie_img"
                >
                  <img
                    src={bronze_4}
                    alt="warm beige image"
                    className="warm_beie_img"
                  />
                </Link>
                <h6 className="product_category">POWDER</h6>
              </div>
              <h3 className="product_title">Bronze</h3>
              <span className="product_price_span">25,00 €</span>
              <div className="paragraph_text_div">
                <p className="product_description">
                  This powder is specifically designed for women of colour, to
                  enhance their natural beauty. it provides a smooth and even
                  finish to the skin.
                </p>
              </div>
              <Link
                to="https://ujvbeauty.com/product/bronze/"
                className="warm_beie_img"
              >
                <button className="buy_now_btn">Buy Now</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Deep_chocolate;

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

import "./Cart.css";

const Cart = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
  const oldTotal = cartItems.reduce(
    (total, item) =>
      total + item.oldPrice * item.quantity,
    0
  );

  const discount = oldTotal - subtotal;
  const delivery = subtotal >= 2999 ? 0 : 99;
  const total = subtotal + delivery;


  return (

    <div className="cart-page">

      <section className="cart-header">

        <p className="cart-small-title">
          YOUR SHOPPING BAG
        </p>

        <h1>
          MY <span>CART</span>
        </h1>

        <p className="cart-description">
          Review your selected styles before placing
          your order with TrendOra.
        </p>

      </section>


      {/* CART HAS ITEMS */}

      {cartItems.length > 0 ? (

        <section className="cart-section">

          <div className="cart-layout">


            {/* PRODUCTS */}

            <div className="cart-products">

              <div className="cart-products-header">

                <div>
                  <p>YOUR ITEMS</p>

                  <h2>
                    SHOPPING BAG
                  </h2>
                </div>

                <span>
                  {cartItems.reduce(
                    (total, item) =>
                      total + item.quantity,
                    0
                  )}

                  {" "}

                  {cartItems.reduce(
                    (total, item) =>
                      total + item.quantity,
                    0
                  ) === 1
                    ? "ITEM"
                    : "ITEMS"}
                </span>

              </div>


              {/* CART ITEMS */}

              {cartItems.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  {/* IMAGE */}

                  <div className="cart-item-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                  </div>


                  {/* DETAILS */}

                  <div className="cart-item-details">

                    <p className="cart-item-category">
                      {item.category}
                    </p>

                    <h3>
                      {item.name}
                    </h3>


                    {/* PRICE */}

                    <div className="cart-item-price">

                      <span>
                        ₹{item.price}
                      </span>

                      {item.oldPrice && (
                        <del>
                          ₹{item.oldPrice}
                        </del>
                      )}

                    </div>


                    {/* QUANTITY */}

                    <div className="quantity-area">

                      <p>QUANTITY</p>

                      <div className="quantity-box">

                        <button
                          onClick={() =>
                            dispatch(
                              decreaseQuantity(item.id)
                            )
                          }
                        >
                          −
                        </button>


                        <span>
                          {item.quantity}
                        </span>


                        <button
                          onClick={() =>
                            dispatch(
                              increaseQuantity(item.id)
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                    </div>

                  </div>


                  {/* ITEM TOTAL */}

                  <div className="cart-item-total">

                    ₹
                    {item.price * item.quantity}

                  </div>


                  {/* REMOVE */}

                  <button
                    className="remove-cart-item"
                    onClick={() =>
                      dispatch(
                        removeFromCart(item.id)
                      )
                    }
                  >
                    ×
                  </button>

                </div>

              ))}


              {/* CONTINUE SHOPPING */}

              <Link
                to="/"
                className="continue-shopping"
              >
                ← CONTINUE SHOPPING
              </Link>

            </div>


            {/* ORDER SUMMARY */}

            <div className="cart-summary">

              <div className="summary-title">

                <p>
                  ORDER DETAILS
                </p>

                <h2>
                  ORDER SUMMARY
                </h2>

              </div>


              {/* PROMO */}

              <div className="promo-section">

                <label>
                  HAVE A PROMO CODE?
                </label>

                <div className="promo-box">

                  <input
                    type="text"
                    placeholder="Enter promo code"
                  />

                  <button>
                    APPLY
                  </button>

                </div>

              </div>


              {/* SUMMARY */}

              <div className="summary-details">

                <div>

                  <span>
                    Subtotal
                  </span>

                  <span>
                    ₹{subtotal}
                  </span>

                </div>


                <div className="discount-row">

                  <span>
                    Discount
                  </span>

                  <span>
                    − ₹{discount}
                  </span>

                </div>


                <div>

                  <span>
                    Delivery
                  </span>

                  <span>

                    {delivery === 0
                      ? "FREE"
                      : `₹${delivery}`}

                  </span>

                </div>

              </div>


              {/* FREE DELIVERY MESSAGE */}

              {delivery > 0 && (

                <div className="free-delivery">

                  Add ₹
                  {2999 - subtotal}
                  {" "}more to get

                  <strong>
                    {" "}FREE DELIVERY
                  </strong>

                </div>

              )}


              {/* TOTAL */}

              <div className="cart-total">

                <span>
                  TOTAL
                </span>

                <strong>
                  ₹{total}
                </strong>

              </div>


              {/* CHECKOUT */}

              <button className="checkout-button">

                PROCEED TO CHECKOUT

              </button>


              {/* SECURE CHECKOUT */}

              <div className="secure-checkout">

                <span>
                  ✓
                </span>

                <p>

                  Secure checkout

                  <br />

                  Your information is protected.

                </p>

              </div>

            </div>

          </div>

        </section>

      ) : (

        /* EMPTY CART */

        <section className="empty-cart">

          <div className="empty-cart-icon">
            🛍
          </div>

          <p className="cart-small-title">
            YOUR SHOPPING BAG
          </p>

          <h2>
            YOUR CART IS <span>EMPTY.</span>
          </h2>

          <p>
            Looks like you haven't added anything
            to your cart yet. Explore our collections
            and find something you love.
          </p>

          <Link
            to="/"
            className="shop-now-button"
          >
            START SHOPPING
          </Link>

        </section>

      )}


      {/* BOTTOM SECTION */}

      <section className="cart-bottom">

        <p>
          TRENDORA
        </p>

        <h2>
          STYLE IS ALWAYS
          <span> IN SEASON.</span>
        </h2>

        <Link
          to="/"
          className="cart-bottom-button"
        >
          EXPLORE COLLECTION
        </Link>

      </section>

    </div>

  );
};

export default Cart;
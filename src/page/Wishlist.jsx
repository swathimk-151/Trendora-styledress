import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist,} from "../redux/wishSlice";

import "./Wishlist.css";

const Wishlist = () => {

  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="wishlist-page">

      <section className="wishlist-header">

        <p className="wishlist-small-title">
          YOUR FAVORITES
        </p>

        <h1>
          MY <span>WISHLIST</span>
        </h1>

        <p className="wishlist-description">
          Save the styles you love and come back to them
          whenever you're ready to shop.
        </p>

      </section>

      {wishlistItems.length > 0 ? (

        <section className="wishlist-products">

          <div className="wishlist-top">

            <div>

              <p>
                YOUR COLLECTION
              </p>

              <h2>
                SAVED ITEMS
              </h2>

            </div>

            <span>
              {wishlistItems.length}{" "}
              {wishlistItems.length === 1
                ? "ITEM"
                : "ITEMS"}
            </span>

          </div>


          <div className="wishlist-grid">

            {wishlistItems.map((product) => (

              <div
                className="wishlist-card"
                key={product.id}>

                {product.discount && (
                  <div className="wishlist-discount">
                    {product.discount}% OFF
                  </div>
                )}

                <button
                  className="remove-wishlist"
                  onClick={() =>
                    handleRemove(product.id)
                  }
                  title="Remove from wishlist"
                >
                  ♥
                </button>

                <div className="wishlist-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                </div>

                <div className="wishlist-info">

                  <p className="wishlist-category">
                    {product.category}
                  </p>

                  <h3>
                    {product.name}
                  </h3>


                  <div className="wishlist-price">

                    <span className="wishlist-current-price">
                      ₹{product.price}
                    </span>

                    {product.oldPrice && (
                      <span className="wishlist-old-price">
                        ₹{product.oldPrice}
                      </span>
                    )}

                  </div>


                  <button
                    className="wishlist-cart-btn"
                  >
                    ADD TO CART
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>

      ) : (

        <section className="empty-wishlist">

          <div className="empty-heart">
            ♡
          </div>

          <p className="empty-small-title">
            YOUR WISHLIST
          </p>

          <h2>
            NOTHING SAVED <span>YET.</span>
          </h2>

          <p>
            You haven't added anything to your wishlist.
            Explore our collections and save the styles
            you love.
          </p>

          <Link
            to="/"
            className="continue-shopping-btn"
          >
            START SHOPPING
          </Link>

        </section>

      )}


      {/* ================= CTA ================= */}

      <section className="wishlist-cta">

        <p>
          FIND YOUR NEXT FAVORITE
        </p>

        <h2>
          YOUR STYLE IS <span>WAITING.</span>
        </h2>

        <Link
          to="/"
          className="wishlist-cta-btn"
        >
          CONTINUE SHOPPING
        </Link>

      </section>

    </div>
  );
};

export default Wishlist;
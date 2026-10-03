import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({children}) => {

  // Get total quantity from Redux cart
  const cartCount = useSelector((state) =>
    state.cart.items.reduce(
      (total, item) => total + item.quantity,
      0
    )
  );

  return (
    <div>
      <header className="navbar">

        {children}

        <div className="logo">
          <span className="highlight">Trend</span>Ora
        </div>

        <nav className="nav-links">

          <Link to="/">Home</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>

          <div className="nav-icons">

            {/* Login */}
            <Link to="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </Link>

            {/* Search */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 1-1.415 1.414l-3.85-3.85a1 1 0 0 1-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>

            {/* Wishlist */}
            <Link to="/wishlist">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-suit-heart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
              </svg>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="cart-icon">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart-check-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
              </svg>

              {/* Cart count */}
              {cartCount > 0 && (
                <span className="cart-count">
                  {cartCount}
                </span>
              )}

            </Link>

          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
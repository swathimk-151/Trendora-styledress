import React, { useState } from "react";
import { addToCart } from "../redux/cartSlice";                                                
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../redux/wishSlice";
import "./Men.css";
import Trouser1 from "../images/Trouser1.jpg"
import Trouser3 from "../images/Trouser3.jpg"
import Trouser4 from "../images/Trouser4.jpg"
import Hoodie1 from "../images/Hoodie1.jpg"
import Hoodie3 from "../images/Hoodie3.jpg"
import Hoodie4 from "../images/Hoodie4.jpg"
const Men = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("ALL");

const wishlistItems = useSelector(
  (state) => state.wishlist.items
);
  const categories = [
    "ALL",
    "T-SHIRTS",
    "SHIRTS",
    "JEANS",
    "TROUSERS",
    "JACKETS",
    "HOODIES",
    "SHORTS"
  ];

  const products = [  
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      category: "T-SHIRTS",
      price: "₹899",
      oldPrice: "₹1,299",
      discount: "31% OFF",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
    },
  
    {
      id: 2,
      name: "Oversized Black T-Shirt",
      category: "T-SHIRTS",
      price: "₹999",
      oldPrice: "₹1,499",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80"
    },
  
    {
      id: 3,
      name: "Premium Polo T-Shirt",
      category: "T-SHIRTS",
      price: "₹1,099",
      oldPrice: "₹1,499",
      discount: "27% OFF",
      image:
        "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=800&q=80"
    },
  
    {
      id: 4,
      name: "Casual Printed T-Shirt",
      category: "T-SHIRTS",
      price: "₹799",
      oldPrice: "₹1,199",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80"
    },
  
  
    // ================= SHIRTS =================
  
    {
      id: 5,
      name: "Premium Casual Shirt",
      category: "SHIRTS",
      price: "₹1,299",
      oldPrice: "₹1,799",
      discount: "28% OFF",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    },
  
    {
      id: 6,
      name: "Linen Casual Shirt",
      category: "SHIRTS",
      price: "₹1,499",
      oldPrice: "₹1,999",
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    },
  
    {
      id: 7,
      name: "Formal Oxford Shirt",
      category: "SHIRTS",
      price: "₹1,399",
      oldPrice: "₹1,899",
      discount: "26% OFF",
      image:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80"
    },
  
    {
      id: 8,
      name: "Slim Fit Casual Shirt",
      category: "SHIRTS",
      price: "₹1,199",
      oldPrice: "₹1,699",
      discount: "29% OFF",
      image:
        "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=800&q=80"
    },
  
  
    // ================= JEANS =================
  
    {
      id: 9,
      name: "Slim Fit Denim Jeans",
      category: "JEANS",
      price: "₹1,599",
      oldPrice: "₹2,199",
      discount: "27% OFF",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80"
    },
  
    {
      id: 10,
      name: "Classic Blue Jeans",
      category: "JEANS",
      price: "₹1,499",
      oldPrice: "₹1,999",
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    },
  
    {
      id: 11,
      name: "Straight Fit Jeans",
      category: "JEANS",
      price: "₹1,699",
      oldPrice: "₹2,299",
      discount: "26% OFF",
      image:
        "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=80"
    },
  
    {
      id: 12,
      name: "Dark Wash Denim",
      category: "JEANS",
      price: "₹1,799",
      oldPrice: "₹2,399",
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?auto=format&fit=crop&w=800&q=80"
    },
  
  
    // ================= TROUSERS =================
  
    {
      id: 13,
      name: "Regular Fit Trousers",
      category: "TROUSERS",
      price: "₹1,199",
      oldPrice: "₹1,599",
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    },
  
    {
      id: 14,
      name: "Classic Formal Trousers",
      category: "TROUSERS",
      price: "₹1,399",
      oldPrice: "₹1,899",
      discount: "26% OFF",
      image: Trouser1
    },
  
    {
      id: 15,
      name: "Slim Fit Black Trousers",
      category: "TROUSERS",
      price: "₹1,299",
      oldPrice: "₹1,699",
      discount: "24% OFF",
      image: Trouser3
    },
  
    {
      id: 16,
      name: "Relaxed Fit Beige Trousers",
      category: "TROUSERS",
      price: "₹1,499",
      oldPrice: "₹1,999",
      discount: "25% OFF",
      image: Trouser4
    },
  
    // Jacket 1
{
  id: 17,
  name: "Classic Leather Jacket",
  category: "JACKETS",
  price: 2499,
  oldPrice: 3999,
  discount: 38,
  image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
},

// Jacket 2
{
  id: 18,
  name: "Premium Bomber Jacket",
  category: "JACKETS",
  price: 2199,
  oldPrice: 3499,
  discount: 37,
  image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80"
},

// Jacket 3
{
    id: 19,
    name: "Casual Denim Jacket",
    category: "JACKETS",
    price: 1899,
    oldPrice: 2999,
    discount: 37,
    image: "https://assets.myntassets.com/h_200%2Cw_200%2Cc_fill%2Cg_auto/h_1440%2Cq_100%2Cw_1080/v1/assets/images/23743060/2023/7/22/e8e0bdf1-1a0c-4eaf-8bee-5dd7fbf4fbfe1690012344428-Celio-Washed-Cotton-Denim-Jacket-541690012344129-1.jpg"
  },

// Jacket 4
{
  id: 20,
  name: "Winter Puffer Jacket",
  category: "JACKETS",
  price: 2799,
  oldPrice: 4499,
  discount: 38,
  image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"
},
  
    // ================= HOODIES =================
  
    {
      id: 21,
      name: "Premium Pullover Hoodie",
      category: "HOODIES",
      price: "₹1,699",
      oldPrice: "₹2,299",
      discount: "26% OFF",
      image: Hoodie1
    },
  
    {
      id: 22,
      name: "Oversized Black Hoodie",
      category: "HOODIES",
      price: "₹1,599",
      oldPrice: "₹2,199",
      discount: "27% OFF",
      image:
        "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=80"
    },
  
    {
      id: 23,
      name: "Classic Grey Hoodie",
      category: "HOODIES",
      price: "₹1,499",
      oldPrice: "₹1,999",
      discount: "25% OFF",
      image: Hoodie3
    },
  
    {
      id: 24,
      name: "Street Style Hoodie",
      category: "HOODIES",
      price: "₹1,799",
      oldPrice: "₹2,399",
      discount: "25% OFF",
      image: Hoodie4
    },
  
  
    // ================= SHORTS =================
  
    {
      id: 25,
      name: "Relaxed Fit Shorts",
      category: "SHORTS",
      price: "₹799",
      oldPrice: "₹1,099",
      discount: "27% OFF",
      image:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80"
    },
  
    {
      id: 26,
      name: "Casual Cotton Shorts",
      category: "SHORTS",
      price: "₹699",
      oldPrice: "₹999",
      discount: "30% OFF",
      image:
        "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&w=800&q=80"
    },
  
    {
      id: 27,
      name: "Denim Shorts",
      category: "SHORTS",
      price: "₹899",
      oldPrice: "₹1,299",
      discount: "31% OFF",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
    },
  
    {
      id: 28,
      name: "Sport Casual Shorts",
      category: "SHORTS",
      price: "₹749",
      oldPrice: "₹1,099",
      discount: "32% OFF",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
    }
  
  ];


  // Filter products

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );


  return (
    <div className="men-page">


      {/* ================= INTRO ================= */}

      <section className="men-intro">

        <p className="men-small-title">
          TRENDORA MEN
        </p>

        <h2>
          STYLE THAT DEFINES <span>YOU.</span>
        </h2>

        <p>
          Explore our latest collection of men's fashion.
          From everyday essentials to smart casual styles,
          find everything you need to upgrade your wardrobe.
        </p>

      </section>


      {/* ================= CATEGORY BUTTONS ================= */}

      <section className="men-categories">

        {categories.map((category) => (

          <button
            key={category}
            className={
              selectedCategory === category
                ? "active-category"
                : ""
            }
            onClick={() =>
              setSelectedCategory(category)
            }
          >
            {category}
          </button>

        ))}

      </section>


      {/* ================= PRODUCTS ================= */}

      <section className="men-products-section">

        <div className="men-products-header">

          <div>

            <p className="men-small-title">
              SHOP MEN'S
            </p>

            <h2>
              {selectedCategory === "ALL"
                ? "LATEST COLLECTION"
                : selectedCategory}
            </h2>

          </div>

          <p>
            Showing {filteredProducts.length} products
          </p>

        </div>


        <div className="men-products-grid">

          {filteredProducts.map((product) => (

            <div
              className="men-product-card"
              key={product.id}
            >

              {/* IMAGE */}

              <div className="men-product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="discount-badge">
                  {product.discount}
                </span>

                <button
  className="product-heart"
  onClick={() =>
    dispatch(toggleWishlist(product))
  }
>
  {wishlistItems.some(
    (item) => item.id === product.id
  )
    ? "♥"
    : "♡"}
</button>

              </div>


              {/* DETAILS */}

              <div className="men-product-details">

                <p className="product-category">
                  {product.category}
                </p>

                <h3>
                  {product.name}
                </h3>

                <div className="product-price">

                  <strong>
                    {product.price}
                  </strong>

                  <del>
                    {product.oldPrice}
                  </del>

                </div>

                <button
  className="add-cart-btn"
  onClick={() => {
    dispatch(addToCart({
      ...product,
      id: `men-${product.id}`
    }));
  }}
>
  ADD TO CART
</button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= OFFER ================= */}

      <section className="men-offer">

        <div>

          <p>LIMITED TIME OFFER</p>

          <h2>
            UPGRADE YOUR
            <span> STYLE.</span>
          </h2>

          <h3>
            GET UP TO 40% OFF
          </h3>

          <button>
            SHOP SALE →
          </button>

        </div>

      </section>

    </div>
  );
};

export default Men;
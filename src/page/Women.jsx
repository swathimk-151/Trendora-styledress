import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toggleWishlist } from "../redux/wishSlice";

import "./Women.css";

const Women = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );
  const categories = [
    "ALL",
    "TOPS",
    "DRESSES",
    "JEANS",
    "SAREES",
    "SKIRTS",
    "JACKETS",
    "ETHNIC WEAR"
  ];

  const products = [

    {
      id: 1,
      name: "Elegant Ribbed Top",
      category: "TOPS",
      price: 899,
      oldPrice: 1499,
      discount: 40,
      image: "https://i.pinimg.com/736x/30/ec/57/30ec57fd605c46a7bfa1e9c83ed5c3a3.jpg"
    },
    {
      id: 2,
      name: "Classic White Top",
      category: "TOPS",
      price: 799,
      oldPrice: 1299,
      discount: 38,
      image: "https://i.pinimg.com/736x/66/18/14/6618147b20354df3e096847021f84452.jpg"
    },
    {
      id: 3,
      name: "Floral Printed Top",
      category: "TOPS",
      price: 999,
      oldPrice: 1699,
      discount: 41,
      image: "https://i.pinimg.com/736x/df/67/62/df676259e200a240e6cc3cee8d1fd729.jpg"
    },
    {
        id: 4,
        name: "Casual Crop Top",
        category: "TOPS",
        price: 699,
        oldPrice: 1199,
        discount: 42,
        image: "https://sheinic.com/cdn/shop/files/Womens_Plain_Black_Crop_Top.jpg?v=1726210316&width=1000"
      },


    {
      id: 5,
      name: "Floral Midi Dress",
      category: "DRESSES",
      price: 1599,
      oldPrice: 2599,
      discount: 38,
      image: "https://i.pinimg.com/736x/82/fb/65/82fb6510b98cae4e3f34d2bbdfe34cd8.jpg"
    },
    {
      id: 6,
      name: "Elegant Black Dress",
      category: "DRESSES",
      price: 1899,
      oldPrice: 2999,
      discount: 37,
      image: "https://i.pinimg.com/236x/2f/81/f0/2f81f0d20b5a5594134533485eef6d52.jpg"
    },
    {
      id: 7,
      name: "Summer Casual Dress",
      category: "DRESSES",
      price: 1299,
      oldPrice: 2199,
      discount: 41,
      image: "https://i.pinimg.com/736x/88/e9/6e/88e96ebf797661acf243c050e8342268.jpg"
    },
    {
      id: 8,
      name: "Party Wear Dress",
      category: "DRESSES",
      price: 2299,
      oldPrice: 3499,
      discount: 34,
      image: "https://i.pinimg.com/736x/f5/a6/74/f5a6747e66ad23fe4d89d1951b0d238f.jpg"
    },
    {
      id: 9,
      name: "High Waist Blue Jeans",
      category: "JEANS",
      price: 1499,
      oldPrice: 2499,
      discount: 40,
      image: "https://i.pinimg.com/736x/d4/a2/2d/d4a22dec37d903a38f416e887a89c38b.jpg"
    },
    {
      id: 10,
      name: "Wide Leg Denim Jeans",
      category: "JEANS",
      price: 1699,
      oldPrice: 2799,
      discount: 39,
      image: "https://i.pinimg.com/736x/97/6b/ad/976badd9f692605003a130be4e49f593.jpg"
    },
    {
      id: 11,
      name: "Straight Fit Jeans",
      category: "JEANS",
      price: 1399,
      oldPrice: 2299,
      discount: 39,
      image: "https://i.pinimg.com/736x/e3/18/ea/e318eac741d08fe77fed032f032d405d.jpg"
    },
    {
      id: 12,
      name: "Black Skinny Jeans",
      category: "JEANS",
      price: 1599,
      oldPrice: 2599,
      discount: 38,
      image: "https://i.pinimg.com/736x/48/1e/a7/481ea7de0862596e89d78311ee033e8e.jpg"
    },
    {
      id: 13,
      name: "Multi-color Rajasthani Saree",
      category: "SAREES",
      price: 1399,
      oldPrice: 2199,
      discount: 36,
      image: "https://i.pinimg.com/736x/4a/35/9b/4a359b53c6eea8d4d876fa5bbb791946.jpg"
    },
    {
      id: 14,
      name: "Royal Teal & Purple Kanjeevaram Silk Saree",
      category: "SAREES",
      price: 1299,
      oldPrice: 2099,
      discount: 38,
      image: "https://i.pinimg.com/736x/14/f7/68/14f768b92fd9af9baabedece43881b2c.jpg"
    },
    {
      id: 15,
      name: "Banarasi Silk Saree",
      category: "SAREES",
      price: 1499,
      oldPrice: 2399,
      discount: 37,
      image: "https://i.pinimg.com/736x/8a/79/20/8a7920ee1f54a0d1c416d95dbda3bd3f.jpg"
    },
    {
      id: 16,
      name: "Chanderi Silk Saree",
      category: "SAREES",
      price: 1199,
      oldPrice: 1899,
      discount: 37,
      image: "https://i.pinimg.com/1200x/c5/b0/fc/c5b0fc829b9f0ec6976100330cc1ecd5.jpg"
    },


    {
      id: 17,
      name: "Pleated Midi Skirt",
      category: "SKIRTS",
      price: 999,
      oldPrice: 1699,
      discount: 41,
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 18,
      name: "Denim Mini Skirt",
      category: "SKIRTS",
      price: 899,
      oldPrice: 1499,
      discount: 40,
      image: "https://i.pinimg.com/736x/15/0f/d0/150fd04372fbc13eb8a48b8ecbffd97c.jpg"
    },
    {
      id: 19,
      name: "Floral Maxi Skirt",
      category: "SKIRTS",
      price: 1199,
      oldPrice: 1999,
      discount: 40,
      image: "https://i.pinimg.com/736x/a1/86/24/a18624894ebafac410ed7ea981fe660b.jpg"
    },
    {
      id: 20,
      name: "Elegant Black Skirt",
      category: "SKIRTS",
      price: 1099,
      oldPrice: 1799,
      discount: 39,
      image: "https://i.pinimg.com/736x/b0/0e/d7/b00ed7a3804fa6249deb1bdc440ca7ac.jpg"
    },


    {
      id: 21,
      name: "Classic Denim Jacket",
      category: "JACKETS",
      price: 1799,
      oldPrice: 2999,
      discount: 40,
      image: "https://i.pinimg.com/1200x/95/99/fd/9599fd3401d985c42e423484f3d232d3.jpg"
    },
    {
      id: 22,
      name: "Faux Leather Jacket",
      category: "JACKETS",
      price: 2199,
      oldPrice: 3499,
      discount: 37,
      image: "https://i.pinimg.com/1200x/58/70/89/58708986cdc293da042ab93ab71d603a.jpg"
    },
    {
      id: 23,
      name: "Oversized Casual Jacket",
      category: "JACKETS",
      price: 1999,
      oldPrice: 3199,
      discount: 38,
      image: "https://i.pinimg.com/736x/97/91/c1/9791c15c10e8fc8fc6bdd22edac19c03.jpg"
    },
    {
      id: 24,
      name: "Winter Puffer Jacket",
      category: "JACKETS",
      price: 2499,
      oldPrice: 3999,
      discount: 38,
      image: "https://i.pinimg.com/736x/ac/a8/5c/aca85c1e6fa46fb50c794b0ee9e527ce.jpg"
    },
    {
      id: 25,
      name: "Elegant Cotton Kurti",
      category: "ETHNIC WEAR",
      price: 999,
      oldPrice: 1599,
      discount: 38,
      image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 26,
      name: "Designer Anarkali",
      category: "ETHNIC WEAR",
      price: 1899,
      oldPrice: 2999,
      discount: 37,
      image: "https://images.unsplash.com/photo-1756483510821-424b7f6e44b0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 27,
        name: "Royal Purple Embroidered Lehenga",
        category: "ETHNIC WEAR",
        price: 2299,
        oldPrice: 3999,
        discount: 43,
        image: "https://i.pinimg.com/736x/f2/9a/eb/f29aeb5866b5ebb4273ab4488fd545eb.jpg"
      },
      {
        id: 28,
        name: "Embroidered Kurti Set",
        category: "ETHNIC WEAR",
        price: 1599,
        oldPrice: 2599,
        discount: 38,
        image: "https://images.unsplash.com/photo-1727417074534-c4d43f57bdbb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
  ];

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="women-page">


      <section className="women-intro">

        <p className="women-small-title">
          TRENDORA WOMEN
        </p>

        <h1>
          STYLE THAT <span>INSPIRES.</span>
        </h1>

        <p className="women-description">
          Discover the latest women's fashion at TrendOra.
          From elegant dresses and stylish tops to denim,
          ethnic wear and statement jackets, find pieces
          designed to express your unique style.
        </p>

      </section>
      <section className="women-categories">

        {categories.map((category) => (

          <button
            key={category}
            className={
              selectedCategory === category
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>

        ))}

      </section>

      <section className="women-products">

        <div className="women-products-header">

          <div>
            <p>SHOP WOMEN'S</p>
            <h2>LATEST COLLECTION</h2>
          </div>

          <span>
            Showing {filteredProducts.length} products
          </span>

        </div>


        <div className="women-product-grid">

          {filteredProducts.map((product) => (

            <div className="women-product-card" key={product.id}>

              <div className="discount-badge">
                {product.discount}% OFF
              </div>

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

              <div className="women-product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>
              <div className="women-product-info">

                <p className="product-category">
                  {product.category}
                </p>

                <h3>
                  {product.name}
                </h3>

                <div className="product-price">

                  <span className="current-price">
                    ₹{product.price}
                  </span>

                  <span className="old-price">
                    ₹{product.oldPrice}
                  </span>

                </div>

                <button
  className="add-cart-btn"
  onClick={() => {
    dispatch(addToCart({
      ...product,
      id: `women-${product.id}`
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


      <section className="women-offer">

        <p>LIMITED TIME OFFER</p>

        <h2>
          GET EXTRA 10% OFF
        </h2>

        <span>
          On orders above ₹2999
        </span>

        <button>
          SHOP NOW
        </button>

      </section>

    </div>
  );
};

export default Women;
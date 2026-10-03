import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toggleWishlist } from "../redux/wishSlice";
import "./Kids.css";

const Kids = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );
  const categories = [
    "ALL",
    "T-SHIRTS",
    "SHIRTS",
    "DRESSES",
    "JEANS",
    "SHORTS",
    "JACKETS",
    "ETHNIC WEAR",
    "SETS"
  ];

  const products = [
    {
      id: 1,
      name: "Printed Cotton T-Shirt",
      category: "T-SHIRTS",
      price: 499,
      oldPrice: 799,
      discount: 38,
      image: "https://i.pinimg.com/1200x/b4/c9/47/b4c94720215482cf993fb109740e1559.jpg"
    },

    {
      id: 2,
      name: "Classic Kids T-Shirt",
      category: "T-SHIRTS",
      price: 449,
      oldPrice: 699,
      discount: 36,
      image: "https://i.pinimg.com/1200x/0c/ae/a9/0caea9967f3ab0adf097951c6e8aba85.jpg"
    },

    {
      id: 3,
      name: "Graphic Print T-Shirt",
      category: "T-SHIRTS",
      price: 549,
      oldPrice: 899,
      discount: 39,
      image: "https://i.pinimg.com/736x/69/b8/8b/69b88bef7b33b5e178500c2dfce097f6.jpg"
    },

    {
      id: 4,
      name: "Striped Casual T-Shirt",
      category: "T-SHIRTS",
      price: 499,
      oldPrice: 799,
      discount: 38,
      image: "https://i.pinimg.com/1200x/09/b2/0e/09b20e13e6d75cd45cf73d356bf83610.jpg"
    },

    {
      id: 5,
      name: "Casual Cotton Shirt",
      category: "SHIRTS",
      price: 699,
      oldPrice: 1099,
      discount: 36,
      image: "https://i.pinimg.com/736x/11/38/b3/1138b38a01e77365bd3a6fee45aaedea.jpg"
    },

    {
      id: 6,
      name: "Checked Casual Shirt",
      category: "SHIRTS",
      price: 749,
      oldPrice: 1199,
      discount: 38,
      image: "https://i.pinimg.com/736x/71/05/09/7105090e1ba1662ad6a25e561c8575b8.jpg"
    },

    {
      id: 7,
      name: "Denim Kids Shirt",
      category: "SHIRTS",
      price: 799,
      oldPrice: 1299,
      discount: 38,
      image: "https://i.pinimg.com/1200x/01/b7/b3/01b7b3927619359e5bec85f551340466.jpg"
    },

    {
      id: 8,
      name: "Festive Cotton Shirt",
      category: "SHIRTS",
      price: 849,
      oldPrice: 1399,
      discount: 39,
      image: "https://i.pinimg.com/736x/7d/8e/aa/7d8eaa687c5b2926d4078b980dee84e0.jpg"
    },


    // ==========================================
    // DRESSES
    // ==========================================

    {
      id: 9,
      name: "Floral Party Dress",
      category: "DRESSES",
      price: 999,
      oldPrice: 1599,
      discount: 38,
      image: "https://i.pinimg.com/736x/8f/79/9d/8f799d722cccb7b0682b0967db540102.jpg"
    },

    {
      id: 10,
      name: "Princess Party Dress",
      category: "DRESSES",
      price: 1199,
      oldPrice: 1899,
      discount: 37,
      image: "https://i.pinimg.com/originals/72/a0/00/72a000cfcc0947f6e0582e4d777c28d7.png"
    },

    {
      id: 11,
      name: "Summer Cotton Dress",
      category: "DRESSES",
      price: 899,
      oldPrice: 1499,
      discount: 40,
      image: "https://i.pinimg.com/736x/6e/0f/58/6e0f580927bb1198da519b6a7e094aaf.jpg"
    },

    {
      id: 12,
      name: "Elegant Party Frock",
      category: "DRESSES",
      price: 1299,
      oldPrice: 1999,
      discount: 35,
      image: "https://i.pinimg.com/736x/78/d4/af/78d4af4f286e08785023340cb7df95f4.jpg"
    },


    // ==========================================
    // JEANS
    // ==========================================

    {
      id: 13,
      name: "Classic Blue Jeans",
      category: "JEANS",
      price: 799,
      oldPrice: 1299,
      discount: 38,
      image: "https://i.pinimg.com/1200x/50/46/e8/5046e8f3da7ef990fc23ed46ba684b42.jpg"
    },

    {
      id: 14,
      name: "Kids Straight Fit Jeans",
      category: "JEANS",
      price: 849,
      oldPrice: 1399,
      discount: 39,
      image: "https://i.pinimg.com/1200x/da/08/6b/da086b680f4806e7a3de0d33d11520e6.jpg"
    },

    {
      id: 15,
      name: "Comfort Denim Jeans",
      category: "JEANS",
      price: 899,
      oldPrice: 1499,
      discount: 40,
      image: "https://i.pinimg.com/736x/af/36/b9/af36b98cb3be3ba0668709ca42bd1c42.jpg"
    },

    {
      id: 16,
      name: "Casual Black Jeans",
      category: "JEANS",
      price: 849,
      oldPrice: 1399,
      discount: 39,
      image: "https://i.pinimg.com/736x/7a/70/d5/7a70d50483a1c05923e75a1efc65a968.jpg"
    },


    // ==========================================
    // SHORTS
    // ==========================================

    {
      id: 17,
      name: "Cotton Casual Shorts",
      category: "SHORTS",
      price: 449,
      oldPrice: 699,
      discount: 36,
      image: "https://i.pinimg.com/1200x/3f/d2/28/3fd228a379f737a666a4c4045dab9ac7.jpg"
    },

    {
      id: 18,
      name: "Denim Shorts",
      category: "SHORTS",
      price: 499,
      oldPrice: 799,
      discount: 38,
      image: "https://i.pinimg.com/736x/1f/e3/a7/1fe3a7993376360992db8e597e1bba79.jpg"
    },

    {
      id: 19,
      name: "Printed Summer Shorts",
      category: "SHORTS",
      price: 399,
      oldPrice: 649,
      discount: 39,
      image: "https://i.pinimg.com/736x/ea/5f/ec/ea5fec62699df9781078105686af8ca2.jpg"
    },

    {
      id: 20,
      name: "Sporty Kids Shorts",
      category: "SHORTS",
      price: 449,
      oldPrice: 699,
      discount: 36,
      image: "https://i.pinimg.com/736x/a5/b4/24/a5b424a15ec43513ba9f979ddd45e940.jpg"
    },


    // ==========================================
    // JACKETS
    // ==========================================

    {
      id: 21,
      name: "Kids Denim Jacket",
      category: "JACKETS",
      price: 999,
      oldPrice: 1599,
      discount: 38,
      image: "https://i.pinimg.com/1200x/cc/13/d7/cc13d7d79fc5e659817e11625c208019.jpg"
    },

    {
      id: 22,
      name: "Casual Bomber Jacket",
      category: "JACKETS",
      price: 1099,
      oldPrice: 1799,
      discount: 39,
      image: "https://i.pinimg.com/1200x/6c/94/e6/6c94e6462275caad80a21c55e20b1ad9.jpg"
    },

    {
      id: 23,
      name: "Winter Puffer Jacket",
      category: "JACKETS",
      price: 1299,
      oldPrice: 2099,
      discount: 38,
      image: "https://i.pinimg.com/736x/05/e6/77/05e677c52c859c18749f31259f8018c0.jpg"
    },

    {
      id: 24,
      name: "Warm Hooded Jacket",
      category: "JACKETS",
      price: 1199,
      oldPrice: 1899,
      discount: 37,
      image: "https://i.pinimg.com/1200x/82/2a/d6/822ad6ec9123056e3e448caac341b9e2.jpg"
    },


    // ==========================================
    // ETHNIC WEAR
    // ==========================================

    {
      id: 25,
      name: "Lehenga Choli",
      category: "ETHNIC WEAR",
      price: 899,
      oldPrice: 1499,
      discount: 40,
      image: "https://i.pinimg.com/1200x/ce/61/c7/ce61c73cd5a32bf30f039525bf9929c3.jpg"
    },

    {
      id: 26,
      name: "Elegant Sharara Dress",
      category: "ETHNIC WEAR",
      price: 1099,
      oldPrice: 1799,
      discount: 39,
      image: "https://i.pinimg.com/736x/df/d0/b1/dfd0b180d5238a94908617522293e8ee.jpg"
    },

    {
      id: 27,
      name: "Kids Festive Kurta",
      category: "ETHNIC WEAR",
      price: 799,
      oldPrice: 1299,
      discount: 38,
      image: "https://i.pinimg.com/1200x/51/b2/63/51b26344abd2115bcdffa350e081a4be.jpg"
    },

    {
      id: 28,
      name: "Embroidered Party Set",
      category: "Sherwanis and Dhoti Kurtas",
      price: 1199,
      oldPrice: 1999,
      discount: 40,
      image: "https://i.pinimg.com/1200x/04/e7/f7/04e7f75cdfda718b664855c555184331.jpg"
    },

    {
      id: 29,
      name: "T-Shirt & Shorts Set",
      category: "SETS",
      price: 699,
      oldPrice: 1099,
      discount: 36,
      image: "https://i.pinimg.com/736x/2d/10/8d/2d108dbe3c8b9bd18477cf2ac4655723.jpg"
    },

    {
      id: 30,
      name: "Printed Co-Ord Set",
      category: "SETS",
      price: 799,
      oldPrice: 1299,
      discount: 38,
      image: "https://i.pinimg.com/736x/0a/a7/74/0aa774cb53da33256bef23d83ec05538.jpg"
    },

    {
      id: 31,
      name: "Casual Cotton Set",
      category: "SETS",
      price: 749,
      oldPrice: 1199,
      discount: 38,
      image: "https://i.pinimg.com/736x/b8/4a/98/b84a98a1fe07cd1d450ccd0997be5777.jpg"
    },

    {
      id: 32,
      name: "Party Wear Set",
      category: "SETS",
      price: 999,
      oldPrice: 1599,
      discount: 38,
      image: "https://i.pinimg.com/1200x/19/fb/de/19fbdecda848a1e742665ed8caa80d91.jpg"
    }

  ];


  // FILTER PRODUCTS

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );


  return (

    <div className="kids-page">

      <section className="kids-intro">

        <p className="kids-small-title">
          TRENDORA KIDS
        </p>

        <h1>
          LITTLE STYLES, <span>BIG SMILES.</span>
        </h1>

        <p className="kids-description">
          Discover adorable and comfortable styles for
          little trendsetters. From everyday essentials
          to festive outfits, find something special for
          every occasion at TrendOra.
        </p>

      </section>

      <section className="kids-categories">

        {categories.map((category) => (

          <button
            key={category}
            className={
              selectedCategory === category
                ? "kids-category-btn active"
                : "kids-category-btn"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>

        ))}

      </section>
      <section className="kids-products">

        <div className="kids-products-header">

          <div>

            <p>SHOP KIDS</p>

            <h2>
              LATEST COLLECTION
            </h2>

          </div>

          <span>
            Showing {filteredProducts.length} products
          </span>

        </div>


        <div className="kids-product-grid">

          {filteredProducts.map((product) => (

            <div className="kids-product-card" key={product.id}>

              <div className="kids-discount-badge">
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

              <div className="kids-product-image">

                <img src={product.image} alt={product.name}/>

              </div>


              {/* DETAILS */}

              <div className="kids-product-info">

                <p className="kids-product-category">
                  {product.category}
                </p>

                <h3>
                  {product.name}
                </h3>


                <div className="kids-product-price">

                  <span className="kids-current-price">
                    ₹{product.price}
                  </span>

                  <span className="kids-old-price">
                    ₹{product.oldPrice}
                  </span>

                </div>


                <button
  className="add-cart-btn"
  onClick={() => {
    dispatch(addToCart({
      ...product,
      id: `kids-${product.id}`
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


      {/* =====================================
          OFFER
      ====================================== */}

      <section className="kids-offer">

        <p>
          SPECIAL OFFER FOR LITTLE TRENDSETTERS
        </p>

        <h2>
          EXTRA 10% OFF
        </h2>

        <span>
          On kids' orders above ₹1999
        </span>

        <button>
          SHOP KIDS
        </button>

      </section>

    </div>

  );

};

export default Kids;
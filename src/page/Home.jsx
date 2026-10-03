import React from 'react'
import "./Home.css";
import fashionhome1 from "../images/fashionhome1.avif"
const categories = [
    {
      title: "WOMEN",
      subtitle: "Elegant styles for every occasion",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "MEN",
      subtitle: "Modern looks. Everyday comfort.",
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "KIDS",
      subtitle: "Cute styles for little trendsetters",
      image:
        "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=900&q=80",
    },
  ];
  const products = [
    {
      name: "Classic Beige Jacket",
      category: "Women",
      price: "₹1,499",
      oldPrice: "₹2,499",
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Premium Casual Shirt",
      category: "Men",
      price: "₹999",
      oldPrice: "₹1,599",
      discount: "38% OFF",
      image:
        "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Classic Denim Outfit",
      category: "Women",
      price: "₹1,299",
      oldPrice: "₹1,999",
      discount: "35% OFF",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Kids Summer Outfit",
      category: "Kids",
      price: "₹799",
      oldPrice: "₹1,199",
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80",
    },
  ];

const Home = () => {
  return (
    <main className="home">

      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-small-text">WELCOME TO TRENDORA</p>

          <h1>
            STYLE THAT
            <br />
            <span>DEFINES YOU.</span>
          </h1>

          <p className="hero-description">
            Discover the latest fashion trends for women, men and kids.
            Refresh your wardrobe with styles made for every moment.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              SHOP COLLECTION <span>→</span>
            </button>

            <button className="secondary-btn">
              EXPLORE NOW
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={fashionhome1}
            alt="Trendora Fashion"/>
          <div className="hero-sale">
            <span>UP TO</span>
            <strong>50%</strong>
            <span>OFF</span>
          </div>
        </div>
      </section>

      <section className="categories-section">

<div className="section-heading">
  <p>EXPLORE COLLECTIONS</p>
  <h2>SHOP BY CATEGORY</h2>
  <span>
    Find your perfect style from our latest collections.
  </span>
</div>

<div className="category-grid">
  {categories.map((category, index) => (
    <div className="category-card" key={index}>

      <img src={category.image} alt={category.title} />

      <div className="category-overlay">
        <p>{category.subtitle}</p>
        <h3>{category.title}</h3>

        <button>
          SHOP NOW <span>→</span>
        </button>
      </div>

    </div>
  ))}
</div>

</section>
<section className="sale-section">

<div className="sale-image">
  <img
    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80"
    alt="Trendora Sale"
  />
</div>

<div className="sale-content">
  <p className="sale-label">LIMITED TIME OFFER</p>

  <h2>
    BIG STYLE.
    <br />
    <span>BIG SAVINGS.</span>
  </h2>

  <p className="sale-description">
    Upgrade your wardrobe with our exclusive seasonal sale.
    Get amazing fashion at prices you'll love.
  </p>

  <div className="sale-discount">
    <strong>UP TO 50%</strong>
    <span>OFF</span>
  </div>

  <p className="sale-note">
    *Offer available on selected products only.
  </p>

  <button className="primary-btn">
    SHOP THE SALE <span>→</span>
  </button>
</div>

</section>
<section className="products-section">

<div className="section-heading">
  <p>OUR FAVORITES</p>
  <h2>BEST SELLING PRODUCTS</h2>
  <span>
    Discover the styles everyone is loving right now.
  </span>
</div>

<div className="products-grid">

  {products.map((product, index) => (
    <div className="product-card" key={index}>

      <div className="product-image">

        <img src={product.image} alt={product.name} />

        <span className="discount-badge">
          {product.discount}
        </span>

        <button className="heart-btn">
          ♡
        </button>

        <button className="quick-btn">
          QUICK VIEW
        </button>

      </div>

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <div className="product-price">
          <strong>{product.price}</strong>
          <del>{product.oldPrice}</del>
        </div>

      </div>

    </div>
  ))}

</div>

<div className="view-all-container">
  <button className="outline-btn">
    VIEW ALL PRODUCTS →
  </button>
</div>
</section>
<section className="trendora-banner">
<div>
  <p>YOUR STYLE. YOUR CHOICE. YOUR TRENDORA.</p>

  <h2>
    WEAR WHAT
    <span> MAKES YOU YOU.</span>
  </h2>
</div>

<button className="white-btn">
  DISCOVER TRENDORA →
</button>
</section>
    </main>
  );
};
export default Home;
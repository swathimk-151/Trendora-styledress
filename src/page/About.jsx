import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">

          <p>WELCOME TO TRENDORA</p>

          <h1>
            FASHION THAT
            <span> FEELS LIKE YOU.</span>
          </h1>

          <p className="about-hero-text">
            Discover timeless style, modern trends and
            everyday fashion designed for everyone.
          </p>

        </div>

      </section>

      <section className="about-story">

        <div className="about-story-image">

          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=80"
            alt="TrendOra fashion collection"
          />

        </div>


        <div className="about-story-content">

          <p className="about-label">
            OUR STORY
          </p>

          <h2>
            WHERE STYLE MEETS
            <span> CONFIDENCE.</span>
          </h2>

          <p>
            TrendOra was created with a simple idea:
            fashion should help you express who you are.
            We bring together modern designs, timeless
            essentials and everyday styles in one place.
          </p>

          <p>
            From men's and women's fashion to adorable
            styles for kids, our collections are carefully
            selected to make dressing up simple,
            comfortable and exciting.
          </p>

          <p>
            Whether you're looking for everyday essentials,
            a statement outfit or something special for an
            occasion, TrendOra is here to help you find
            your style.
          </p>

        </div>

      </section>

      <section className="about-mission">

        <div className="about-mission-content">

          <p className="about-label">
            OUR MISSION
          </p>

          <h2>
            MAKING EVERYDAY
            <span> FASHION BETTER.</span>
          </h2>

          <p>
            Our mission is to make fashion accessible,
            enjoyable and inspiring. We want every customer
            to discover clothing that matches their
            personality, lifestyle and individual taste.
          </p>

          <p>
            We focus on bringing together style, quality,
            comfort and value so that every TrendOra
            shopping experience feels special.
          </p>

        </div>


        <div className="mission-highlight">

          <div>
            <strong>01</strong>
            <h3>STYLE</h3>
            <p>
              Modern designs inspired by today's trends.
            </p>
          </div>

          <div>
            <strong>02</strong>
            <h3>QUALITY</h3>
            <p>
              Carefully selected products made for everyday life.
            </p>
          </div>

          <div>
            <strong>03</strong>
            <h3>VALUE</h3>
            <p>
              Fashion that gives you more for your money.
            </p>
          </div>

        </div>

      </section>

      <section className="why-trendora">

        <div className="why-header">

          <p className="about-label">
            WHY TRENDORA
          </p>

          <h2>
            MORE THAN JUST
            <span> CLOTHES.</span>
          </h2>

          <p>
            We believe shopping should be simple,
            inspiring and enjoyable.
          </p>

        </div>


        <div className="why-grid">

          <div className="why-card">

            <div className="why-number">
              01
            </div>

            <h3>
              CURATED COLLECTIONS
            </h3>

            <p>
              Explore carefully selected styles for
              men, women and kids, all in one place.
            </p>

          </div>


          <div className="why-card">

            <div className="why-number">
              02
            </div>

            <h3>
              EVERYDAY COMFORT
            </h3>

            <p>
              Fashion should look good and feel good.
              Our collections focus on styles for real life.
            </p>

          </div>


          <div className="why-card">

            <div className="why-number">
              03
            </div>

            <h3>
              TRENDING STYLES
            </h3>

            <p>
              Discover fresh looks and modern designs
              that keep your wardrobe up to date.
            </p>

          </div>


          <div className="why-card">

            <div className="why-number">
              04
            </div>

            <h3>
              CUSTOMER FIRST
            </h3>

            <p>
              Your shopping experience matters to us.
              We aim to make every visit simple and enjoyable.
            </p>

          </div>

        </div>

      </section>

      <section className="about-collections">

        <div className="collections-heading">

          <p className="about-label">
            EXPLORE TRENDORA
          </p>

          <h2>
            SOMETHING FOR
            <span> EVERYONE.</span>
          </h2>

        </div>


        <div className="collection-grid">

          <div className="collection-card">

            <img
              src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&q=80"
              alt="Men's fashion"
            />

            <div className="collection-overlay">

              <p>01</p>

              <h3>
                MEN
              </h3>

              <span>
                SHARP. MODERN. CONFIDENT.
              </span>

            </div>

          </div>

          <div className="collection-card">

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
              alt="Women's fashion"
            />

            <div className="collection-overlay">

              <p>02</p>

              <h3>
                WOMEN
              </h3>

              <span>
                ELEGANT. MODERN. EXPRESSIVE.
              </span>

            </div>

          </div>

          <div className="collection-card">

            <img
              src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80"
              alt="Kids fashion"
            />

            <div className="collection-overlay">

              <p>03</p>

              <h3>
                KIDS
              </h3>

              <span>
                PLAYFUL. COMFORTABLE. FUN.
              </span>

            </div>

          </div>

        </div>

      </section>

      <section className="about-quote">

        <div>

          <p>
            "YOUR STYLE IS YOUR STORY."
          </p>

          <span>
            Wear what makes you feel confident.
            Wear what feels like you.
          </span>

        </div>

      </section>

      <section className="about-cta">

        <p>
          READY TO FIND YOUR STYLE?
        </p>

        <h2>
          YOUR NEXT LOOK
          <span> STARTS HERE.</span>
        </h2>

        <button>
          EXPLORE COLLECTION
        </button>

      </section>

    </div>
  );
};

export default About;
import card1 from "../assets/hero-happy-fam.jpg";
import card2 from "../assets/cards-1.jpg";
import girlInRed from "../assets/buy-to-let.jpg";

import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />

      {/* CTA section */}
      <section id="cta-section" className="py-7 cta-section">
        <div className="container-xxl">
          <div className="row gx-5 align-items-center">
            <div className="order-2 order-md-0  col-md-6">
              <img className="post-thumbnail" src={girlInRed}></img>
            </div>
            <div className="order-0 order-md-2 col-md-5">
              <div className="content-container">
                <h1 className="alpha fs-semibold mb-3">
                  Start Your Mortgage Journey
                </h1>
                <p className="lead fs-light">
                  See how much you can borrow with our easy-to-use calculator.
                </p>

                <a href="/calculator" className="btn-circle light">
                  Calculate Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="featured-section" className="py-8 features-section">
        <div className="container-xxl">
          <div className="row gy-5 gx-5 align-items-stretch">
            {[
              {
                image: card1,
                title: "First Time Buyer",
                description:
                  "Compare lenders and cashback offers with our mortgage calculator.",
              },
              {
                image: card2,
                title: "Moving House",
                description:
                  "Decided it’s time to move? Then it’s time to talk to us.",
              },
              {
                image: card1,
                title: "Green Mortgage",
                description:
                  "Get lower fixed rates on energy efficient homes with Green Mortgage.",
              },
              {
                image: card2,
                title: "Switch Mortgage",
                description:
                  "Make the switch as quickly and easily as possible with us.",
              },
            ].map((feat, idx) => (
              <div className="col-md-6 col-lg-3 d-flex" key={idx}>
                <FeatureCard {...feat} className="flex-fill " />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      {/* <section className="py-5 about-section bg-alpha">
        <div className="container">
          <h2 className="h1 fs-semibold white">About Easy Mortgage</h2>
          <p className="lead text-black fs-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam.
          </p>
          <img
            src="https://via.placeholder.com/600x300"
            alt="About us"
            className="img-fluid rounded"
          />
        </div>
      </section> */}

      <section
        id="cta-section-2"
        className="py-7 cta-section bg-alpha-gradient"
      >
        <div className="container-xxl">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-md-6">
              <div className="content-container pe-lg-5">
                <h1 className="white fs-semibold mb-3">
                  Start Your Mortgage Journey
                </h1>
                <p className="lead fs-light white">
                  See how much you can borrow with our easy-to-use calculator.
                </p>

                <Link to="/calculator" className="btn-circle alpha">
                  Calculate Now
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <img className="post-thumbnail" src={girlInRed}></img>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

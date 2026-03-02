import card1 from "../assets/hero-happy-fam.jpg";
import card2 from "../assets/cards-1.jpg";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />

      {/* CTA section */}
      {/* <section className="py-5ection">
        <div className="container">
          <h2 className="">Start Your Mortgage Journey</h2>
          <p className="lead mb-4">
            See how much you can borrow with our easy-to-use calculator.
          </p>
          <Link to="/calculator" className="btn btn-primary btn-lg">
            Calculate Now
          </Link>
        </div>
      </section> */}

      {/* Features section */}
      <section className="py-5 features-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="item-card">
                <div className="img-wrapper">
                  <img src={card1} alt="Feature 1" className="" />
                </div>
                <div className="entry-content">
                  <h5 className="text-primary">Fast Estimates</h5>
                  <p>Get instant borrowing power estimates in seconds.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-card">
                <div className="img-wrapper">
                  <img src={card2} alt="Feature 2" className=" img-fluid" />
                </div>
                <div className="entry-content">
                  <h5 className="text-primary">Simple Inputs</h5>
                  <hr className="w-25 border-3"></hr>
                  <p>Enter your details in a few easy steps.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item-card">
                <div className="img-wrapper">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Feature 3"
                    className=" img-fluid rounded"
                  />
                </div>
                <div className="entry-content">
                  <h5 className="text-primary">Secure &amp; Private</h5>
                  <p>Your information stays confidential and secure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-5 about-section">
        <div className="container">
          <h3>About Easy Mortgage</h3>
          <p>
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
      </section>
    </div>
  );
}

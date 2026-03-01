import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />

      {/* Hero section */}
      <section className="py-5 text-center bg-dark">
        <div className="container">
          <h2 className="mb-3">Start Your Mortgage Journey</h2>
          <p className="lead mb-4">
            See how much you can borrow with our easy-to-use calculator.
          </p>
          <Link to="/calculator" className="btn btn-primary btn-lg">
            Calculate Now
          </Link>
        </div>
      </section>

      {/* Features section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Feature 1"
                className="mb-3 img-fluid rounded"
              />
              <h5>Fast Estimates</h5>
              <p>Get instant borrowing power estimates in seconds.</p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Feature 2"
                className="mb-3 img-fluid rounded"
              />
              <h5>Simple Inputs</h5>
              <p>Enter your details in a few easy steps.</p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Feature 3"
                className="mb-3 img-fluid rounded"
              />
              <h5>Secure &amp; Private</h5>
              <p>Your information stays confidential and secure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-5 bg-light">
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

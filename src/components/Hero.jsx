import heroImage from "../assets/hero-happy-fam.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="hero-section text-white">
        <div className="px-4 px-md-5 container-xxl">
          <div className="row g-0 h-100">
            <div className="col-lg-4 d-flex flex-column justify-content-center py-5">
              <h5 className="mb-0 h-font text-white text-uppercase">
                Simply better
              </h5>
              <h1 className="display-2 text-primary h-font">Mortgages </h1>
              <p className="lead fs-4">
                For your first home, or your next, start your search today with
                PTSB
              </p>
              <Link className="btn-circle dark">Let's Go</Link>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="Happy family"
            className="hero-image"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </>
  );
}

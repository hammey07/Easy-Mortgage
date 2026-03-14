import { Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import heroImage from "../assets/img2.jpg";
export default function Header() {
  return (
    <header>
      {/* <div className="header-container">
        <Container>
          <div className="header-content">
            <h1 className="display-3">Let's Go</h1>
            <h5 className="fs-5">
              We’ve put together a handy calculator for you to calculate your
              purchasing power and monthly payments based on your selected
              interest rates and mortgage term.
            </h5>
          </div>
        </Container>
      </div> */}
      <div className="default-header-section">
        <div className="px-4 px-md-5 container-xxl">
          <div className="row g-0 h-100">
            <div className="col-md-4 d-flex flex-column justify-content-center py-5">
              <h5 className="mb-0 h-font text-white text-uppercase">
                Easy Mortgage
              </h5>
              <h1 className="display-3 text-primary h-font">Let's start </h1>
              <p className="lead fs-5">
                Use our calculator to estimate your purchasing power and monthly
                payments based on your selected interest rate and mortgage term.
              </p>
              <HashLink
                title="Let's Go | Easy Mortgage"
                to="#calculator"
                className="btn-circle light"
              >
                Let's Go
              </HashLink>
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
    </header>
  );
}

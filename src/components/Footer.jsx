export default function () {
  return (
    <footer className="text-white pt-5 pb-4">
      <div className="container-xxl">
        <div className="row">
          {/* Column 1 */}
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <h5 className="text-uppercase white mb-3">Company</h5>
            <hr className="opacity-75 alpha w-25"></hr>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <h5 className="text-uppercase mb-3">Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <h5 className="text-uppercase mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Card */}
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <div className="card bg-alpha-gradient text-white rounded-4">
              <div className="card-body ">
                <h5 className="card-title">Subscribe</h5>
                <p className="card-text">
                  Stay up to date with our newsletter. We promise we don't spam.
                </p>
                <form>
                  <div className="mb-3">
                    <input
                      style={{ border: "none", borderRadius: "15px" }}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <button type="submit" className="btn btn-circle light w-100">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center mt-4">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

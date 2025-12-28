import { Container } from "react-bootstrap";
export default function Header() {
  return (
    <header>
      <div className="header-container">
        <Container>
          <div className="header-content">
            <h1 className="header-title">Easy Mortgage</h1>
            <h3 className="">
              Calculate your monthly payments and see how much you can borrow in
              minutes.
            </h3>
          </div>
        </Container>
      </div>
    </header>
  );
}

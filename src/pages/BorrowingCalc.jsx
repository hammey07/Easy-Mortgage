import BorrowingCalculator from "../components/BorrowingCalculator";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BorrowingCalcPage() {
  return (
    <div className="calculator-page">
      <Header />
      <BorrowingCalculator />
      <Footer />
    </div>
  );
}

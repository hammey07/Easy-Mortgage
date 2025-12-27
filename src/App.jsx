import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import BorrowingCalculator from "./components/BorrowingCalculator";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="">
        <BorrowingCalculator />
      </main>
    </>
  );
}

export default App;

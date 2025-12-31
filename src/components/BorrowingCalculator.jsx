import { use, useState } from "react";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

import { helix } from "ldrs";
helix.register();

const calculateloanResult = (
  income,
  deposit,
  interestRate,
  termYears = 25,
  isFirstTimeBuyer
) => {
  if (!income || !interestRate || !deposit) return null;

  const incomeMultiplier = isFirstTimeBuyer ? 4 : 3.5;
  const MAX_LTV = 0.9;

  // Income-based cap (loan only)
  const incomeBasedMaxLoan = income * incomeMultiplier;

  // Deposit-based cap (90% LTV)
  const ltvBasedMaxLoan = (deposit / (1 - MAX_LTV)) * MAX_LTV;

  // Bank will lend the LOWER of the two
  const maxLoan = Math.min(incomeBasedMaxLoan, ltvBasedMaxLoan);

  const monthlyRate = interestRate / 100 / 12;
  const termMonths = termYears * 12;

  const monthlyRepayment =
    (maxLoan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));

  const totalRepayment = monthlyRepayment * termMonths;
  const totalInterest = totalRepayment - maxLoan;

  return {
    purchasePower: Math.round(maxLoan + deposit),
    maxLoan: Math.round(maxLoan),
    monthlyRepayment: Math.round(monthlyRepayment),
    totalRepayment: Math.round(totalRepayment),
    totalInterest: Math.round(totalInterest),
  };
};

export default function BorrowingCalculator() {
  const [income, setIncome] = useState("");
  const [deposit, setDeposit] = useState("");
  const [term, setTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(4);
  const [mortgageType, setMortgageType] = useState("First Time Buyer");
  const [isLoading, setIsLoading] = useState(false);
  const [loanResult, setLoanResult] = useState(null);

  const rates = [2.0, 2.25, 2.5, 3.0, 3.25, 3.5, 4.0, 4.25, 4.5];
  const types = ["First Time Buyer", "Remortgage (Switcher)"];
  const isFirstTimeBuyer = mortgageType == "First Time Buyer";

  useEffect(() => {
    if (!income || !deposit || !interestRate) return;

    setIsLoading(true);
    const timer = setTimeout(() => {
      const result = calculateloanResult(
        income,
        deposit,
        interestRate,
        term,
        isFirstTimeBuyer
      );
      setLoanResult(result);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // cleanup if inputs change quickly
  }, [income, deposit, interestRate, term, isFirstTimeBuyer]);

  return (
    <>
      <div className="section-body">
        <div className="section-container">
          <div className="section-header">
            <h2 className="calc-title">Mortgage Calculator</h2>
            <p className="calc-subtitle lead">
              Get an estimate of your borrowing capacity
            </p>
          </div>
          <div className="mortgage-calculator">
            <div className="btn-mortgage-type-container">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setMortgageType(type)}
                  className={`btn-mortgage-type ${
                    mortgageType === type ? "active" : ""
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <label htmlFor="Income"> Income (€)</label>
            <div className="income-text">
              <span>€</span>
              <input
                onChange={(e) => setIncome(parseFloat(e.target.value))}
                type="number"
                name=""
                id=""
                value={income}
              />
            </div>
            <label htmlFor="deposit"> Deposit (€)</label>
            <div className="deposit-text">
              <span>€</span>
              <input
                onChange={(e) => setDeposit(parseFloat(e.target.value))}
                type="number"
                name=""
                id=""
                value={deposit}
              />
            </div>
            <label htmlFor="term">Term (Years)</label>
            <select
              className="select-term"
              value={term}
              onChange={(e) => setTerm(parseInt(e.target.value))}
            >
              {[15, 20, 25, 30, 35].map((t) => (
                <option key={t} value={t}>
                  {t} years
                </option>
              ))}
            </select>
            <label className="block mb-1">Select Interest Rate (%)</label>
            *Rates shown are for estimation only.
            <div className="btn-rate-container">
              {rates.map((rate) => (
                <button
                  tabIndex="0"
                  className={`btn-rate ${
                    interestRate === rate ? "active" : ""
                  }`}
                  key={rate}
                  onClick={() => setInterestRate(rate)}
                >
                  {rate.toFixed(2)}%
                </button>
              ))}
            </div>
            <div className="result-container">
              {isLoading && (
                <div className="d-flex">
                  <div className="w-50">
                    <h1 className=""> Gossiping your salary ...</h1>
                    <p>
                      Almost done… if slow, the banks are arguing over interest
                      rates again
                    </p>
                  </div>
                  <div>
                    <l-helix size="200" speed="2.5" color="white"></l-helix>
                  </div>
                </div>
              )}
              {loanResult && deposit && income && !isLoading ? (
                <div>
                  <div className="result-block-1">
                    <div className="small mb-1"></div>
                    <p className="mb-1">Estimated Property Value</p>
                    <h2 className="mb-0">
                      €{loanResult.purchasePower.toLocaleString("en-IE")}
                    </h2>
                    <span className="small">
                      Based on a savings deposit of €
                      {deposit.toLocaleString("en-IE")}
                    </span>
                    <hr />
                  </div>
                  <div className="result-block-2">
                    <div>
                      <p class="mb-1">Estimated Monthly Repayment</p>
                      <h4>
                        €{loanResult.monthlyRepayment.toLocaleString("en-IE")}{" "}
                        monthly
                      </h4>
                    </div>
                  </div>
                  <div className="result-block-3">
                    <div>
                      Mortgage Amount — €
                      {loanResult.maxLoan.toLocaleString("en-IE")}
                    </div>
                    <div>
                      Total Repayment — €
                      {loanResult.totalRepayment.toLocaleString("en-IE")}
                    </div>
                    <div>
                      Total Interest — €
                      {loanResult.totalInterest.toLocaleString("en-IE")}
                    </div>
                    <hr />
                  </div>
                  <p>
                    <em>
                      *This is an estimate only. Actual figures depend on lender
                      criteria, credit history, age, and other financial
                      commitments.
                    </em>
                  </p>
                </div>
              ) : (
                !isLoading && (
                  <div>
                    <h2>Fill in your info and get an instant estimate!</h2>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { use, useState } from "react";
import { Container } from "react-bootstrap";
const calculateLoanDetails = (
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
    maxLoan: Math.round(maxLoan),
    monthlyRepayment: Math.round(monthlyRepayment),
    totalRepayment: Math.round(totalRepayment),
    totalInterest: Math.round(totalInterest),
  };
};

export default function BorrowingCalculator() {
  // const [loan, setLoan] = useState(200000);
  const [income, setIncome] = useState("");
  const [deposit, setDeposit] = useState("");
  const [term, setTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(4);
  const [mortgageType, setMortgageType] = useState("First Time Buyer");
  const rates = [2.0, 2.25, 2.5, 3.0, 3.25, 3.5, 4.0, 4.25, 4.5];
  const types = ["First Time Buyer", "Remortgage (Switcher)"];
  const isFirstTimeBuyer = mortgageType == "First Time Buyer";
  const loanDetails = calculateLoanDetails(
    income,
    deposit,
    interestRate,
    term,
    isFirstTimeBuyer
  );

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
            <div class="btn-mortgage-type-container">
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
            <input
              onChange={(e) => setIncome(parseFloat(e.target.value))}
              type="number"
              name=""
              id=""
              value={income}
            ></input>
            <label htmlFor="deposit"> Deposit (€)</label>
            <input
              onChange={(e) => setDeposit(parseFloat(e.target.value))}
              type="number"
              name=""
              id=""
              value={deposit}
            ></input>
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
            <div className="btn-rate-container">
              {rates.map((rate) => (
                <button
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
            <div className="max-loan">
              {loanDetails ? (
                <div>
                  <p>
                    <strong>Property Value: </strong>€
                    <strong>
                      {(loanDetails.maxLoan + deposit).toLocaleString("en-IE")}
                    </strong>
                    * (The maximum property value you may be able to afford with
                    your €{deposit.toLocaleString("en-IE")} deposit)
                  </p>
                  <p>
                    <strong>Mortgage Amount: </strong>€
                    <strong>
                      {loanDetails.maxLoan.toLocaleString("en-IE")}
                    </strong>
                  </p>
                  <p>
                    <strong>Monthly Repayment: </strong>€
                    {loanDetails.monthlyRepayment.toLocaleString("en-IE")}
                  </p>
                  <p>
                    <strong>Total Repayment: </strong>€
                    {loanDetails.totalRepayment.toLocaleString("en-IE")}
                  </p>
                  <p>
                    <strong>Total Interest: </strong>€
                    {loanDetails.totalInterest.toLocaleString("en-IE")}
                  </p>
                  <p>
                    <em>
                      This is only a guide. Exact amounts may depend on your
                      credit history, age, and other commitments.
                    </em>
                  </p>
                </div>
              ) : (
                <div>
                  <strong> Type in your details above to get started! </strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

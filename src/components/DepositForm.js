
import React from 'react';

function DepositForm({ goals, deposit, setDeposit, makeDeposit }) {
  return (
    <div className="deposit-form">
      <h2 className="section-title">Make a Deposit</h2>
      <div className="form-grid">
        <select
          value={deposit.goalId}
          onChange={(e) => setDeposit({ ...deposit, goalId: e.target.value })}
          className="form-input"
        >
          <option value="">Select Goal</option>
          {goals.map((goal) => (
            <option key={goal.id} value={goal.id}>
              {goal.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Deposit Amount"
          value={deposit.amount}
          onChange={(e) => setDeposit({ ...deposit, amount: e.target.value })}
          className="form-input"
        />
      </div>
      <button
        onClick={makeDeposit}
        className="submit-button deposit-button"
      >
        Deposit
      </button>
    </div>
  );
}

export default DepositForm;

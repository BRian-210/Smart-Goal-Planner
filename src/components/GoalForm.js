
import React from 'react';

function GoalForm({ newGoal, setNewGoal, addGoal }) {
  return (
    <div className="goal-form">
      <h2 className="section-title">Add New Goal</h2>
      <div className="form-grid">
        <input
          type="text"
          placeholder="Goal Name"
          value={newGoal.name}
          onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Target Amount"
          value={newGoal.targetAmount}
          onChange={(e) => setNewGoal({ ...newGoal, targetAmount: e.target.value })}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Category"
          value={newGoal.category}
          onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value })}
          className="form-input"
        />
        <input
          type="date"
          value={newGoal.deadline}
          onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
          className="form-input"
        />
      </div>
      <button
        onClick={addGoal}
        className="submit-button"
      >
        Add Goal
      </button>
    </div>
  );
}

export default GoalForm;

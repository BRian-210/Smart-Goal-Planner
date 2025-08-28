
import React from 'react';
import GoalCard from './GoalCard';

function GoalList({ goals, updateGoal, deleteGoal }) {
  return (
    <div className="goal-list">
      <h2 className="section-title">Your Goals</h2>
      <div className="goal-list-container">
        {goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            updateGoal={updateGoal}
            deleteGoal={deleteGoal}
          />
        ))}
      </div>
    </div>
  );
}

export default GoalList;

import React from 'react';

function GoalCard({ goal, updateGoal, deleteGoal }) {
  const getDaysUntil = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const progress = ((goal.savedAmount || 0) / goal.targetAmount) * 100;
  const daysUntil = getDaysUntil(goal.deadline);
  const isOverdue = daysUntil < 0 && goal.savedAmount < goal.targetAmount;
  const isWarning = daysUntil >= 0 && daysUntil <= 30 && goal.savedAmount < goal.targetAmount;
  const isCompleted = goal.savedAmount >= goal.targetAmount;

  return (
    <div className="goal-card">
      <div className="goal-card-header">
        <input
          type="text"
          value={goal.name}
          onChange={(e) => updateGoal(goal.id, { name: e.target.value })}
          className="goal-name-input"
        />
        <button
          onClick={() => deleteGoal(goal.id)}
          className="delete-button"
        >
          Delete
        </button>
      </div>
      <p>Category: {goal.category}</p>
      <p>
        Progress: ${goal.savedAmount || 0} / ${goal.targetAmount} (
        {progress.toFixed(2)}%)
      </p>
      <p>Deadline: {goal.deadline}</p>
      {isCompleted && (
        <p className="status-completed">Completed!</p>
      )}
      {isOverdue && (
        <p className="status-overdue">Overdue!</p>
      )}
      {isWarning && (
        <p className="status-warning">
          Warning: {daysUntil} days left!
        </p>
      )}
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>
    </div>
  );
}

export default GoalCard;
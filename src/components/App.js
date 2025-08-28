
   import React, { useState, useEffect } from 'react';
   import Overview from './Overview';
   import GoalList from './GoalList';
   import GoalForm from './GoalForm';
   import DepositForm from './DepositForm';

   function App() {
     const [goals, setGoals] = useState([]);
     const [newGoal, setNewGoal] = useState({
       name: '',
       targetAmount: '',
       category: '',
       deadline: '',
     });
     const [deposit, setDeposit] = useState({ goalId: '', amount: '' });

     // Fetch goals on mount
     useEffect(() => {
       fetch('http://localhost:3001/goals')
         .then((res) => {
           if (!res.ok) throw new Error('Failed to fetch goals');
           return res.json();
         })
         .then((data) => {
           // Ensure data is an array; adjust if API returns { goals: [...] }
           const goalsArray = Array.isArray(data) ? data : data.goals || [];
           setGoals(goalsArray);
         })
         .catch((err) => {
           console.error('Error fetching goals:', err);
           setGoals([]); // Fallback to empty array on error
         });
     }, []);

     // Add new goal
     const addGoal = () => {
       if (!newGoal.name || !newGoal.targetAmount || !newGoal.category || !newGoal.deadline) return;
       const goal = {
         ...newGoal,
         id: Date.now().toString(),
         savedAmount: 0,
         createdAt: new Date().toISOString().split('T')[0],
         targetAmount: parseFloat(newGoal.targetAmount),
       };
       fetch('http://localhost:3001/goals', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(goal),
       })
         .then((res) => res.json())
         .then((data) => {
           setGoals([...goals, data]);
           setNewGoal({ name: '', targetAmount: '', category: '', deadline: '' });
         });
     };

     // Update goal
     const updateGoal = (id, updatedFields) => {
       fetch(`http://localhost:3001/goals/${id}`, {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ ...goals.find((g) => g.id === id), ...updatedFields }),
       })
         .then((res) => res.json())
         .then((data) => {
           setGoals(goals.map((g) => (g.id === id ? data : g)));
         });
     };

     // Delete goal
     const deleteGoal = (id) => {
       fetch(`http://localhost:3001/goals/${id}`, {
         method: 'DELETE',
       }).then(() => {
         setGoals(goals.filter((g) => g.id !== id));
       });
     };

     // Make deposit
     const makeDeposit = () => {
       if (!deposit.goalId || !deposit.amount) return;
       const goal = goals.find((g) => g.id === deposit.goalId);
       const newSavedAmount = (goal.savedAmount || 0) + parseFloat(deposit.amount);
       fetch(`http://localhost:3001/goals/${deposit.goalId}`, {
         method: 'PATCH',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ savedAmount: newSavedAmount }),
       })
         .then((res) => res.json())
         .then((data) => {
           setGoals(goals.map((g) => (g.id === deposit.goalId ? data : g)));
           setDeposit({ goalId: '', amount: '' });
         });
     };

     return (
       <div className="app-container">
         <h1 className="app-title">Smart Goal Planner</h1>
         <Overview goals={goals} />
         <GoalForm newGoal={newGoal} setNewGoal={setNewGoal} addGoal={addGoal} />
         <DepositForm goals={goals} deposit={deposit} setDeposit={setDeposit} makeDeposit={makeDeposit} />
         <GoalList goals={goals} updateGoal={updateGoal} deleteGoal={deleteGoal} />
       </div>
     );
   }

   export default App;
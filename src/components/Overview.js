
   import React from 'react';

   function Overview({ goals }) {
     // Ensure goals is an array; default to empty array if not
     const goalsArray = Array.isArray(goals) ? goals : [];
     const totalGoals = goalsArray.length;
     const totalSaved = goalsArray.reduce((sum, goal) => sum + (goal.savedAmount || 0), 0);
     const completedGoals = goalsArray.filter((g) => g.savedAmount >= g.targetAmount).length;

     return (
       <div className="overview">
         <h2 className="section-title">Overview</h2>
         <p>Total Goals: {totalGoals}</p>
         <p>Total Saved: ${totalSaved.toFixed(2)}</p>
         <p>Completed Goals: {completedGoals}</p>
       </div>
     );
   }

   export default Overview
Smart Goal Planner
Overview
The Smart Goal Planner is a React-based web application designed to help users manage their financial savings goals. It provides full CRUD (Create, Read, Update, Delete) functionality for tracking multiple savings goals, making deposits, and monitoring progress. The app uses json-server to simulate a REST API, storing goal data in a db.json file. Key features include adding/editing/deleting goals, tracking progress with visual progress bars, making deposits, and viewing an overview of savings activity with deadline alerts.
Features

Multiple Savings Goals:
Create new goals with name, target amount, category, and deadline.
Update goal details (e.g., name).
Delete unwanted goals.


Progress Tracking:
Displays total saved vs. target amount for each goal.
Visual progress bars showing completion percentage.
Deadline warnings for goals due within 30 days.
Overdue status for unmet goals past their deadline.


Deposits:
Add deposits to specific goals, updating their saved amount.


Overview Dashboard:
Shows total number of goals, total money saved, and number of completed goals.


Data Persistence:
Uses json-server to store and manage goal data in db.json via a REST API.



Tech Stack

Frontend: React (18.2.0), JavaScript, CSS
Backend: json-server (mock REST API)
Build Tool: Create React App (react-scripts)
Dependencies:
react, react-dom, react-scripts
json-server, concurrently (devDependencies)



Project Structure
smart-goal-planner/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── Overview.js
│   │   ├── GoalList.js
│   │   ├── GoalCard.js
│   │   ├── GoalForm.js
│   │   ├── DepositForm.js
│   ├── index.js
│   ├── App.css
├── db.json
├── package.json
├── README.md


public/index.html: Entry point HTML file.
src/components/*.js: React components for the app's UI.
src/App.css: Custom CSS styles for the application.
src/index.js: Renders the React app.
db.json: Mock database for json-server.
package.json: Project metadata and scripts.

Prerequisites

Node.js: Version 16 or higher.
npm: Installed with Node.js.
A modern web browser (e.g., Chrome, Firefox).

Verify Node.js and npm installation:
node -v
npm -v

Setup Instructions

Clone or Download the Repository:

Clone the project or download the source code to your local machine.


Navigate to the Project Directory:
cd smart-goal-planner


Install Dependencies:

Install all required packages:npm install




Set Up db.json:

Ensure db.json exists in the project root with the following structure:{
  "goals": [
    {
      "id": "1",
      "name": "Travel Fund - Japan",
      "targetAmount": 5000,
      "savedAmount": 3200,
      "category": "Travel",
      "deadline": "2025-12-31",
      "createdAt": "2024-01-15"
    },
    ...
  ]
}


The provided db.json includes 10 sample goals.


Run the Application:

Option 1: Run Both Servers Together (recommended):npm run start-all

This uses concurrently to start:
json-server on http://localhost:3001 (serving db.json).
React app on http://localhost:3000.


Option 2: Run Servers Separately:
In one terminal, start json-server:npm run server


In another terminal, start the React app:npm run start






Access the App:

Open http://localhost:3000 in a web browser.
The app should load, displaying the goal dashboard, forms, and overview.



Usage

Add a Goal:
Use the "Add New Goal" form to enter a goal name, target amount, category, and deadline.
Click "Add Goal" to save it to db.json.


Edit a Goal:
Click a goal's name in the goal list to edit it inline; changes are saved automatically.


Delete a Goal:
Click the "Delete" button next to a goal to remove it.


Make a Deposit:
Use the "Make a Deposit" form to select a goal and enter an amount.
Click "Deposit" to update the goal's saved amount.


View Progress:
Each goal shows a progress bar, saved vs. target amount, and deadline status (Completed, Overdue, or Warning if due within 30 days).


Overview:
The overview section displays total goals, total saved, and completed goals.



Troubleshooting

Port Conflicts:
If 3000 or 3001 is in use:lsof -i :3000
kill -9 <PID>

Or change the port in package.json (e.g., --port 3002 for json-server) and update App.js fetch URLs.


json-server Issues:
Ensure db.json exists in the project root.
Verify http://localhost:3001/goals returns an array of goals.
If json-server fails, check for valid JSON in db.json using jsonlint or an online validator.


App Not Loading:
Check the browser console (F12) for errors.
Ensure npm install completed successfully.
Verify all files are in the correct locations as per the project structure.


TypeError: goals.reduce is not a function:
Ensure db.json has a goals key with an array.
Confirm json-server is running and accessible at http://localhost:3001/goals.
Verify App.js and Overview.js use the updated code with array safeguards.



Development

Run Tests:
Run Jest tests (included with react-scripts):npm run test




Build for Production:
Create a production build:npm run build


Serve the build/ folder with a static server (e.g., npx serve -s build).
Note: json-server must run separately for API functionality.



Future Improvements

Add client-side validation for form inputs (e.g., positive amounts, valid dates).
Implement error messages for failed API requests.
Add sorting or filtering for goals (e.g., by category, deadline).
Enhance UI with additional styling or animations.
Add unit tests for components and API interactions.

License
This project is for educational purposes and not licensed for production use.

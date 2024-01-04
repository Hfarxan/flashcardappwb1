Welcome to the Flash Card App, an advanced educational application developed using React. This comprehensive README offers a thorough examination of the project's structure, features, and utilization. The application acts as a sturdy framework for generating, organizing, and reviewing flashcards, elevating the educational journey for its users.

Usage

Utilize the "Add Card" button to include new cards by providing details for both the front (question) and back (answer) sides.

To remove a card, hover over it and click on the delete button. For editing, hover over the card, click on the edit button, and update the question and answer in the presented fields.

Use the search box to explore cards by searching through both question and answer text.

Upon marking at least one checkbox, the "Share" button becomes accessible, allowing you to share card details via email in JSON format.

To rearrange card order, switch the sorting to "Order." Subsequently, reorder cards by dragging and dropping them as needed.

Getting Started

Before getting started, make sure you have the following installations in place:

Node.js: Essential for executing the React application and handling dependencies.
Node Package Manager: Utilized for the management of JavaScript packages.
Git: Required for cloning the repository from GitHub.
JSON-Server: Functions as a simulated backend for storing and administering flashcards.

Installation 

1. Clone the Repository:
git clone https://github.com/Hfarxan/flashcardappwb1.git

2. Install Dependencies:
   npm install

3. Install/Start the JSON server:
npm install -g json-server 
json-server --watch src/json/cards.json --port 3001

4.Start the App
npm start 
Launch your web browser and navigate to http://localhost:3000 to explore the Flash Card App.
5. Start the JSON Server
In a new terminal, execute the following command to initiate JSON-Server, utilizing db.json as the database:
json-server --watch db.json --port 3000
Access the server by visiting http://localhost:3001. Make sure to select a different port if 3000 is already in use by the React application.




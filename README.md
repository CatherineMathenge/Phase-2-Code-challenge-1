# Phase-2-Code-challenge-1

# Bank of Flatiron

This is a React web application for managing transactions. It allows users to see a table of all transactions, add new transactions, and filter transactions based on description. Additionally, it includes bonus features such as sorting transactions by category or description and deleting transactions from the table.

# Installation

1. Clone the repository:
2. Open the project folder:
3. Change into the app directory
4. Install the dependencies:
npm install
5. Running the App
To run the app, use the following command:
npm start

This will start the development server, and you should see the app running in your default web browser at http://localhost:3000/.



# Usage
Viewing Transactions

The main page displays a table of all transactions fetched from the db.json file.
Transactions are displayed with columns for date, description, category, and amount.
The transactions can be filtered by typing into the search bar. Only transactions with descriptions matching the search term will be shown.

Adding New Transactions
To add a new transaction, fill out the form at the top of the page with the date, description, category, and amount.
Click the "Add Transaction" button to submit the form.
The new transaction will be added to the table below with a unique ID.

Sorting Transactions
Use the dropdown menu labeled "Sort by" to choose a sorting option for the transactions.
The available sorting options are "None", "Category", and "Description".
Selecting a sorting option will rearrange the transactions in the table accordingly.

Deleting Transactions
Each transaction in the table has a "Delete" button at the end of its row.
Clicking the "Delete" button will remove the transaction from the table.


# License

This project is licensed under the GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007


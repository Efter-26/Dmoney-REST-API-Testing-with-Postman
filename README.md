# Dmoney API Automation: Comprehensive CRUD and Transaction Testing

This repository contains automated API testing for the Dmoney platform, focusing on both user CRUD operations and transaction scenarios using Postman and Newman, integrated with Node.js for executing tests and generating reports.

## Project Summary

The **Dmoney API Automation** project focuses on automating the integration and API testing for the Dmoney platform, covering both user management and transaction scenarios. This project automates CRUD (Create, Read, Update, Delete) functionalities for user management, alongside various key transaction workflows.

The automated test cases cover:

- **User CRUD Operations**: Create, Read, Update, and Delete functionalities for managing users in the Dmoney system.
  
- **Transaction Scenarios**:
  - **System Deposit to Agent**: The system deposits funds into an agent's account.
  - **Agent Deposit to Customer**: Agents can deposit money into a customer's account.
  - **Customer Send Money to another Customer**: Customers are able to send money to other Customer.
  - **Customer Make Payment to Merchant**: Customers can make payments to a Merchant.

For this project, Postman was used to automate API testing, and Newman was used to execute the test collections and generate reports. Node.js was integrated for running test scripts, and Visual Studio Code (VS Code) was used for managing the codebase and running the `report.js` file for generating detailed test reports.

Users can easily clone the repository, install the necessary dependencies, and run the tests with minimal setup. Detailed API documentation, test case reports, and bug reports provide comprehensive insights into the automated tests.

This automation project significantly reduces manual testing efforts, ensures consistency across critical transaction workflows, and enables continuous integration, making it a valuable tool for ensuring the reliability of the Dmoney platform.

---

## Technologies Used

- **Postman**: For API testing.
- **Newman**: To run Postman collections and generate test reports.
- **Node.js**: Used to manage dependencies and execute scripts.
- **Visual Studio Code (VS Code)**: To run and manage the `report.js` script for generating detailed reports.

---

## Setup & Installation

To run this project on your local machine, follow these steps:

1. **Clone the project**:
    ```bash
    git clone https://github.com/your-username/Dmoney-API-Automation.git
    ```

2. **Install dependencies**:
    Navigate to the root directory of the project and run the following command to install the necessary packages:
    ```bash
    npm install
    ```

3. **Add environment variables**:
    - Add an `.env` file to the project root containing API key.
    - Example of `.env` file:
      ```
      API_KEY=your-api-key
      ```

4. **Run the tests**:
    To execute the automated tests, simply run the following command:
    ```bash
    npm test
    ```

---

## API Documentation

The full **API documentation** for Dmoney can be found [here](#).

---

## Test Case Report

Detailed **Test case** reports can be found [here](#).

---

## Bug Report

During this project I faced some bug/improvement while testing the API endpoints. The actual result did not meet the expected result. I have attached the **Bug report** [here](#).

---

## Output

Below is an image of the test output:
![Test Output](path/to/output-image.png)

---

### Benefits of API Automation:
- Reduces manual testing effort.
- Ensures high reliability and performance of the APIs.
- Enables easier integration into build pipelines for continuous testing.

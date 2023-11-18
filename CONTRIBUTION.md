# Contribution Guidelines

👋 Thank you for considering contributing to Cr8Recipe! We welcome your ideas, bug reports, suggestions, and code contributions.

## Issues and Bug Reports

- If you find a bug, open an issue with a detailed description.
- Including steps to reproduce any bug and information about your environment(OS, Node.js version, etc.).

## Feature Requests

- Feel free to open an issue to propos a new feature.
- Discuss the feature with the maintainers before starting work.

## Code Style

- Follow the coding style used in the project.
- If you're unsure, check the existing code for examples.

## Community Guidelines

- Be respectful and inclusive.
- Provide constructive feedback.

## Code Contributions

## Setting up the Development Environment

1. **Fork the Repository:**

   - Click on the "Fork" button at the top right of this page.
   - Clone the forked repository to your local machine.

   ```bash
   git clone https://github.com/<your-username>/Cr8Recipe-API.git
   cd cr8recipe
   ```

2. **Install dependencies:**

   ```bash
   yarn
   # or
   yarn install
   ```

3. **Set up .env**

   - copy .env.example to .env
   - Set values accordingly

4. **Set up MongoDB**

   - [MongoDB Atlas](https://www.mongodb.com/)

5. **Create a branch:**

   - Create a new branch for your contribution:

   ```bash
   git checkout -b feature/new-feture
   # or
   git checkout -b fix/bug-name
   ```

6. **Make changes:**

   - Work on your contribution. Ensure your changes follow the project's codding style and convention.

7. **Test your changes:**

   - Run the development server:

   ```bash
   yarn start:dev
   ```

   - open localhost:5000/graphql and verify that your changes work as expected.

8. **Commit your changes:**

   - Commit your changes with a descriptive commit message:

   ```bash
   git add .
   git commit -m "Add new feture or fix issue"
   ```

9. **Push Changes:**

   - Push your changes to your forked repository:

   ```bash
   git push origin feture/new-feture
   ```

10. **Create a Pull Request (PR):**
    - Go to the original repository and click on "Compare & pull request."
    - Provide a clear title and description for your PR.
    - Submit the PR for review.

## Code of Conduct

Please rewiew and adhere to the [Code of Conduct](CODEOFCONDUCT.md) to maintain a positive and inclusive community.

Let's make Cr8Recipe awesome together! 🚀👩‍💻👨‍💻 #OpenSource #ContributeNow

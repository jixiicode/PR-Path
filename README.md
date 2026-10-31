# 🚀 PR-Path

<<<<<<< HEAD
**Your first step into open source starts here!**

PR-Path helps beginners learn Git and GitHub and make their first Pull Request (PR) step by step.

## 🌱 What Is Open Source?

Open source means the source code of a project is publicly available, and people can contribute to improving it.

You don't need to be an expert to contribute. You can start by fixing a typo, improving documentation, or making a small change.

## 🛠️ Getting Started

### 1. Create a GitHub Account

Visit [GitHub](https://github.com/) and create an account if you don't already have one.

### 2. Install Git

Download and install Git from [git-scm.com](https://git-scm.com/).

Check whether Git is installed by running this command in your terminal:

```bash
git --version
```

### 3. Fork This Repository

1. Open the [PR-Path repository](https://github.com/jixiicode/PR-Path).
2. Click the **Fork** button in the top-right corner.
3. Click **Create fork**.

A fork is your own copy of the repository where you can make changes.

### 4. Clone Your Fork

Open your fork on GitHub, click **Code**, select **HTTPS**, and copy the URL.

Open your terminal and run:
=======
**Your journey into open source starts with your first Pull Request!**

PR-Path is a beginner-friendly website that helps students and developers understand Git, GitHub, and the process of contributing to open-source projects.

Our goal is to make the first contribution simple, practical, and welcoming for everyone.

## ✨ Features

- Beginner-friendly Git and GitHub learning guide.
- Step-by-step introduction to Pull Requests.
- Small challenges for practicing Git.
- Useful learning resources.
- Community contributor wall.
- Recognition for people making their first contribution.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- JSON
- Git and GitHub

## 💻 Run the Project Locally

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Open the project folder in VS Code.

3. Install the Live Server extension if you haven't already.

4. Right-click `index.html`.

5. Select **Open with Live Server**.

The website should open in your browser.

## 🤝 How to Contribute

We welcome beginners and experienced developers!

### Step 1: Fork the Repository

Click the **Fork** button on the repository's GitHub page.

### Step 2: Clone Your Fork
>>>>>>> 9032a61 (Add PR-Path website and contributor data)

```bash
git clone YOUR_FORK_URL
```

<<<<<<< HEAD
Replace `YOUR_FORK_URL` with the URL you copied.

Move into the project folder:

```bash
cd PR-Path
```

### 5. Create a New Branch

Create a separate branch for your contribution:

```bash
git checkout -b my-first-contribution
```

A branch lets you make changes without directly changing the main branch.

### 6. Make Your First Change

Choose a small improvement, such as:
- Fixing a spelling mistake.
- Improving the README.
- Correcting a broken link.
- Improving the website's design.
- Fixing a small bug.

Save your changes.

### 7. Check Your Changes

Run:

```bash
git status
```

This shows which files you have changed.

### 8. Add and Commit Your Changes

Add your changes:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Describe your changes"
```

A commit saves a snapshot of your changes.

### 9. Push Your Branch to GitHub

Run:

```bash
git push -u origin my-first-contribution
```

Your branch and committed changes will be uploaded to your fork on GitHub.

### 10. Create Your First Pull Request 🎉

1. Open your fork on GitHub.
2. Click **Compare & pull request** if it appears.
3. Make sure the base repository is `jixiicode/PR-Path` and the base branch is `main`.
4. Make sure the head repository is your fork and the compare branch is `my-first-contribution`.
5. Add a title and briefly explain your changes.
6. Click **Create pull request**.

Congratulations! You've submitted your first Pull Request.

## 📌 Contribution Guidelines

- Keep contributions relevant to PR-Path.
- Make small, meaningful changes.
- Test your changes before submitting a PR.
- Write clear commit messages.
- Be respectful and open to feedback.
- Never submit someone else's work as your own.

## 💡 Helpful Resources

- [GitHub Docs: About Pull Requests](https://docs.github.com/en/pull-requests)
- [GitHub Docs: Fork a Repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [Git Documentation](https://git-scm.com/doc)

## 🎯 Your Goal

Don't worry about making a huge contribution.

**Start small, learn by doing, and make your first Pull Request!**

Happy contributing! 💚
=======
### Step 3: Create a Branch

```bash
git checkout -b add-your-name
```

### Step 4: Add Your Contributor Information

Open `contributors.json` and add your information as a new object inside the array.

Example:

```json
{
  "name": "Your Name",
  "username": "your-github-username",
  "message": "My open-source journey starts here!"
}
```

Replace the example values with your own information.

**Important:** Add a comma between objects, but not after the last object. Keep the JSON valid.

### Step 5: Test Your Changes

Run the website using Live Server and confirm that your contributor information appears correctly.

### Step 6: Commit Your Changes

```bash
git add contributors.json
git commit -m "Add my first contribution"
```

### Step 7: Push Your Branch

```bash
git push origin add-your-name
```

### Step 8: Open a Pull Request

Go to your fork on GitHub and click **Compare & pull request**. Explain your changes and submit your PR.

## 📋 Contribution Guidelines

- Add only your own accurate contributor information.
- Use your actual GitHub username.
- Keep your message friendly, respectful, and appropriate.
- Do not delete or modify another contributor's information.
- Keep `contributors.json` valid JSON.
- Make small, focused changes.
- Test your changes before opening a pull request.

## 🎯 Project Goal

PR-Path aims to help beginners gain confidence with Git, GitHub, and open-source collaboration through practical contributions.

## 🌱 Future Improvements

- Automatically recognize merged first-time contributions.
- Add more beginner-friendly challenges.
- Introduce interactive Git practice.
- Improve contributor profiles and community features.

## 💚 Join the Community

Everyone starts somewhere. Make your first contribution with PR-Path!

If you find this project useful, consider giving the repository a ⭐ on GitHub.
>>>>>>> 9032a61 (Add PR-Path website and contributor data)

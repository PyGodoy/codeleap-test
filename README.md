# 🚀 CodeLeap Project

🔗 **Live Demo:** https://codeleap-mikaell.vercel.app/

## 📌 Overview

This project is a social feed application where users can create, view, edit, and delete posts. The app uses frontend-only authentication by storing the username locally and communicates with a test administrative API to manage posts.

The focus is on clean UI, real-time updates, and proper state management.

---

## ✨ Features

### 🔐 Signup Modal
- First screen is a modal asking for a username
- Username is stored locally on the frontend
- Continue button is disabled if the input is empty

### 📝 Create Posts
- Users can create new posts
- Submit button is disabled if any field is empty
- New posts appear automatically at the top of the list

### 🔍 View Posts
- Posts are fetched from a test admin API
- Feed updates dynamically

### ✏️ Edit Posts
- Only posts created by the logged-in user can be edited
- Editing is done through a modal

### 🗑️ Delete Posts
- Only posts created by the logged-in user can be deleted
- A confirmation modal appears before deletion

### 🔒 Ownership Validation
- Edit/Delete actions are visible only for the logged-in user (simple string check)

---

## 🧠 Business Rules

- Posts are ordered by most recent first
- Buttons are disabled when required fields are empty
- All confirmations and edits are handled via modals
- Username persists in frontend storage during the session

---

## 🛠️ Tech Stack

- React
- TypeScript
- CSS / Styled Components
- REST API Integration
- Vercel Deployment

---

## 📦 Running Locally

```bash
git clone https://github.com/your-username/codeleap-test.git
cd codeleap-test
npm install
npm run dev


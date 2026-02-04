🚀 CodeLeap Project

🔗 Live Demo: https://codeleap-mikaell.vercel.app/

📌 Overview

This project is a simple social feed application where users can create, view, edit, and delete posts. It follows frontend-only authentication logic using a username stored locally and communicates with a test administrative API to fetch and submit posts.

The application focuses on clean UI/UX, real-time updates, and proper state handling.

✨ Features
🔐 Signup Modal

First screen is a modal asking for a username

Username is stored locally in the frontend

Continue button is disabled if the input is empty

📝 Create Posts

Users can create new posts

Submit button is disabled if any field is empty

New posts appear automatically at the top of the list

🔍 View & Search Posts

Posts are fetched from a test admin API

Feed updates dynamically

✏️ Edit Posts

Only posts created by the logged-in user can be edited

Editing is done through a modal

🗑️ Delete Posts

Only posts created by the logged-in user can be deleted

A confirmation modal appears before deletion

🔒 Ownership Validation

Edit/Delete buttons are shown only for the logged-in user (simple string comparison)

🧠 Business Rules

Posts are ordered by most recent first

Buttons are disabled when required fields are empty

All confirmation and edit flows are handled via modals

Username persists during the session in frontend state/storage

🛠️ Tech Stack

React

TypeScript

CSS / Styled Components (or equivalent)

REST API integration

Vercel Deployment

📦 How to Run Locally
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev

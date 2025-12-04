# Frontend Assessment Project

## Project Overview

This simple web application is built with **Next.js, React, TypeScript, and Material-UI**.  
The app allows the users to **add, view, edit, and delete tasks**. Each task includes:

- Task Name
- Task Type
- Task Status (Pending, In Progress, Completed)

The application consists of multiple pages:

- **Home Page** – Initial landing page.
- **About Page** – A sample about page to explain the website further.
- **Tasks Page** – Users can add new tasks.
- **Posts Page** – Displays all tasks with the option to edit or delete them.
- **Fun Facts Page** – Displays random facts fetched from a public API. https://uselessfacts.jsph.pl/

State management is handled via **React Context** and tasks are saved in **localStorage**, so they remain available even after a page refresh or upon the closing/reopening of the app.

---

## Setup Instructions

1. **download file**


2. **Install the dependencies**

npm install
  
4. **Run the development server**
   npm run dev
  
5. **Open your browser at http://localhost:3000 to view the app.**
  

## Public API Used

**Random Facts API: GET /api/v2/facts/random?language=en**
*Used to fetch and display interesting facts dynamically on the Fun Facts page.*

## Features Implemented

- Add tasks using a form.
- Edit tasks with inline editing using a controlled form.
- Delete tasks with a button.
- Task status dropdown for consistent input.
- Color-coded tasks based on status:
   Pending = Yellow
   In Progress = Blue
   Completed = Green
- save tasks in localStorage to maintain data on refresh.
- Modular and reusable components (TaskList, TaskForm, Navbar).

## Known Issues and Challenges

1. **Input Validation**

- I planned to use Yup for input validation, but was not fully familiar with it.
- Learned more about Yup during research and tried to integrate it in this project.

2. **API Integration**

- Initially, the project requirements mentioned integrating a public API.
- I explored using the Random Facts API and learned how to fetch data, but kept it optional for simplicity.

3. **Page Refresh Issue**

- When the Posts page was refreshed, tasks disappeared.
- Solved by storing tasks in localStorage, ensuring they persist even after a refresh or app restart.

4. **Not Implemented / Left Out**

- GraphQL API integration was not included due to lack of familiarity.
- Advanced state management libraries like Zustand were not used; used React Context instead.

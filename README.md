# Todo List

## Table of Contents
1. [Project Overview](#project-overview)
1. [Deployed Site](#deployed-site)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Featured Code](#featured-code)
6. [License](#license)
7. [Contributors](#contributors)
8. [Questions](#questions)

## Project Overview
A simple todo list application built with React, featuring task creation, completion toggling, and deletion. Utilizes React hooks for state management and Bootstrap for responsive design.

## Deployed Site
[Deployed Site:](https://todo-react-jesse.netlify.app/)

## Features
- **Create New Todos**: Users can input new tasks which are immediately added to the list.
- **Mark as Complete**: Click on a todo to toggle its completion status, visually indicated by a strikethrough.
- **Delete Todos**: Easily remove tasks that are no longer needed with a delete button.
- **Mobile First**: Designed with a mobile-first approach, ensuring usability across all device sizes.

## Technologies Used
### **Frontend**:
- React
- Bootstrap for styling
- ESLint for code quality

## Setup Instructions
### Prerequisites
- Node.js (v14+)

### Installation
1. Clone the repository:
   ```bash
   git clone [Repo URL]
   ```
2. Navigate to the project directory:
   ```bash
   cd TodoList-React
   ```
3. Install dependencies:
   ```bash
   npm run install
   ```
5. Start the development environment:
   ```bash
   npm run dev
   ```
6. Access the app at `http://localhost:5173`.

## Featured Code
Ternary applies class to alter gui display
``` 
className={`todo ${todo.completed ? "completed" : ""}`}
```
Prevent default and handle input
```
const handleSubmit = e => {
    e.preventDefault();
    if (newTodoText.trim()) {
      addTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };
```

## License
This project is licensed under the MIT license.

## Contributors
- [Jesse Anderson](https://github.com/Vtencouchclimbr)

## Questions
If you have any questions, please reach out to me:
- Github: [vtencouchclimbr](https://github.com/vtencouchclimbr)
- Email: lmntrylmnt@gmail.com

## Project Management Application (PMA)
The Project Management Application (PMA) is a web-based tool designed to help teams efficiently plan, track, and collaborate on projects and tasks. It simplifies project management, enabling teams to stay organized, meet deadlines, and communicate effectively.

## Authors:
This project was created by;
  1. Daniel Orwenjo
  2. Elsie Oduor
  3. Ian Odhiambo
  4. Adrian Were

## Table of Contents
- Features
- Database Architecture
- Getting Started
- Prerequisites
- Installation
- Usage
- Contributing
- License

## Features
1. **User Authentication**: Secure user registration and login functionality.
2. **Project Management**: Create and manage projects with details such as project name, description, start date, and end date.It also allows create, edit and delete functionality.
3. **Task Management**: Add tasks to projects, assign tasks to team members, and track their status (e.g., to-do, in progress, completed). It also allows create, update and delete functionality.
4. **Navigation**: Access a user-friendly navbar that searches for  tasks or projects and displays the user profile.
5. **Dashboard**: Access a user-friendly dashboard that allows toggling between Project and Task
6. **User Roles**: Differentiate between administrators, project managers, and team members for role-specific functionality.

# Database Architecture
The database architecture uses a relational database (SQLite) to store user information, project details, and task data. The relationships between models enable efficient querying and retrieval.

The User Model stores user credentials and establishes a one-to-many relationship with both projects and tasks. Each user can own multiple projects and be assigned to many tasks

The Project Model contains project information, including its owner. It has a one-to-many relationship with tasks, as each project can have multiple tasks. It also establishes a many-to-many relationship with the User Model to define team members.

The Task Model stores details about individual tasks, including their assignment to team members and the project they belong to. It belongs to a specific project.

## Getting Started
# Prerequisites
Before running the PMA, ensure you have the following software installed:
  - Python
  - Flask
  - Node.js and npm
  - React

## Installation
**{To add}**

## Usage
1. **User Registration**: Create a new account or log in with existing credentials.
2. **Project Management**: Create projects, assign project managers, delete projects, and edit projects
3. **Task Management**: Add tasks to projects, assign tasks to team members, and update task statuses.
4. **Dashboard**: View your assigned tasks, projects and project progress.
5. **User Roles**: Admins, project managers, and team members have role-specific permissions.

## Contributing
Contributions are welcome! Please follow these guidelines when contributing to the project:

- Fork the repository and create your branch from main.
- Ensure your code adheres to the project's coding standards.
- Test your changes thoroughly.
- Create a pull request with a clear description of your changes.

## License
This project is licensed under the MIT Licence
# project_management_app

# Database Architecture
The database architecture uses a relational database (SQLite) to store user information, project details, and task data. The relationships between models enable efficient querying and retrieval.

The User Model stores user credentials and establishes a one-to-many relationship with both projects and tasks. Each user can own multiple projects and be assigned to many tasks

The Project Model contains project information, including its owner. It has a one-to-many relationship with tasks, as each project can have multiple tasks. It also establishes a many-to-many relationship with the User Model to define team members.

The Task Model stores details about individual tasks, including their assignment to team members and the project they belong to. It belongs to a specific project.

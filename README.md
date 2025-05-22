# 👥 User Management API (Express + PostgreSQL)

A RESTful API built with **Express.js** and **PostgreSQL** to manage users — including creating, reading, updating, and deleting user records (CRUD).

## 📦 Features

- Create new users
- Retrieve one or all users
- Update user details
- Delete users
- PostgreSQL integration using `pg` module
- Clean modular structure

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **pg (node-postgres)**
- (Optional) **dotenv** for environment variable management

## 🧰 Setup Instructions

### 1. Clone the project

```bash
git clone https://github.com/your-username/user-api.git
cd user-api
```
### 2. Install dependencies
npm install

### 3. Configure environment variables
Create a .env file:

PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/your_database

### 4. Start the server

npm run dev  # Uses nodemon
# or
npm start    # For production

## 🗃️ PostgreSQL Setup

Run this SQL to create the users table:
´´´
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);
´´´



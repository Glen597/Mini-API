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
#### 📡 API Endpoints

| Method 	| Endpoint   	| Description         	|
|--------	|------------	|---------------------	|
| GET    	| /users     	| Get all users       	|
| GET    	| /users/:id 	| Get a specific user 	|
| POST   	| /users     	| Create a new user   	|
| PUT    	| /users/:id 	| Update user by ID   	|
| DELETE 	| /users/:id 	| Delete user by ID   	|

## Example Request
#POST /users
´´´ json
{
  "name": "Alice",
  "email": "alice@example.com"
}
´´´
#Response
´´´ json
{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com"
}
´´´
####🔒 Future Enhancements

* User authentication (JWT or OAuth)

* Input validation (e.g., with express-validator or Joi)

* Role-based access (admin/user)

* Docker integration for easier deployment

* Unit and integration tests

### 👤 Author
Developed by Benoit Mbole


---

If you want, I can generate a boilerplate structure (files and code) matching this README. Would you like that?

# MERN User Account System - Backend

This is the **backend** for a **MERN (MongoDB, Express, React, Node.js) User Account System**, where users can create and manage their profiles, including personal details, social media links, education history, and more.

## 🚀 Features
- **User Authentication** (Register, Login, Password Hashing)
- **CRUD Operations for User Profiles**
- **Dynamic Updates for User Sections** (Personal Info, Bio, Social Media, Education, etc.)
- **MongoDB with Mongoose**
- **Express.js REST API**
- **JWT-Based Authentication**
- **Secure Password Storage (bcrypt.js)**

---

## 🛠️ Installation

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/abhishekn1208/Account_Management
cd Account_Management
npm install

1️⃣ Authentication
Method	Endpoint	Description	Body Params
POST	/api/auth/register	Register a new user	{ firstName, lastName, email, password }
POST	/api/auth/login	Login user & get JWT	{ email, password }

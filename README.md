Here's the updated README file with your new deployment details:

---

# CRUD Backend Project

A simple backend application using the **MEN** (MongoDB, Express.js, Node.js) stack for performing basic CRUD (Create, Read, Update, Delete) operations. This project provides a RESTful API for managing product data in a MongoDB database.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Deployed URL](#deployed-url)
- [Developer](#developer)
- [Contributing](#contributing)
- [License](#license)

## Features
- Create, Read, Update, and Delete (CRUD) operations for product management.
- RESTful API design.
- MongoDB for data storage.
- Error handling and validation.
- Environment variable support using `.env` files.

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Postman](https://www.postman.com/) (optional, for testing API endpoints)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/mayurk224/CURD-API-MEN
   cd CURD-API-MEN
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     ```

4. **Connect to MongoDB**:
   - You can use a local MongoDB instance or a cloud-based solution like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Running the Server
Start the server with:
```bash
npm run start
```
The server will run at `http://localhost:3000` (or your specified PORT). When deployed, it will use the deployed URL.

### API Endpoints

| HTTP Method | Endpoint                    | Description               |
|-------------|-----------------------------|---------------------------|
| GET         | `/api/products`            | Get all products          |
| GET         | `/api/products/:id`        | Get a single product by ID|
| POST        | `/api/products`            | Create a new product      |
| PUT         | `/api/products/:id`        | Update a product by ID    |
| DELETE      | `/api/products/:id`        | Delete a product by ID    |

#### Sample Request & Response

- **GET** `/api/products`

  **Response**:
  ```json
  [
    {
      "_id": "5f5c2c7e4f1a3d2c45678901",
      "name": "Sample Product",
      "quantity": 10,
      "price": 199.99
    }
  ]
  ```

- **POST** `/api/products`
  
  **Request Body**:
  ```json
  {
    "name": "New Product",
    "quantity": 30,
    "price": 99.99
  }
  ```

  **Response**:
  ```json
  {
    "_id": "5f5c2c7e4f1a3d2c45678902",
    "name": "New Product",
    "quantity": 30,
    "price": 99.99
  }
  ```

## Folder Structure
```
crud-backend/
├── controllers/
│   └── product.controller.js
├── models/
│   └── product.model.js
├── routes/
│   └── product.router.js
├── .env
├── .gitignore
├── package.json
├── index.js
└── README.md
```

## Deployed URL
- The backend API is live at: [https://curd-api-men.onrender.com/api/products](https://curd-api-men.onrender.com/api/products)

## Developer
- **Mayur Dilip Kamble**
  - **Email**: [mayurkamble0250@gmail.com](mailto:mayurkamble0250@gmail.com)
  - **GitHub**: [mayurk224](https://github.com/mayurk224)

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).

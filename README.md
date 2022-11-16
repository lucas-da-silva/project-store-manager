# Welcome to the Store Manager Project repository!

## Introduction
I developed the API following the **MSC** (**m**odel-**s**ervice-**c**ontroller) architecture.

The API is a dropshipping sales management system where you can create, view, delete and update products and sales. MySQL database is used for data management. Unit tests were also developed for all application layers. Also, the API is RESTful.

*Express* was used to create the routes and manage them, *Sinon* was used to mocha the functions, both internal and database access. The *Chai* was used to create the tests.

## Installation

<details>
<summary><strong>Installation instructions</strong></summary>

### Clone the repository
```bash
git clone git@github.com:lucas-da-silva/project-store-manager.git
```

### Enter the repository

```bash
cd project-store-manager
```

### Climbing the containers (docker is needed)
```bash
docker-compose up -d
```

### Entering the Node.js container
```bash
docker exec -it store_manager bash
```

### Install dependencies
```bash
npm install
```

### Creating the database and tables
```bash
npm run migration
```

### Inserting data into tables
```bash
npm run seed
```

### Run the application 
```bash
npm start
```
> You can use [Thunder Client](https://www.thunderclient.com/) or [Insomnia](https://insomnia.rest/) (or whatever) to check the API.

### Run the tests
```bash
npm test
```

### To stop containers

```bash
docker-compose down
```

</details>

## Aplication
As the MSC software architecture was used, the database access functions are in the [Model](./src/models/) layer, the business rules validations are in the [Service](./src/services/) layer, and the contact with request and return are in the [Controller](./src/controllers/) layer.

In the routes directory we have the definition of all routes. And they are the following:

### Products routes

- `GET /products`: all products are returned;

- `GET /products/:id`: only the product with the `id` present in the URL is returned;

- `GET /products/search`: returns products based on `q` from the database, if it exists;

  <details>
    <summary>The query params of the request should follow the format below:</summary>
    
    ```
    http://localhost:PORT/products/search?q=Martelo
    ```

  </details>

- `DELETE /products/:id`: only the product with the `id` present in the URL is deleted;

- `PUT /products/:id`: only the product with the `id` present in the URL is updated;
  <details>
    <summary>The request body should follow the format below</summary>
    
    ```
    {
      "name": "Martelo do Batman"
    } 
    ```

  </details>

- `POST /products`: register a new product in the database;
  <details>
    <summary>The request body should follow the format below</summary>
    
    ```
    {
      "name": "ProdutoX"
    }
    ```

  </details>

### Sales routes

- `GET /sales`: all sales are returned;

- `GET /sales/:id`: only the sale with the `id` present in the URL is returned;

- `DELETE /products/:id`: only the sale with the `id` present in the URL is deleted;

- `PUT /sales/:id`: only the sale with the `id` present in the URL is updated;
  <details>
    <summary>The request body should follow the format below</summary>
    
    ```
    [
      {
        "productId": 1,
        "quantity": 10
      },
      {
        "productId": 2,
        "quantity": 50
      }
    ]
    ```

  </details>

- `POST /sales`: register a new sale, being possible to register several products through the same request;
  <details>
    <summary>The request body should follow the format below</summary>
    
    ```
    {
      "name": "ProdutoX"
    }
    ```

  </details>

There are middlewares that were created to validate the data sent in the requests.

And also, unit tests for each of these **routes**, **middlewares** and **validations** in the [tests/unit](./tests/unit/) directory.


## Technologies used
<p>
<a href='https://nodejs.org/en/'>
  <img src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white' alt='Node.js' />
</a>
<a href='https://expressjs.com/'>
  <img src='https://img.shields.io/badge/Express.js-404D59?style=for-the-badge' alt='Express' />
</a>
<a href='https://www.mysql.com/'>
  <img src='https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white' alt='MySQL' />
</a>
<a href='https://www.docker.com/'>
  <img src='https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' alt='Docker' />
</a>
</p>

- [Sinon](https://sinonjs.org/)
- [Chai](https://www.chaijs.com/)
- [nodemon](https://nodemon.io/)

> I got the badges from github from [Iuri](https://github.com/iuricode);

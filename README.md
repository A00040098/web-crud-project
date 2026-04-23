Web CRUD Project  Product & Category Manager

Project Overview

This project is a database-driven web application developed for the Web User Experience and Database Design (WADT H1002) module at Technological University Dublin.

The application allows users to manage products and categories using full CRUD (Create, Read, Update, Delete) functionality. It integrates a frontend interface with a Supabase backend database.

Features

Product Management

Users can add new products with a name, price, quantity, and category. They can view all products in a table, edit existing product details, and delete products.

Category Management

Users can add new categories, view a list of categories, delete categories, and assign categories to products.

Dashboard

The dashboard displays the total number of products and the total number of categories.

Technologies Used

The frontend is built using HTML, CSS, and JavaScript. The backend database is managed using Supabase with PostgreSQL. Version control is handled using GitHub, and the application is deployed using GitHub Pages.

Live Demo

The web application is available at https://a00040098.github.io/web-crud-project/
The Supabase project can be accessed at https://app.supabase.com/project/olbccllfaucjpjnpzjob

Database Structure

The application uses two related tables.

Categories

The categories table contains an id as the primary key, a name, a description, and a created_at timestamp.

Products

The products table contains an id as the primary key, a name, a price, a quantity, a category_id which is a foreign key referencing the categories table, and a created_at timestamp.

Relationship

One category can be linked to many products, forming a one-to-many relationship.

SQL Database Setup

The database was created using SQL in Supabase.

CREATE TABLE products (
id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
name text NOT NULL,
price numeric,
quantity int DEFAULT 0,
category_id uuid,
created_at timestamp DEFAULT now()
);

CREATE TABLE categories (
id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
name text NOT NULL,
description text,
created_at timestamp DEFAULT now()
);

ALTER TABLE products
ADD CONSTRAINT fk_category
FOREIGN KEY (category_id)
REFERENCES categories(id)
ON DELETE SET NULL;

The full SQL script is available in the file database.sql.

CRUD Functionality

The application supports creating new products and categories, reading and displaying existing data, updating product details, and deleting products and categories.

Project Structure

The project contains a css folder with style.css, a js folder containing supabaseClient.js, products.js, categories.js, and utils.js, and several HTML pages including index.html, add-product.html, edit-product.html, view-products.html, and categories.html. It also includes the database.sql file and this README file.

How to Run

Clone the repository using the command git clone https://github.com/A00040098/web-crud-project.git

Open the project folder and run it using Live Server or by opening index.html in a web browser.

Security

Supabase Row Level Security is enabled and policies allow insert, select, update, and delete operations.

Learning Outcomes Achieved

This project demonstrates the ability to develop a database-driven web application, implement CRUD operations, integrate a frontend with a backend database, and design a relational database using foreign keys.

Author

Student ID: A00040098

Submission Checklist

The project includes a GitHub repository, a live web application, a Supabase database, an SQL script, an ERD, and a presentation recording.

Conclusion

This project demonstrates a full-stack web application with CRUD functionality, relational database design, and integration with Supabase.

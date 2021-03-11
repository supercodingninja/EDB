DROP DATABASE IF EXISTS EDB_db;
CREATE DATABASE EDB_db;

USE EDB_db;

CREATE TABLE BigTimeEst_Burgers (
	id INT AUTO_INCREMENT NOT NULL,
    Burger_name VARCHAR(100) NOT NULL,
    not_devoured BOOLEAN NOT NULL default 0,
    devoured BOOLEAN NOT NULL default 0,
    Primary Key(id)
);
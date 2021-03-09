DROP DATABASE IF EXISTS EDB_db;
CREATE DATABASE EDB_db;

USE EDB_db;

CREATE TABLE BigTimeEst_Burgers (
	id INT AUTO_INCREMENT NOT NULL,
    Burger_name NOT NULL VARCHAR(100),
    is_favorite BOOLEAN NOT NULL default 0,
    Primary Key(id)
);
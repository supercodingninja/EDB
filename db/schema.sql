CREATE DATABASE EDB_db;

USE EDB_db;

CREATE TABLE BigTimeEst_Burgers(
    id INTEGER NOT NULL AUTO_INCREMENT,
    Burger_Name VARCHAR(50) NOT NULL,
    is_favorite BOOLEAN DEFAULT false,

    PRIMARY key(id)
);
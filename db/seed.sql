USE EDB_db;

--  Inserting the name of the burgers --
INSERT INTO BigTimeEst_Burgers (Burger_name) VALUES ("Colosus Burger"), ("MEGA-FAT Burger"), ("4-D-Hommies Burger");

-- Inserting Booleans w/ Burgers' names.  --
INSERT INTO BigTimeEst_Burgers(Burger_name, not_devoured)
VALUES("Colosus Burger", false);

INSERT INTO BigTimeEst_Burgers(Burger_name, not_devoured)
VALUES("MEGA-FAT Burger", false);

INSERT INTO BigTimeEst_Burgers(burger_name, not_devoured)
VALUES("4-D-Hommies Burger", true);
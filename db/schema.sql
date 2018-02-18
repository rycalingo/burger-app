CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	ID int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    date DATETIME DEFAULT Now(),
	PRIMARY KEY (ID)
);
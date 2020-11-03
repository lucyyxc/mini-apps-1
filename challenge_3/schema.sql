DROP DATABASE shop;
CREATE DATABASE shop;
USE shop;

CREATE TABLE step1 (
  id INT(11) primary key not null auto_increment,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);

CREATE TABLE step2 (
  id INT(11) primary key not null auto_increment,
  addressline1 VARCHAR(100),
  addressline2 VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(100),
  zip VARCHAR(100),
  phone INT(11)
);

CREATE TABLE step3 (
  id INT(11) primary key not null auto_increment,
  card INT(11),
  date INT(11),
  CVV INT(3),
  zip INT(3)
);
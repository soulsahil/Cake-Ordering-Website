SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


create table signup(
  first_name varchar(10) NOT NULL,
  last_name varchar(10) NOT NULL,
  username varchar(15) NOT NULL,
  password varchar(20) NOT NULL,
  PRIMARY KEY (username)
);

create table login(
  username varchar(15) NOT NULL,
  password varchar(20) NOT NULL,
  PRIMARY KEY (username),
  FOREIGN KEY (username) REFERENCES signup(username)

);

-- CREATE TABLE customers (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(10) NOT NULL,
--     last_name VARCHAR(10) NOT NULL,
--     email VARCHAR(50) NOT NULL,
--     FOREIGN KEY (first_name) REFERENCES signup(first_name),
--     FOREIGN KEY (last_name) REFERENCES signup(last_name),
--     FOREIGN KEY (email) REFERENCES orders(email)
-- );
CREATE TABLE administrators (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(255) NOT NULL
);
INSERT INTO administrators (id, username, password) VALUES (1, 'admin1', 'password1');

CREATE TABLE products(
  productID INT(6) NOT NULL,
  p_name varchar(20) NOT NULL,
  p_price INT(6) NOT NULL,
  PRIMARY KEY(productID)
);
INSERT INTO products (productID, p_name, p_price) VALUES 
('1','Pineapple Cake', 500),
('2','Chocolate Cake', 550),
('3', 'Butterscotch Cake', 600),
('4', 'Blueberry Cake', 700),
('5', 'Dark Forest Cake', 650),
('6', 'Snowy Chocolate Cake', 800),
('7', 'Christmas Sponge Cake', 450),
('8', 'Cookie Cake', 850),
('9', 'Snow Santa Cake', 600),
('10', 'Pine Leaf Cake', 600),
('11', 'Dress Berry Cake', 700),
('12', 'Dark Chocolate Cake', 500),
('13', 'Pink Rose Cake', 900),
('14', 'Golden Rose Cake', 800),
('15', 'Chocolate Flower Cake', 500),
('16', 'Chocolate Vanilla Cake', 550),
('17', 'Pink Lotte Cake', 700),
('18', 'Paw Patrol Cake', 450),
('19', 'Cow Gang Cake', 500),
('20', 'Panaa Cake', 600),
('21', 'McQueen Cake', 650),
('22', 'Bulldozer Cake', 700),
('23', 'Cats Cake', 900),
('24', 'White Anniversary Cake', 500),
('25', 'Red Velvet Cake', 650),
('26', 'Violet Cream Cake', 700),
('27', 'White Sweet Cake', 500),
('28', 'Heart Chocolate Cake', 550),
('29', 'Love Balloon Cake', 450),
('30', 'Vanilla Forest Cake', 200),
('31', 'Choco Lump Cake', 300),
('32', 'Choco Nugget Cake', 250),
('33', 'Choco Vanilla Cake', 400),
('34', 'CrossChoco Cake', 600),
('35', 'Caramel Cake', 500),
('36', 'Choco Ball Cake', 650),
('37', 'Choco Heart Pinata Cake', 650),
('38', 'Ferrero Pinata Cake', 800),
('39', 'ChocoUni Pinata Cake', 850),
('40', 'Car Pinata Cake', 800),
('41', 'Gems Pinata Cake', 700),
('42', 'Dark Brown Cake', 550),
('43', 'White Cherry Cake', 450),
('44', 'Pink Blossom Cake', 400),
('45', 'KitKat Cake', 800),
('46', 'ChocoBlock Cake', 600),
('47', 'WhiteWall Cake', 500),
('48', 'ColorEgg Cake', 600),
('49', 'EggBasket Cake', 900),
('50', 'Omelette Vanilla Cake', 300),
('51', 'Eggloo Cake', 600),
('52', 'BlueNest Cake', 450),
('53', 'Dessert Cake', 500),
('54', 'Dripco Cake', 400),
('55', 'ChocoRib Cake', 450),
('56', 'Chocopearl Cake', 500),
('57', 'Panco Cake', 500),
('58', 'Heart Forest Cake', 600),
('59', 'Miniwrap Cake', 300),
('60', 'Burger Cake', 700),
('61', 'Wall-e Cake', 2000),
('62', 'Unicorn Cake', 700),
('63', 'Cindrella Cake', 1000),
('64', 'Happy Ending Cake', 1500),
('65', 'Falling Cake', 1800),
('66', 'Jam Cake', 200),
('67', 'White Strawberry Cake', 600),
('68', 'Silver Cake', 300),
('69', 'Pie Cake', 400),
('70', 'Honey Cake', 400),
('71', 'Orange Flower Cake', 300),
('72', 'KitKat Cupcake', 70),
('73', 'Strawberry Cupcake', 60),
('74', 'ChocoVan Cupcake', 50),
('75', 'Rainbow Cupcake', 50),
('76', 'Christmas Cupcake', 80),
('77', 'CreamTop Cupcake', 40),
('78', 'White Tower Cake', 1100),
('79', 'Fruit Tower Cake', 1500),
('80', 'Blue Tower Cake', 1200),
('81', 'Flowery Cake', 1600),
('82', 'Globe Cake', 900),
('83', 'Vine Cake', 1000);

CREATE TABLE orders (
  order_id INT(6) AUTO_INCREMENT PRIMARY KEY,
  product_id INT(6),
  product_name VARCHAR(30) NOT NULL,
  name VARCHAR(30) NOT NULL,
  address VARCHAR(100) NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(productID)
);



    


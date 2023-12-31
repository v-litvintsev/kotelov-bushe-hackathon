-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: bushe
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `slug` varchar(60) NOT NULL,
  `address` varchar(120) NOT NULL,
  `startTime` text NOT NULL,
  `endTime` text NOT NULL,
  `error` text NOT NULL,
  `status_id` int NOT NULL,
  `created_at` text NOT NULL,
  `updated_at` text NOT NULL,
  `deleted_at` text,
  `driver_id` int NOT NULL,
  `hub_id` int NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `first_name` varchar(60) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `width` float NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'549f9425007b1820665e','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:06.240Z','2023-06-24T17:00:06.241Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(2,'7b3f5056209d88dc3e65','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:07.241Z','2023-06-24T17:00:07.241Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(3,'a789cd0c8018f9bed303','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:08.242Z','2023-06-24T17:00:08.242Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(4,'67a08dfecaac8197acd5','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:09.241Z','2023-06-24T17:00:09.241Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(5,'4c1903bd98a1a90d299f','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:10.242Z','2023-06-24T17:00:10.242Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(6,'c31d851421467208d5d7','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:11.243Z','2023-06-24T17:00:11.243Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(7,'2809be43f4e09af05a90','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:12.245Z','2023-06-24T17:00:12.245Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(8,'0cb33548ab68faa7edbc','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:13.245Z','2023-06-24T17:00:13.245Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(9,'0f7d6a8d0002c9205dc6','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:14.245Z','2023-06-24T17:00:14.245Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(10,'37b446c3160d4429ca7a','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:15.245Z','2023-06-24T17:00:15.245Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(11,'669a4cba7a051f7f058b','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:16.246Z','2023-06-24T17:00:16.246Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(12,'f9708750f65338c06c60','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:17.247Z','2023-06-24T17:00:17.247Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(13,'376788127521b109a67b','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:18.247Z','2023-06-24T17:00:18.247Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(14,'0339cb1fde399180e767','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:19.247Z','2023-06-24T17:00:19.247Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(15,'1d64604943512785b5d2','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:20.248Z','2023-06-24T17:00:20.248Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(16,'0951d2f8d4e9be29f604','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:21.249Z','2023-06-24T17:00:21.249Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(17,'9bd49c62a7066315a496','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:22.249Z','2023-06-24T17:00:22.249Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(18,'76beeb8c4d173fa5adc6','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:23.249Z','2023-06-24T17:00:23.249Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(19,'355da870f36359aa7787','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:24.249Z','2023-06-24T17:00:24.250Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(20,'770f36208ba050211197','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:25.250Z','2023-06-24T17:00:25.250Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(21,'807bad91ec9040a0077a','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:26.250Z','2023-06-24T17:00:26.250Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(22,'0978323b3fd2c5db7ae4','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:27.252Z','2023-06-24T17:00:27.252Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(23,'041a41e16694da22bfbf','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:28.253Z','2023-06-24T17:00:28.253Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(24,'e3aa37b869fc700d9816','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:29.254Z','2023-06-24T17:00:29.254Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(25,'bbea034948c7201f4999','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:30.253Z','2023-06-24T17:00:30.253Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(26,'615b60b7a960a18a2887','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:31.254Z','2023-06-24T17:00:31.254Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(27,'4b4286bc7b8d4cb86a29','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:32.254Z','2023-06-24T17:00:32.254Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(28,'57726a9a541e7013a12a','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:33.254Z','2023-06-24T17:00:33.254Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(29,'69c2a6ffd329f4715774','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:34.255Z','2023-06-24T17:00:34.255Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(30,'b338d755476fedcab8b7','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:35.256Z','2023-06-24T17:00:35.256Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(31,'286e4e5b1f9dda2d5d7b','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:36.256Z','2023-06-24T17:00:36.256Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(32,'d3f160d99c5f87be6f35','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:37.258Z','2023-06-24T17:00:37.258Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(33,'d5645798b1b30f4470e2','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:38.258Z','2023-06-24T17:00:38.258Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(34,'3dda7513885ebc42e746','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:39.259Z','2023-06-24T17:00:39.259Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(35,'419970b0c5e13be9682b','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:40.259Z','2023-06-24T17:00:40.259Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(36,'55f93371af92083e4b94','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:00:41.261Z','2023-06-24T17:00:41.261Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(37,'ba1ba52339f5cb30c528','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:03:42.329Z','2023-06-24T17:03:42.331Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(38,'bdceea011c63f9bbbd44','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:06:42.331Z','2023-06-24T17:06:42.331Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(39,'adff3e3b6e380f6f510d','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:09:42.333Z','2023-06-24T17:09:42.333Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(40,'fa092988615af5e3fc81','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:12:42.334Z','2023-06-24T17:12:42.334Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(41,'fa24007b46d5edaf83ee','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:15:42.336Z','2023-06-24T17:15:42.336Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(42,'f70bef068d3d99c52ea2','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:18:42.338Z','2023-06-24T17:18:42.338Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5),(43,'5d4358c75a3bb5557757','г. Санкт Петербург, ул. Восстания д. 11, кв. 3','2023-06-24T17:21:42.339Z','2023-06-24T17:21:42.339Z','0.1',1,'2023-06-24 16:38:21.000000','2023-06-24 16:38:21.000000',NULL,1,1,'Цой','Валерий','89963020201',1.5);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_products`
--

DROP TABLE IF EXISTS `orders_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders_products` (
  `orders_id` int NOT NULL,
  `product_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_products`
--

LOCK TABLES `orders_products` WRITE;
/*!40000 ALTER TABLE `orders_products` DISABLE KEYS */;
INSERT INTO `orders_products` VALUES (1,1),(1,2);
/*!40000 ALTER TABLE `orders_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `subtitle` varchar(80) NOT NULL,
  `description` varchar(300) NOT NULL,
  `price` float NOT NULL,
  `width` float NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Пирожное Оттонель','Пирожное Оттонель','Два шоколадных мусса (один из белого, а второй из молочного шоколада), хрустящий миндальный грильяж и шоколадно-ореховый бисквит.',500,0.3,'2023-06-24 17:15:02','2023-06-24 17:15:02'),(2,'Шапка Piter by','Шапка Piter by','имитированная коллекция одежды в рамках кино-проекта Piter by. Заказ оформляется за 3 дня до доставки.',350,0.2,'2023-06-24 17:15:02','2023-06-24 17:15:02');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Администратор ','2023-06-24 17:05:49','2023-06-24 17:05:49'),(2,'Курьер ','2023-06-24 17:05:49','2023-06-24 17:05:49');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'Ожидает сборки','2023-06-24 17:16:46','2023-06-24 17:16:46'),(2,'Ожидает курьера ','2023-06-24 17:16:46','2023-06-24 17:16:46'),(3,'Ожидает Доставки ','2023-06-24 17:17:25','2023-06-24 17:17:25'),(4,'Выполненный заказ','2023-06-24 17:17:25','2023-06-24 17:17:25'),(5,'Архив','2023-06-24 17:18:03','2023-06-24 17:18:03');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `age` int NOT NULL,
  `email` varchar(80) NOT NULL,
  `access` tinyint(1) NOT NULL,
  `role_id` int NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  `deleted_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Иван','Иванов',27,'ivan@mail.ru',1,1,'2023-06-24 17:04:41','2023-06-24 17:04:41','2023-06-24 17:04:41'),(2,'Иван','Кузницов',27,'ivan1@mail.ru',1,1,'2023-06-24 17:05:07','2023-06-24 17:05:07','2023-06-24 17:05:07');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-24 17:26:02

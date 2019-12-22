-- MySQL dump 10.13  Distrib 5.7.28, for macos10.14 (x86_64)
--
-- Host: localhost    Database: cfpm
-- ------------------------------------------------------
-- Server version	5.7.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `forms`
--

DROP TABLE IF EXISTS `forms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forms` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `template` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forms`
--

LOCK TABLES `forms` WRITE;
/*!40000 ALTER TABLE `forms` DISABLE KEYS */;
INSERT INTO `forms` VALUES (1,'[\n  {\n    \"id\": 1,\n    \"name\": \"name\",\n    \"label\": \"name:\",\n    \"placeholder\": \"enter your name...\",\n    \"FormComponent\": \"FormTextInput\",\n    \"value\": \"\",\n    \"state\": \"constants.ENABLED\",\n    \"style\": \"\",\n    \"onChange\": \"undefined\",\n    \"onClick\": \"undefined\"\n  },\n  {\n    \"id\": 2,\n    \"name\": \"company\",\n    \"label\": \"company:\",\n    \"placeholder\": \"enter your company name...\",\n    \"FormComponent\": \"FormTextInput\",\n    \"value\": \"\",\n    \"state\": \"constants.ENABLED\",\n    \"style\": \"\",\n    \"onChange\": \"undefined\",\n    \"onClick\": \"undefined\"\n  },\n  {\n    \"id\": 3,\n    \"name\": \"website\",\n    \"label\": \"website:\",\n    \"placeholder\": \"enter your company website...\",\n    \"FormComponent\": \"FormTextInput\",\n    \"value\": \"\",\n    \"state\": \"constants.ENABLED\",\n    \"style\": \"\",\n    \"onChange\": \"undefined\",\n    \"onClick\": \"undefined\"\n  },\n  {\n    \"id\": 4,\n    \"name\": \"email\",\n    \"label\": \"email address:\",\n    \"placeholder\": \"enter your email address...\",\n    \"FormComponent\": \"FormTextInput\",\n    \"value\": \"\",\n    \"state\": \"constants.ENABLED\",\n    \"style\": \"\",\n    \"onChange\": \"undefined\",\n    \"onClick\": \"undefined\"\n  },\n  {\n    \"id\": 5,\n    \"name\": \"specialty\",\n    \"label\": \"top candy specialty (enter only one):\",\n    \"placeholder\": \"enter a candy name...\",\n    \"FormComponent\": \"FormSelectInput\",\n    \"value\": \"\",\n    \"state\": \"constants.ENABLED\",\n    \"style\": \"\",\n    \"onChange\": \"undefined\",\n    \"onClick\": \"undefined\",\n    \"options\": [\n      { \"value\": \"MM\", \"label\": \"MMs\", \"id\": 1 },\n      { \"value\": \"MARS\", \"label\": \"Mars Bar\", \"id\": 2 },\n      { \"value\": \"MWAY\", \"label\": \"Milky Way\", \"id\": 3 },\n      { \"value\": \"SNICK\", \"label\": \"Snickers\", \"id\": 4 }\n    ]\n  },\n  {\n    \"id\": 6,\n    \"name\": \"price\",\n    \"label\": \"price per unit:\",\n    \"placeholder\": \"enter a suggested price...\",\n    \"FormComponent\": \"FormTextInput\",\n    \"value\": \"\",\n    \"state\": \"constants.ENABLED\",\n    \"style\": \"\",\n    \"onChange\": \"undefined\",\n    \"onClick\": \"undefined\"\n  }\n]');
/*!40000 ALTER TABLE `forms` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-22  8:52:13

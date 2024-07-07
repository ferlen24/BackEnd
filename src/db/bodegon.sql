CREATE DATABASE IF NOT EXISTS `bodegon` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bodegon`;

-- Volcando estructura para tabla bodegon.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `idcliente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `sexo` varchar(10) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `numero_dni` int DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  `pass` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`idcliente`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla bodegon.contactos
CREATE TABLE IF NOT EXISTS `contactos` (
  `idcontacto` int NOT NULL AUTO_INCREMENT,
  `iddireccion` int DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `detalle` varchar(255) DEFAULT NULL,
  `numero` int DEFAULT NULL,
  PRIMARY KEY (`idcontacto`),
  KEY `FK_contactos_direcciones` (`iddireccion`),
  CONSTRAINT `FK_contactos_direcciones` FOREIGN KEY (`iddireccion`) REFERENCES `direcciones` (`iddireccion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla bodegon.direcciones
CREATE TABLE IF NOT EXISTS `direcciones` (
  `iddireccion` int NOT NULL AUTO_INCREMENT,
  `idcliente` int DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `numero` varchar(255) DEFAULT NULL,
  `departamento` varchar(255) DEFAULT NULL,
  `piso` varchar(255) DEFAULT NULL,
  `barrio` varchar(255) DEFAULT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`iddireccion`),
  KEY `FK_direcciones_clientes` (`idcliente`),
  CONSTRAINT `FK_direcciones_clientes` FOREIGN KEY (`idcliente`) REFERENCES `clientes` (`idcliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla bodegon.log
CREATE TABLE IF NOT EXISTS `log` (
  `idlog` int NOT NULL AUTO_INCREMENT,
  `idcliente` int NOT NULL,
  `ingreso` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idlog`),
  KEY `FK_log_clientes` (`idcliente`),
  CONSTRAINT `FK_log_clientes` FOREIGN KEY (`idcliente`) REFERENCES `clientes` (`idcliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla bodegon.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `idcarta` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL DEFAULT '0',
  `precio` double NOT NULL DEFAULT '0',
  `imagen` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`idcarta`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

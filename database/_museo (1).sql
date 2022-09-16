-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-09-2022 a las 23:59:49
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: ` museo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `exposiciones`
--

CREATE TABLE `exposiciones` (
  `Id_Exposiciones` int(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `exposicionesx`
--

CREATE TABLE `exposicionesx` (
  `Id_exposiciones` int(120) NOT NULL,
  `id_museo` int(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `museos`
--

CREATE TABLE `museos` (
  `Id_Museo` int(120) NOT NULL,
  `Id_Usuario` int(120) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Direccion` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Telofono` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfiles`
--

CREATE TABLE `perfiles` (
  `Id_Perfil` int(120) NOT NULL,
  `Nombre_Perfil` varchar(60) NOT NULL,
  `Descripcion_Perfil` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planos`
--

CREATE TABLE `planos` (
  `Id_Plano` varchar(120) NOT NULL,
  `PlanoGrafico` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planosxexposiciones`
--

CREATE TABLE `planosxexposiciones` (
  `Id_Exposiciones` int(120) NOT NULL,
  `Id_Planos` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Id_Usuario` int(120) NOT NULL,
  `Nombre` varchar(60) NOT NULL,
  `Apellido` varchar(60) NOT NULL,
  `Email` varchar(80) NOT NULL,
  `Contraseña` varchar(50) NOT NULL,
  `telefono` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitasguiadas`
--

CREATE TABLE `visitasguiadas` (
  `Id_VisitasGuiadas` int(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitasguiadasxexpo`
--

CREATE TABLE `visitasguiadasxexpo` (
  `Id_Exposiciones` int(120) NOT NULL,
  `Id_VisitasGuiadas` int(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `exposiciones`
--
ALTER TABLE `exposiciones`
  ADD PRIMARY KEY (`Id_Exposiciones`),
  ADD KEY `Id_Exposiciones` (`Id_Exposiciones`);

--
-- Indices de la tabla `exposicionesx`
--
ALTER TABLE `exposicionesx`
  ADD PRIMARY KEY (`Id_exposiciones`),
  ADD KEY `id_museo` (`id_museo`);

--
-- Indices de la tabla `museos`
--
ALTER TABLE `museos`
  ADD PRIMARY KEY (`Id_Museo`),
  ADD KEY `Id_Museo` (`Id_Museo`),
  ADD KEY `Id_Usuario` (`Id_Usuario`);

--
-- Indices de la tabla `perfiles`
--
ALTER TABLE `perfiles`
  ADD PRIMARY KEY (`Id_Perfil`);

--
-- Indices de la tabla `planos`
--
ALTER TABLE `planos`
  ADD PRIMARY KEY (`Id_Plano`);

--
-- Indices de la tabla `planosxexposiciones`
--
ALTER TABLE `planosxexposiciones`
  ADD KEY `Id_Exposiciones` (`Id_Exposiciones`),
  ADD KEY `Id_Planos` (`Id_Planos`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Id_Usuario`);

--
-- Indices de la tabla `visitasguiadas`
--
ALTER TABLE `visitasguiadas`
  ADD PRIMARY KEY (`Id_VisitasGuiadas`);

--
-- Indices de la tabla `visitasguiadasxexpo`
--
ALTER TABLE `visitasguiadasxexpo`
  ADD KEY `Id_Exposiciones` (`Id_Exposiciones`),
  ADD KEY `Id_VisitasGuiadas` (`Id_VisitasGuiadas`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `exposiciones`
--
ALTER TABLE `exposiciones`
  ADD CONSTRAINT `exposiciones_ibfk_1` FOREIGN KEY (`Id_Exposiciones`) REFERENCES `exposicionesx` (`Id_exposiciones`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `exposicionesx`
--
ALTER TABLE `exposicionesx`
  ADD CONSTRAINT `exposicionesx_ibfk_1` FOREIGN KEY (`id_museo`) REFERENCES `museos` (`Id_Museo`);

--
-- Filtros para la tabla `museos`
--
ALTER TABLE `museos`
  ADD CONSTRAINT `museos_ibfk_1` FOREIGN KEY (`Id_Usuario`) REFERENCES `usuario` (`Id_Usuario`);

--
-- Filtros para la tabla `planosxexposiciones`
--
ALTER TABLE `planosxexposiciones`
  ADD CONSTRAINT `planosxexposiciones_ibfk_1` FOREIGN KEY (`Id_Planos`) REFERENCES `planos` (`Id_Plano`) ON UPDATE CASCADE,
  ADD CONSTRAINT `planosxexposiciones_ibfk_2` FOREIGN KEY (`Id_Exposiciones`) REFERENCES `exposiciones` (`Id_Exposiciones`);

--
-- Filtros para la tabla `visitasguiadasxexpo`
--
ALTER TABLE `visitasguiadasxexpo`
  ADD CONSTRAINT `visitasguiadasxexpo_ibfk_1` FOREIGN KEY (`Id_Exposiciones`) REFERENCES `exposiciones` (`Id_Exposiciones`) ON UPDATE CASCADE,
  ADD CONSTRAINT `visitasguiadasxexpo_ibfk_2` FOREIGN KEY (`Id_VisitasGuiadas`) REFERENCES `visitasguiadas` (`Id_VisitasGuiadas`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

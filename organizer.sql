-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 09 Maj 2021, 14:33
-- Wersja serwera: 10.4.14-MariaDB
-- Wersja PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `organizer`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `instrument`
--

CREATE TABLE `instrument` (
  `Id` int(11) NOT NULL,
  `Name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `sheet`
--

CREATE TABLE `sheet` (
  `Id` int(11) NOT NULL,
  `songId` int(11) NOT NULL,
  `instrumentId` int(11) NOT NULL,
  `page` int(2) NOT NULL,
  `path` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `song`
--

CREATE TABLE `song` (
  `Id` int(11) NOT NULL,
  `Name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `instrument`
--
ALTER TABLE `instrument`
  ADD PRIMARY KEY (`Id`);

--
-- Indeksy dla tabeli `sheet`
--
ALTER TABLE `sheet`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `instrumentId` (`instrumentId`),
  ADD KEY `songId` (`songId`);

--
-- Indeksy dla tabeli `song`
--
ALTER TABLE `song`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `instrument`
--
ALTER TABLE `instrument`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `sheet`
--
ALTER TABLE `sheet`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `song`
--
ALTER TABLE `song`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `sheet`
--
ALTER TABLE `sheet`
  ADD CONSTRAINT `sheet_ibfk_1` FOREIGN KEY (`instrumentId`) REFERENCES `instrument` (`Id`),
  ADD CONSTRAINT `sheet_ibfk_2` FOREIGN KEY (`songId`) REFERENCES `song` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

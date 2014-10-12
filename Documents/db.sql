-- MySQL Script generated by MySQL Workbench
-- Sun 12 Oct 2014 04:39:15 AM EDT
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema pmdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `pmdb` ;

-- -----------------------------------------------------
-- Schema pmdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pmdb` ;
USE `pmdb` ;

-- -----------------------------------------------------
-- Table `pmdb`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pmdb`.`User` ;

CREATE TABLE IF NOT EXISTS `pmdb`.`User` (
  `token` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`token`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pmdb`.`Units`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pmdb`.`Units` ;

CREATE TABLE IF NOT EXISTS `pmdb`.`Units` (
  `ID` INT NOT NULL,
  `UnitID` VARCHAR(10) NOT NULL,
  `LicencePlate` VARCHAR(10) NULL,
  `ShortName` VARCHAR(10) NULL,
  `Description` VARCHAR(45) NULL,
  `SerialNumber` VARCHAR(45) NULL,
  `IMEI` VARCHAR(45) NULL,
  `Address` VARCHAR(45) NULL,
  `City` VARCHAR(45) NULL,
  `State` VARCHAR(45) NULL,
  `CountryCode` VARCHAR(10) NULL DEFAULT 'US',
  `PostalCode` VARCHAR(10) NULL,
  `LastEventCode` VARCHAR(45) NULL,
  `EventName` VARCHAR(45) NULL,
  `LastEventDate` DATETIME NULL,
  `LastLatitude` VARCHAR(45) NULL,
  `LastLongitude` VARCHAR(45) NULL,
  `Speed` FLOAT NULL,
  `Direction` VARCHAR(45) NULL,
  `DealerID` INT NULL,
  `CompanyID` INT NULL,
  `ContactName` VARCHAR(45) NULL,
  `IconPath` VARCHAR(45) NULL,
  `AssignedDriver` VARCHAR(45) NULL,
  `DriverID` INT NULL,
  `LocalLastEventDatetxt` VARCHAR(45) NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `UnitID_UNIQUE` (`UnitID` ASC),
  UNIQUE INDEX `LicencePlate_UNIQUE` (`LicencePlate` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pmdb`.`Location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pmdb`.`Location` ;

CREATE TABLE IF NOT EXISTS `pmdb`.`Location` (
  `UnitID` VARCHAR(10) NOT NULL,
  `LastEventDate` DATETIME NOT NULL,
  `Address` VARCHAR(45) NULL,
  `City` VARCHAR(45) NULL,
  `State` VARCHAR(45) NULL,
  `PostalCode` VARCHAR(10) NULL,
  `CountryCode` VARCHAR(10) NULL DEFAULT 'US',
  `Latitude` VARCHAR(45) NULL,
  `Longitude` VARCHAR(45) NULL,
  `Heading` INT NULL,
  PRIMARY KEY (`UnitID`, `LastEventDate`),
  CONSTRAINT `fk_Location_Units1`
    FOREIGN KEY (`UnitID`)
    REFERENCES `pmdb`.`Units` (`UnitID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pmdb`.`Stops`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pmdb`.`Stops` ;

CREATE TABLE IF NOT EXISTS `pmdb`.`Stops` (
  `ID` INT NOT NULL,
  `RouteID` INT NULL,
  `StopName` VARCHAR(45) NULL,
  `Street` VARCHAR(45) NULL,
  `City` VARCHAR(45) NULL,
  `State` VARCHAR(45) NULL,
  `PostalCode` VARCHAR(10) NULL,
  `CountryCode` VARCHAR(10) NULL DEFAULT 'US',
  `Latitude` VARCHAR(45) NULL,
  `Longitude` VARCHAR(45) NULL,
  `Radius` VARCHAR(45) NULL,
  `Sequence` INT NULL,
  `ScheduledArrive` TINYINT(1) NULL,
  `RouteDay` INT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pmdb`.`Route`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pmdb`.`Route` ;

CREATE TABLE IF NOT EXISTS `pmdb`.`Route` (
  `RouteID` INT NOT NULL,
  `Name` VARCHAR(45) NULL,
  `CreatedOn` DATE NULL,
  PRIMARY KEY (`RouteID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pmdb`.`Route_has_Stops`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pmdb`.`Route_has_Stops` ;

CREATE TABLE IF NOT EXISTS `pmdb`.`Route_has_Stops` (
  `Route_RouteID` INT NOT NULL,
  `Stops_ID` INT NOT NULL,
  PRIMARY KEY (`Route_RouteID`, `Stops_ID`),
  INDEX `fk_Route_has_Stops_Stops1_idx` (`Stops_ID` ASC),
  INDEX `fk_Route_has_Stops_Route1_idx` (`Route_RouteID` ASC),
  CONSTRAINT `fk_Route_has_Stops_Route1`
    FOREIGN KEY (`Route_RouteID`)
    REFERENCES `pmdb`.`Route` (`RouteID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Route_has_Stops_Stops1`
    FOREIGN KEY (`Stops_ID`)
    REFERENCES `pmdb`.`Stops` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pmdb`.`FavoriteStops`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pmdb`.`FavoriteStops` ;

CREATE TABLE IF NOT EXISTS `pmdb`.`FavoriteStops` (
  `Favorite_Stops_ID` INT NOT NULL AUTO_INCREMENT,
  `Route_has_Stops_Route_RouteID` INT NOT NULL,
  `Route_has_Stops_Stops_ID` INT NOT NULL,
  `User_token` VARCHAR(45) NOT NULL,
  `email_flag` INT NULL,
  `DefinedTime` INT NULL,
  PRIMARY KEY (`Favorite_Stops_ID`, `Route_has_Stops_Route_RouteID`, `Route_has_Stops_Stops_ID`, `User_token`),
  INDEX `fk_Stops_has_Route_has_User_User1_idx` (`User_token` ASC),
  INDEX `fk_FavoriteStops_Route_has_Stops1_idx` (`Route_has_Stops_Route_RouteID` ASC, `Route_has_Stops_Stops_ID` ASC),
  CONSTRAINT `fk_Stops_has_Route_has_User_User1`
    FOREIGN KEY (`User_token`)
    REFERENCES `pmdb`.`User` (`token`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_FavoriteStops_Route_has_Stops1`
    FOREIGN KEY (`Route_has_Stops_Route_RouteID` , `Route_has_Stops_Stops_ID`)
    REFERENCES `pmdb`.`Route_has_Stops` (`Route_RouteID` , `Stops_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pmdb`.`Route_has_Units`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pmdb`.`Route_has_Units` ;

CREATE TABLE IF NOT EXISTS `pmdb`.`Route_has_Units` (
  `WatcherID` INT NOT NULL,
  `RouteID` INT NOT NULL,
  `Units_ID` INT NOT NULL,
  `LastStop_ID` INT NOT NULL,
  `ScheduledDate` VARCHAR(45) NULL,
  `ActivatedOn` VARCHAR(45) NULL,
  `ClosedOn` VARCHAR(45) NULL,
  `CreatedOn` VARCHAR(45) NULL,
  `StatusRoute` VARCHAR(45) NULL,
  PRIMARY KEY (`WatcherID`, `RouteID`, `Units_ID`, `LastStop_ID`),
  INDEX `fk_Route_has_Units_Units1_idx` (`Units_ID` ASC),
  INDEX `fk_Route_has_Units_Route1_idx` (`RouteID` ASC),
  INDEX `fk_Route_has_Units_Stops1_idx` (`LastStop_ID` ASC),
  CONSTRAINT `fk_Route_has_Units_Route1`
    FOREIGN KEY (`RouteID`)
    REFERENCES `pmdb`.`Route` (`RouteID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Route_has_Units_Units1`
    FOREIGN KEY (`Units_ID`)
    REFERENCES `pmdb`.`Units` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Route_has_Units_Stops1`
    FOREIGN KEY (`LastStop_ID`)
    REFERENCES `pmdb`.`Stops` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

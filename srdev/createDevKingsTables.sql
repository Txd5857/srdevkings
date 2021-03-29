USE honor_flight;

DROP TABLE IF EXISTS `Permissions`;
DROP TABLE IF EXISTS `Section`;
DROP TABLE IF EXISTS `User`;

CREATE TABLE `User` (
`userID` smallint unsigned NOT NULL AUTO_INCREMENT,
`teamID` int unsigned,
`username` varchar(32) DEFAULT NULL,
`password` varchar(255) DEFAULT NULL,
PRIMARY KEY (`userID`),
CONSTRAINT `teamID_fk` FOREIGN KEY (`teamID`) REFERENCES `team` (`team_id`));

INSERT INTO User (`teamID`, `username`, `password`) VALUES (440,"admin","test");
INSERT INTO User (`teamID`, `username`, `password`) VALUES (440,"Eric_Young","test");
INSERT INTO User (`teamID`, `username`, `password`) VALUES (440,"Jen_Everett","test");
INSERT INTO User (`teamID`, `username`, `password`) VALUES (440,"Karen_Zilora","test");

INSERT INTO User (`teamID`, `username`, `password`) VALUES (440,"Mission_Leader","test"); -- Mission Leader
INSERT INTO User (`teamID`, `username`, `password`) VALUES (440,"Mission_Safety_Leader","test"); -- Mission Safety Leader
INSERT INTO User (`teamID`, `username`, `password`) VALUES (440,"Bus_Leader","test"); -- Bus Leader
INSERT INTO User (`teamID`, `username`, `password`) VALUES (440,"Bus_Safety_Leader","test"); -- Bus Safety Leader
INSERT INTO User (`teamID`, `username`, `password`) VALUES (440,"Mission_Assistant","test"); -- Mission Assistant
INSERT INTO User (`teamID`, `username`, `password`) VALUES (440,"Safety_Assistant","test"); -- Safety Assistant
INSERT INTO User (`teamID`, `username`, `password`) VALUES (440,"Advance","test"); -- Advance
INSERT INTO User (`teamID`, `username`, `password`) VALUES (440,"Photographer","test"); -- Photographer

CREATE TABLE `Section` (
  `sectionID` smallint unsigned NOT NULL AUTO_INCREMENT,
  `sectionName` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`sectionID`));

INSERT INTO Section (`sectionName`) VALUES ("CoverPage");
INSERT INTO Section (`sectionName`) VALUES ("Itinerary");
INSERT INTO Section (`sectionName`) VALUES ("KeyContacts");
INSERT INTO Section (`sectionName`) VALUES ("CrewRespByItinerary");
INSERT INTO Section (`sectionName`) VALUES ("CrewRespByAssign");
INSERT INTO Section (`sectionName`) VALUES ("AdvanceCrewCheckList");
INSERT INTO Section (`sectionName`) VALUES ("ArlingtonInfo");
INSERT INTO Section (`sectionName`) VALUES ("ArlingtonReservation");
INSERT INTO Section (`sectionName`) VALUES ("NavyYardAndMuseumReservation");
INSERT INTO Section (`sectionName`) VALUES ("DCTourNotes");
INSERT INTO Section (`sectionName`) VALUES ("IncidentReportForms");
INSERT INTO Section (`sectionName`) VALUES ("HiltonEvacProcedure");
INSERT INTO Section (`sectionName`) VALUES ("HiltonCrisisPlan");
INSERT INTO Section (`sectionName`) VALUES ("POWMIACeremony");
INSERT INTO Section (`sectionName`) VALUES ("BanquetScript");
INSERT INTO Section (`sectionName`) VALUES ("FactSheet");

INSERT INTO Section (`sectionName`) VALUES ("CrewInfo");
INSERT INTO Section (`sectionName`) VALUES ("NationalSpreadsheet");
INSERT INTO Section (`sectionName`) VALUES ("Bus1List");
INSERT INTO Section (`sectionName`) VALUES ("Bus2List");
INSERT INTO Section (`sectionName`) VALUES ("Bus3List");
INSERT INTO Section (`sectionName`) VALUES ("VetAndGuardPhoneNums");
INSERT INTO Section (`sectionName`) VALUES ("HiltonRoomAssignments");
INSERT INTO Section (`sectionName`) VALUES ("VeteranServiceNotes");
INSERT INTO Section (`sectionName`) VALUES ("PlaneBoardingList");
INSERT INTO Section (`sectionName`) VALUES ("RollCallSheets");
INSERT INTO Section (`sectionName`) VALUES ("HotelCheckInListSunday");
INSERT INTO Section (`sectionName`) VALUES ("SWAPassengerList");

CREATE TABLE `Permissions` (
  `userID` smallint unsigned NOT NULL,
  `sectionID` smallint unsigned NOT NULL,
  `viewable` tinyint(1),
  `editable` tinyint(1),
  PRIMARY KEY (`userID`, `sectionID`),
  CONSTRAINT `userID_fk` FOREIGN KEY (`userID`) REFERENCES `User` (`userID`),
  CONSTRAINT `sectionID_fk` FOREIGN KEY (`sectionID`) REFERENCES `Section` (`sectionID`));

-- Generic Admin
INSERT INTO Permissions VALUES (1,1,1,1);
INSERT INTO Permissions VALUES (1,2,1,1);
INSERT INTO Permissions VALUES (1,3,1,1);
INSERT INTO Permissions VALUES (1,4,1,1);
INSERT INTO Permissions VALUES (1,5,1,1);
INSERT INTO Permissions VALUES (1,6,1,1);
INSERT INTO Permissions VALUES (1,7,1,1);
INSERT INTO Permissions VALUES (1,8,1,1);
INSERT INTO Permissions VALUES (1,9,1,1);
INSERT INTO Permissions VALUES (1,10,1,1);
INSERT INTO Permissions VALUES (1,11,1,1);
INSERT INTO Permissions VALUES (1,12,1,1);
INSERT INTO Permissions VALUES (1,13,1,1);
INSERT INTO Permissions VALUES (1,14,1,1);
INSERT INTO Permissions VALUES (1,15,1,1);
INSERT INTO Permissions VALUES (1,16,1,1);
INSERT INTO Permissions VALUES (1,17,1,1);
INSERT INTO Permissions VALUES (1,18,1,1);
INSERT INTO Permissions VALUES (1,19,1,1);
INSERT INTO Permissions VALUES (1,20,1,1);
INSERT INTO Permissions VALUES (1,21,1,1);
INSERT INTO Permissions VALUES (1,22,1,1);
INSERT INTO Permissions VALUES (1,23,1,1);
INSERT INTO Permissions VALUES (1,24,1,1);
INSERT INTO Permissions VALUES (1,25,1,1);
INSERT INTO Permissions VALUES (1,26,1,1);
INSERT INTO Permissions VALUES (1,27,1,1);
INSERT INTO Permissions VALUES (1,28,1,1);

-- Eric Young
INSERT INTO Permissions VALUES (2,1,1,1);
INSERT INTO Permissions VALUES (2,2,1,1);
INSERT INTO Permissions VALUES (2,3,1,1);
INSERT INTO Permissions VALUES (2,4,1,1);
INSERT INTO Permissions VALUES (2,5,1,1);
INSERT INTO Permissions VALUES (2,6,1,1);
INSERT INTO Permissions VALUES (2,7,1,1);
INSERT INTO Permissions VALUES (2,8,1,1);
INSERT INTO Permissions VALUES (2,9,1,1);
INSERT INTO Permissions VALUES (2,10,1,1);
INSERT INTO Permissions VALUES (2,11,1,1);
INSERT INTO Permissions VALUES (2,12,1,1);
INSERT INTO Permissions VALUES (2,13,1,1);
INSERT INTO Permissions VALUES (2,14,1,1);
INSERT INTO Permissions VALUES (2,15,1,1);
INSERT INTO Permissions VALUES (2,16,1,1);
INSERT INTO Permissions VALUES (2,17,1,1);
INSERT INTO Permissions VALUES (2,18,1,1);
INSERT INTO Permissions VALUES (2,19,1,1);
INSERT INTO Permissions VALUES (2,20,1,1);
INSERT INTO Permissions VALUES (2,21,1,1);
INSERT INTO Permissions VALUES (2,22,1,1);
INSERT INTO Permissions VALUES (2,23,1,1);
INSERT INTO Permissions VALUES (2,24,1,1);
INSERT INTO Permissions VALUES (2,25,1,1);
INSERT INTO Permissions VALUES (2,26,1,1);
INSERT INTO Permissions VALUES (2,27,1,1);
INSERT INTO Permissions VALUES (2,28,1,1);

-- Jen Everett
INSERT INTO Permissions VALUES (3,1,1,1);
INSERT INTO Permissions VALUES (3,2,1,1);
INSERT INTO Permissions VALUES (3,3,1,1);
INSERT INTO Permissions VALUES (3,4,1,1);
INSERT INTO Permissions VALUES (3,5,1,1);
INSERT INTO Permissions VALUES (3,6,1,1);
INSERT INTO Permissions VALUES (3,7,1,1);
INSERT INTO Permissions VALUES (3,8,1,1);
INSERT INTO Permissions VALUES (3,9,1,1);
INSERT INTO Permissions VALUES (3,10,1,1);
INSERT INTO Permissions VALUES (3,11,1,1);
INSERT INTO Permissions VALUES (3,12,1,1);
INSERT INTO Permissions VALUES (3,13,1,1);
INSERT INTO Permissions VALUES (3,14,1,1);
INSERT INTO Permissions VALUES (3,15,1,1);
INSERT INTO Permissions VALUES (3,16,1,1);
INSERT INTO Permissions VALUES (3,17,1,1);
INSERT INTO Permissions VALUES (3,18,1,1);
INSERT INTO Permissions VALUES (3,19,1,1);
INSERT INTO Permissions VALUES (3,20,1,1);
INSERT INTO Permissions VALUES (3,21,1,1);
INSERT INTO Permissions VALUES (3,22,1,1);
INSERT INTO Permissions VALUES (3,23,1,1);
INSERT INTO Permissions VALUES (3,24,1,1);
INSERT INTO Permissions VALUES (3,25,1,1);
INSERT INTO Permissions VALUES (3,26,1,1);
INSERT INTO Permissions VALUES (3,27,1,1);
INSERT INTO Permissions VALUES (3,28,1,1);

-- Karen Zilora
INSERT INTO Permissions VALUES (4,1,1,1);
INSERT INTO Permissions VALUES (4,2,1,1);
INSERT INTO Permissions VALUES (4,3,1,1);
INSERT INTO Permissions VALUES (4,4,1,1);
INSERT INTO Permissions VALUES (4,5,1,1);
INSERT INTO Permissions VALUES (4,6,1,1);
INSERT INTO Permissions VALUES (4,7,1,1);
INSERT INTO Permissions VALUES (4,8,1,1);
INSERT INTO Permissions VALUES (4,9,1,1);
INSERT INTO Permissions VALUES (4,10,1,1);
INSERT INTO Permissions VALUES (4,11,1,1);
INSERT INTO Permissions VALUES (4,12,1,1);
INSERT INTO Permissions VALUES (4,13,1,1);
INSERT INTO Permissions VALUES (4,14,1,1);
INSERT INTO Permissions VALUES (4,15,1,1);
INSERT INTO Permissions VALUES (4,16,1,1);
INSERT INTO Permissions VALUES (4,17,1,1);
INSERT INTO Permissions VALUES (4,18,1,1);
INSERT INTO Permissions VALUES (4,19,1,1);
INSERT INTO Permissions VALUES (4,20,1,1);
INSERT INTO Permissions VALUES (4,21,1,1);
INSERT INTO Permissions VALUES (4,22,1,1);
INSERT INTO Permissions VALUES (4,23,1,1);
INSERT INTO Permissions VALUES (4,24,1,1);
INSERT INTO Permissions VALUES (4,25,1,1);
INSERT INTO Permissions VALUES (4,26,1,1);
INSERT INTO Permissions VALUES (4,27,1,1);
INSERT INTO Permissions VALUES (4,28,1,1);
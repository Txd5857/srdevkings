USE honor_flight;

DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `section`;
DROP TABLE IF EXISTS `permissions`;

CREATE TABLE `user` (
`userID` smallint unsigned NOT NULL AUTO_INCREMENT,
`teamID` int unsigned,
`username` varchar(32) DEFAULT NULL,
`role` varchar(60) DEFAULT NULL,
`password` varchar(255) DEFAULT NULL,
PRIMARY KEY (`userID`),
CONSTRAINT `teamID_fk` FOREIGN KEY (`teamID`) REFERENCES `team` (`team_id`));

CREATE TABLE `section` (
  `sectionID` smallint unsigned NOT NULL AUTO_INCREMENT,
  `sectionName` varchar(32) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sectionID`));
  
  CREATE TABLE `permissions` (
  `userID` smallint unsigned NOT NULL,
  `sectionID` smallint unsigned NOT NULL,
  `viewable` tinyint(1),
  `editable` tinyint(1),
  PRIMARY KEY (`userID`, `sectionID`),
  CONSTRAINT `userID_fk` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`),
  CONSTRAINT `sectionID_fk` FOREIGN KEY (`sectionID`) REFERENCES `section` (`sectionID`));


INSERT INTO user (`teamID`, `username`, `role`, `password`) VALUES (440,"test","Admin","$2a$10$PSmlnNjKsbpwD54e0qB40ez..CWLyq1UF6E1vYeJYL6AHt2YkBKNG");
INSERT INTO user (`teamID`, `username`, `role`, `password`) VALUES (440,"Eric_Young","Admin","$2a$10$PSmlnNjKsbpwD54e0qB40ez..CWLyq1UF6E1vYeJYL6AHt2YkBKNG");
INSERT INTO user (`teamID`, `username`, `role`, `password`) VALUES (440,"Jen_Everett","Admin","$2a$10$PSmlnNjKsbpwD54e0qB40ez..CWLyq1UF6E1vYeJYL6AHt2YkBKNG");
INSERT INTO user (`teamID`, `username`, `role`, `password`) VALUES (440,"Karen_Zilora","Admin","$2a$10$PSmlnNjKsbpwD54e0qB40ez..CWLyq1UF6E1vYeJYL6AHt2YkBKNG");

INSERT INTO user (`teamID`, `username`, `role`, `password`) VALUES (440,"Mission_Leader","Mission Leader","$2a$10$PSmlnNjKsbpwD54e0qB40ez..CWLyq1UF6E1vYeJYL6AHt2YkBKNG"); -- Mission Leader
INSERT INTO user (`teamID`, `username`, `role`, `password`) VALUES (440,"Mission_Safety_Leader","Mission Safety Leader","$2a$10$PSmlnNjKsbpwD54e0qB40ez..CWLyq1UF6E1vYeJYL6AHt2YkBKNG"); -- Mission Safety Leader
INSERT INTO user (`teamID`, `username`, `role`, `password`) VALUES (440,"Bus_Leader","Bus Leader","$2a$10$PSmlnNjKsbpwD54e0qB40ez..CWLyq1UF6E1vYeJYL6AHt2YkBKNG"); -- Bus Leader
INSERT INTO user (`teamID`, `username`, `role`, `password`) VALUES (440,"Bus_Safety_Leader","Bus Safety Leader","$2a$10$PSmlnNjKsbpwD54e0qB40ez..CWLyq1UF6E1vYeJYL6AHt2YkBKNG"); -- Bus Safety Leader
INSERT INTO user (`teamID`, `username`, `role`, `password`) VALUES (440,"Mission_Assistant","Mission Assistant","$2a$10$PSmlnNjKsbpwD54e0qB40ez..CWLyq1UF6E1vYeJYL6AHt2YkBKNG"); -- Mission Assistant
INSERT INTO user (`teamID`, `username`, `role`, `password`) VALUES (440,"Safety_Assistant","Safety Assistant","$2a$10$PSmlnNjKsbpwD54e0qB40ez..CWLyq1UF6E1vYeJYL6AHt2YkBKNG"); -- Safety Assistant
INSERT INTO user (`teamID`, `username`, `role`, `password`) VALUES (440,"Advance","Advance","$2a$10$PSmlnNjKsbpwD54e0qB40ez..CWLyq1UF6E1vYeJYL6AHt2YkBKNG"); -- Advance
INSERT INTO user (`teamID`, `username`, `role`, `password`) VALUES (440,"Photographer","Photographer","$2a$10$PSmlnNjKsbpwD54e0qB40ez..CWLyq1UF6E1vYeJYL6AHt2YkBKNG"); -- Photographer

INSERT INTO section (`sectionName`) VALUES ("Cover Page");
INSERT INTO section (`sectionName`,`path`) VALUES ("Itinerary","/pdf_viewer/F2_Itinerary.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("Key Contacts","/pdf_viewer/F3_Key_Mission_Contacts.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("CrewRespByItinerary","/pdf_viewer/F4_CREW_Responsibilities_by_ITINERARY.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("CrewRespByAssign","/pdf_viewer/F4_CREW_Responsibilities_by_ITINERARY.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("Advance CrewCheckList","/pdf_viewer/F6_Advance_Team_Checklist.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("Arlington Info","/pdf_viewer/F7_Arlington_Security_Message.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("Arlington Reservation","/pdf_viewer/F8_Arlington_Approval_Information.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("Navy Yard And Museum Reservation","/pdf_viewer/F10_tour_notes_with_Navy_Museum.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("DC Tour Notes","/pdf_viewer/F10_DC_tour_notes_rev_4-24-19.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("Incident Report Forms","/pdf_viewer/F11_Incident_Report.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("Hilton Evac Procedure","/pdf_viewer/F12_Hilton_Fire_Procedure.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("Hilton Crisis Plan","/pdf_viewer/F13_Hilton_Crisis_Plan.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("POWMIA Ceremony","/pdf_viewer/F14_POW-MIA_Table_Ceremony.pdf");
INSERT INTO section (`sectionName`) VALUES ("Banquet Script");
INSERT INTO section (`sectionName`) VALUES ("Fact Sheet");

INSERT INTO section (`sectionName`,`path`) VALUES ("Crew Info","/pdf_viewer/TS1_Crew_Contact_Information.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("National Spreadsheet","/pdf_viewer/TS2_National_Spreadsheet.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("Bus1 List","/buses");
INSERT INTO section (`sectionName`,`path`) VALUES ("Bus2 List","/buses");
INSERT INTO section (`sectionName`,`path`) VALUES ("Bus3 List","/buses");
INSERT INTO section (`sectionName`,`path`) VALUES ("VetAndGuardPhoneNums","/pdf_viewer/TS6_Vet_&_Guardian_Conact_Info.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("Hilton Room Assignments","/hotel_reservations");
INSERT INTO section (`sectionName`) VALUES ("Veteran Service Notes");
INSERT INTO section (`sectionName`) VALUES ("Plane Boarding List");
INSERT INTO section (`sectionName`) VALUES ("Roll Call Sheets");
INSERT INTO section (`sectionName`) VALUES ("Hotel CheckIn List Sunday");
INSERT INTO section (`sectionName`,`path`) VALUES ("SWA Passenger List","/pdf_viewer/TS_11A_SWAM66-48.pdf");
INSERT INTO section (`sectionName`,`path`) VALUES ("Veterans List","/veterans");
INSERT INTO section (`sectionName`,`path`) VALUES ("Admin Panel","/admin");
INSERT INTO section (`sectionName`) VALUES ("Export Feature");
INSERT INTO section (`sectionName`) VALUES ("Medical Info");



-- Generic Admin
INSERT INTO permissions VALUES (1,1,1,1);
INSERT INTO permissions VALUES (1,2,1,1);
INSERT INTO permissions VALUES (1,3,1,1);
INSERT INTO permissions VALUES (1,4,1,1);
INSERT INTO permissions VALUES (1,5,1,1);
INSERT INTO permissions VALUES (1,6,1,1);
INSERT INTO permissions VALUES (1,7,1,1);
INSERT INTO permissions VALUES (1,8,1,1);
INSERT INTO permissions VALUES (1,9,1,1);
INSERT INTO permissions VALUES (1,10,1,1);
INSERT INTO permissions VALUES (1,11,1,1);
INSERT INTO permissions VALUES (1,12,1,1);
INSERT INTO permissions VALUES (1,13,1,1);
INSERT INTO permissions VALUES (1,14,1,1);
INSERT INTO permissions VALUES (1,15,1,1);
INSERT INTO permissions VALUES (1,16,1,1);
INSERT INTO permissions VALUES (1,17,1,1);
INSERT INTO permissions VALUES (1,18,1,1);
INSERT INTO permissions VALUES (1,19,1,1);
INSERT INTO permissions VALUES (1,20,1,1);
INSERT INTO permissions VALUES (1,21,1,1);
INSERT INTO permissions VALUES (1,22,1,1);
INSERT INTO permissions VALUES (1,23,1,1);
INSERT INTO permissions VALUES (1,24,1,1);
INSERT INTO permissions VALUES (1,25,1,1);
INSERT INTO permissions VALUES (1,26,1,1);
INSERT INTO permissions VALUES (1,27,1,1);
INSERT INTO permissions VALUES (1,28,1,1);
INSERT INTO permissions VALUES (1,29,1,1);
INSERT INTO permissions VALUES (1,30,1,1);
INSERT INTO permissions VALUES (1,31,1,1);
INSERT INTO permissions VALUES (1,32,1,1);

-- Eric Young
INSERT INTO permissions VALUES (2,1,1,1);
INSERT INTO permissions VALUES (2,2,1,1);
INSERT INTO permissions VALUES (2,3,1,1);
INSERT INTO permissions VALUES (2,4,1,1);
INSERT INTO permissions VALUES (2,5,1,1);
INSERT INTO permissions VALUES (2,6,1,1);
INSERT INTO permissions VALUES (2,7,1,1);
INSERT INTO permissions VALUES (2,8,1,1);
INSERT INTO permissions VALUES (2,9,1,1);
INSERT INTO permissions VALUES (2,10,1,1);
INSERT INTO permissions VALUES (2,11,1,1);
INSERT INTO permissions VALUES (2,12,1,1);
INSERT INTO permissions VALUES (2,13,1,1);
INSERT INTO permissions VALUES (2,14,1,1);
INSERT INTO permissions VALUES (2,15,1,1);
INSERT INTO permissions VALUES (2,16,1,1);
INSERT INTO permissions VALUES (2,17,1,1);
INSERT INTO permissions VALUES (2,18,1,1);
INSERT INTO permissions VALUES (2,19,1,1);
INSERT INTO permissions VALUES (2,20,1,1);
INSERT INTO permissions VALUES (2,21,1,1);
INSERT INTO permissions VALUES (2,22,1,1);
INSERT INTO permissions VALUES (2,23,1,1);
INSERT INTO permissions VALUES (2,24,1,1);
INSERT INTO permissions VALUES (2,25,1,1);
INSERT INTO permissions VALUES (2,26,1,1);
INSERT INTO permissions VALUES (2,27,1,1);
INSERT INTO permissions VALUES (2,28,1,1);
INSERT INTO permissions VALUES (2,29,1,1);
INSERT INTO permissions VALUES (2,30,1,1);
INSERT INTO permissions VALUES (2,31,1,1);
INSERT INTO permissions VALUES (2,32,1,1);

-- Jen Everett
INSERT INTO permissions VALUES (3,1,1,1);
INSERT INTO permissions VALUES (3,2,1,1);
INSERT INTO permissions VALUES (3,3,1,1);
INSERT INTO permissions VALUES (3,4,1,1);
INSERT INTO permissions VALUES (3,5,1,1);
INSERT INTO permissions VALUES (3,6,1,1);
INSERT INTO permissions VALUES (3,7,1,1);
INSERT INTO permissions VALUES (3,8,1,1);
INSERT INTO permissions VALUES (3,9,1,1);
INSERT INTO permissions VALUES (3,10,1,1);
INSERT INTO permissions VALUES (3,11,1,1);
INSERT INTO permissions VALUES (3,12,1,1);
INSERT INTO permissions VALUES (3,13,1,1);
INSERT INTO permissions VALUES (3,14,1,1);
INSERT INTO permissions VALUES (3,15,1,1);
INSERT INTO permissions VALUES (3,16,1,1);
INSERT INTO permissions VALUES (3,17,1,1);
INSERT INTO permissions VALUES (3,18,1,1);
INSERT INTO permissions VALUES (3,19,1,1);
INSERT INTO permissions VALUES (3,20,1,1);
INSERT INTO permissions VALUES (3,21,1,1);
INSERT INTO permissions VALUES (3,22,1,1);
INSERT INTO permissions VALUES (3,23,1,1);
INSERT INTO permissions VALUES (3,24,1,1);
INSERT INTO permissions VALUES (3,25,1,1);
INSERT INTO permissions VALUES (3,26,1,1);
INSERT INTO permissions VALUES (3,27,1,1);
INSERT INTO permissions VALUES (3,28,1,1);
INSERT INTO permissions VALUES (3,29,1,1);
INSERT INTO permissions VALUES (3,30,1,1);
INSERT INTO permissions VALUES (3,31,1,1);
INSERT INTO permissions VALUES (3,32,1,1);


-- Karen Zilora
INSERT INTO permissions VALUES (4,1,1,1);
INSERT INTO permissions VALUES (4,2,1,1);
INSERT INTO permissions VALUES (4,3,1,1);
INSERT INTO permissions VALUES (4,4,1,1);
INSERT INTO permissions VALUES (4,5,1,1);
INSERT INTO permissions VALUES (4,6,1,1);
INSERT INTO permissions VALUES (4,7,1,1);
INSERT INTO permissions VALUES (4,8,1,1);
INSERT INTO permissions VALUES (4,9,1,1);
INSERT INTO permissions VALUES (4,10,1,1);
INSERT INTO permissions VALUES (4,11,1,1);
INSERT INTO permissions VALUES (4,12,1,1);
INSERT INTO permissions VALUES (4,13,1,1);
INSERT INTO permissions VALUES (4,14,1,1);
INSERT INTO permissions VALUES (4,15,1,1);
INSERT INTO permissions VALUES (4,16,1,1);
INSERT INTO permissions VALUES (4,17,1,1);
INSERT INTO permissions VALUES (4,18,1,1);
INSERT INTO permissions VALUES (4,19,1,1);
INSERT INTO permissions VALUES (4,20,1,1);
INSERT INTO permissions VALUES (4,21,1,1);
INSERT INTO permissions VALUES (4,22,1,1);
INSERT INTO permissions VALUES (4,23,1,1);
INSERT INTO permissions VALUES (4,24,1,1);
INSERT INTO permissions VALUES (4,25,1,1);
INSERT INTO permissions VALUES (4,26,1,1);
INSERT INTO permissions VALUES (4,27,1,1);
INSERT INTO permissions VALUES (4,28,1,1);
INSERT INTO permissions VALUES (4,29,1,1);
INSERT INTO permissions VALUES (4,30,1,1);
INSERT INTO permissions VALUES (4,31,1,1);
INSERT INTO permissions VALUES (4,32,1,1);


-- Mission Leader
INSERT INTO permissions VALUES (5,1,1,1); -- Cover Page
INSERT INTO permissions VALUES (5,2,1,1); -- Itinerary
INSERT INTO permissions VALUES (5,3,1,1); -- Key Contacts
INSERT INTO permissions VALUES (5,4,1,1); -- Crew Responsibilities by Itinerary
INSERT INTO permissions VALUES (5,5,1,1); -- Crew Responsibilities by Assignment
INSERT INTO permissions VALUES (5,6,1,1); -- Advance Crew Check List
INSERT INTO permissions VALUES (5,7,1,1); -- Arlington Information
INSERT INTO permissions VALUES (5,8,1,1); -- Arlington Reservation
INSERT INTO permissions VALUES (5,9,1,1); -- Navy Yard and Museum Reservation
INSERT INTO permissions VALUES (5,10,0,0); -- DC Tour Notes
INSERT INTO permissions VALUES (5,11,1,1); -- Incident Report Forms H132 (blank)
INSERT INTO permissions VALUES (5,12,1,1); -- Hilton Fire Alarm evac procedure H102
INSERT INTO permissions VALUES (5,13,1,1); -- Hilton Crisis Plan
INSERT INTO permissions VALUES (5,14,1,1); -- POW MIA Ceremony
INSERT INTO permissions VALUES (5,15,1,1); -- Banquet Script
INSERT INTO permissions VALUES (5,16,1,1); -- Fact Sheet
INSERT INTO permissions VALUES (5,17,1,1); -- Crew Information
INSERT INTO permissions VALUES (5,18,1,1); -- National Spreadsheet
INSERT INTO permissions VALUES (5,19,1,1); -- Bus 1 List
INSERT INTO permissions VALUES (5,20,1,1); -- Bus 2 List
INSERT INTO permissions VALUES (5,21,1,1); -- Bus 3 List
INSERT INTO permissions VALUES (5,22,1,1); -- Vetearn and Guardian Phone Numbers
INSERT INTO permissions VALUES (5,23,1,1); -- Hilton Room Assignments
INSERT INTO permissions VALUES (5,24,1,1); -- Veteran Service Notes
INSERT INTO permissions VALUES (5,25,1,1); -- Plane Boarding List
INSERT INTO permissions VALUES (5,26,0,0); -- Roll Call Sheets
INSERT INTO permissions VALUES (5,27,1,1); -- Hotel Check In List Sunday
INSERT INTO permissions VALUES (5,28,1,1); -- SWA Passenger List
INSERT INTO permissions VALUES (5,29,1,1); -- Veterans List
INSERT INTO permissions VALUES (5,30,1,1); -- Admin Panel
INSERT INTO permissions VALUES (5,31,1,1); -- Export Feature
INSERT INTO permissions VALUES (5,32,1,1); -- Medical Inforamtion


-- Mission Safety Leader
INSERT INTO permissions VALUES (6,1,1,1); -- Cover Page
INSERT INTO permissions VALUES (6,2,1,1); -- Itinerary
INSERT INTO permissions VALUES (6,3,1,1); -- Key Contacts
INSERT INTO permissions VALUES (6,4,1,1); -- Crew Responsibilities by Itinerary
INSERT INTO permissions VALUES (6,5,1,1); -- Crew Responsibilities by Assignment
INSERT INTO permissions VALUES (6,6,1,1); -- Advance Crew Check List
INSERT INTO permissions VALUES (6,7,1,1); -- Arlington Information
INSERT INTO permissions VALUES (6,8,0,0); -- Arlington Reservation
INSERT INTO permissions VALUES (6,9,0,0); -- Navy Yard and Museum Reservation
INSERT INTO permissions VALUES (6,10,0,0); -- DC Tour Notes
INSERT INTO permissions VALUES (6,11,1,1); -- Incident Report Forms H132 (blank)
INSERT INTO permissions VALUES (6,12,1,1); -- Hilton Fire Alarm evac procedure H102
INSERT INTO permissions VALUES (6,13,1,1); -- Hilton Crisis Plan
INSERT INTO permissions VALUES (6,14,0,0); -- POW MIA Ceremony
INSERT INTO permissions VALUES (6,15,0,0); -- Banquet Script
INSERT INTO permissions VALUES (6,16,1,1); -- Fact Sheet
INSERT INTO permissions VALUES (6,17,1,1); -- Crew Information
INSERT INTO permissions VALUES (6,18,1,1); -- National Spreadsheet
INSERT INTO permissions VALUES (6,19,1,1); -- Bus 1 List
INSERT INTO permissions VALUES (6,20,1,1); -- Bus 2 List
INSERT INTO permissions VALUES (6,21,1,1); -- Bus 3 List
INSERT INTO permissions VALUES (6,22,1,1); -- Vetearn and Guardian Phone Numbers
INSERT INTO permissions VALUES (6,23,1,1); -- Hilton Room Assignments
INSERT INTO permissions VALUES (6,24,0,0); -- Veteran Service Notes
INSERT INTO permissions VALUES (6,25,1,1); -- Plane Boarding List
INSERT INTO permissions VALUES (6,26,0,0); -- Roll Call Sheets
INSERT INTO permissions VALUES (6,27,1,1); -- Hotel Check In List Sunday
INSERT INTO permissions VALUES (6,28,1,1); -- SWA Passenger List
INSERT INTO permissions VALUES (6,29,1,1); -- Veterans List
INSERT INTO permissions VALUES (6,30,1,1); -- Admin Panel
INSERT INTO permissions VALUES (6,31,1,1); -- Export Feature
INSERT INTO permissions VALUES (6,32,1,1); -- Medical Information

-- Bus Leader
INSERT INTO permissions VALUES (7,1,1,1); -- Cover Page
INSERT INTO permissions VALUES (7,2,1,1); -- Itinerary
INSERT INTO permissions VALUES (7,3,1,1); -- Key Contacts
INSERT INTO permissions VALUES (7,4,1,1); -- Crew Responsibilities by Itinerary
INSERT INTO permissions VALUES (7,5,1,1); -- Crew Responsibilities by Assignment
INSERT INTO permissions VALUES (7,6,1,1); -- Advance Crew Check List
INSERT INTO permissions VALUES (7,7,1,1); -- Arlington Information
INSERT INTO permissions VALUES (7,8,1,1); -- Arlington Reservation
INSERT INTO permissions VALUES (7,9,1,1); -- Navy Yard and Museum Reservation
INSERT INTO permissions VALUES (7,10,1,1); -- DC Tour Notes
INSERT INTO permissions VALUES (7,11,1,1); -- Incident Report Forms H132 (blank)
INSERT INTO permissions VALUES (7,12,1,1); -- Hilton Fire Alarm evac procedure H102
INSERT INTO permissions VALUES (7,13,1,1); -- Hilton Crisis Plan
INSERT INTO permissions VALUES (7,14,0,0); -- POW MIA Ceremony
INSERT INTO permissions VALUES (7,15,0,0); -- Banquet Script
INSERT INTO permissions VALUES (7,16,1,1); -- Fact Sheet
INSERT INTO permissions VALUES (7,17,1,1); -- Crew Information
INSERT INTO permissions VALUES (7,18,1,1); -- National Spreadsheet
INSERT INTO permissions VALUES (7,19,1,1); -- Bus 1 List
INSERT INTO permissions VALUES (7,20,1,1); -- Bus 2 List
INSERT INTO permissions VALUES (7,21,1,1); -- Bus 3 List
INSERT INTO permissions VALUES (7,22,1,1); -- Vetearn and Guardian Phone Numbers
INSERT INTO permissions VALUES (7,23,1,1); -- Hilton Room Assignments
INSERT INTO permissions VALUES (7,24,1,1); -- Veteran Service Notes
INSERT INTO permissions VALUES (7,25,1,1); -- Plane Boarding List
INSERT INTO permissions VALUES (7,26,1,1); -- Roll Call Sheets
INSERT INTO permissions VALUES (7,27,1,1); -- Hotel Check In List Sunday
INSERT INTO permissions VALUES (7,28,0,0); -- SWA Passenger List
INSERT INTO permissions VALUES (7,29,1,1); -- Veterans List
INSERT INTO permissions VALUES (7,30,1,1); -- Admin Panel
INSERT INTO permissions VALUES (7,31,1,1); -- Export Feature
INSERT INTO permissions VALUES (7,32,1,1); -- Medical Information


-- Bus Safety Leader
INSERT INTO permissions VALUES (8,1,1,1); -- Cover Page
INSERT INTO permissions VALUES (8,2,1,1); -- Itinerary
INSERT INTO permissions VALUES (8,3,1,1); -- Key Contacts
INSERT INTO permissions VALUES (8,4,1,1); -- Crew Responsibilities by Itinerary
INSERT INTO permissions VALUES (8,5,1,1); -- Crew Responsibilities by Assignment
INSERT INTO permissions VALUES (8,6,1,1); -- Advance Crew Check List
INSERT INTO permissions VALUES (8,7,1,1); -- Arlington Information
INSERT INTO permissions VALUES (8,8,0,0); -- Arlington Reservation
INSERT INTO permissions VALUES (8,9,0,0); -- Navy Yard and Museum Reservation
INSERT INTO permissions VALUES (8,10,0,0); -- DC Tour Notes
INSERT INTO permissions VALUES (8,11,1,1); -- Incident Report Forms H132 (blank)
INSERT INTO permissions VALUES (8,12,1,1); -- Hilton Fire Alarm evac procedure H102
INSERT INTO permissions VALUES (8,13,1,1); -- Hilton Crisis Plan
INSERT INTO permissions VALUES (8,14,0,0); -- POW MIA Ceremony
INSERT INTO permissions VALUES (8,15,0,0); -- Banquet Script
INSERT INTO permissions VALUES (8,16,1,1); -- Fact Sheet
INSERT INTO permissions VALUES (8,17,1,1); -- Crew Information
INSERT INTO permissions VALUES (8,18,1,1); -- National Spreadsheet
INSERT INTO permissions VALUES (8,19,1,1); -- Bus 1 List
INSERT INTO permissions VALUES (8,20,1,1); -- Bus 2 List
INSERT INTO permissions VALUES (8,21,1,1); -- Bus 3 List
INSERT INTO permissions VALUES (8,22,1,1); -- Vetearn and Guardian Phone Numbers
INSERT INTO permissions VALUES (8,23,1,1); -- Hilton Room Assignments
INSERT INTO permissions VALUES (8,24,1,1); -- Veteran Service Notes
INSERT INTO permissions VALUES (8,25,1,1); -- Plane Boarding List
INSERT INTO permissions VALUES (8,26,0,0); -- Roll Call Sheets
INSERT INTO permissions VALUES (8,27,1,1); -- Hotel Check In List Sunday
INSERT INTO permissions VALUES (8,28,0,0); -- SWA Passenger List
INSERT INTO permissions VALUES (8,29,1,1); -- Veterans List
INSERT INTO permissions VALUES (8,30,1,1); -- Admin Panel
INSERT INTO permissions VALUES (8,31,1,1); -- Export Feature
INSERT INTO permissions VALUES (8,32,1,1); -- Medical Information

-- Mission Assistant
INSERT INTO permissions VALUES (9,1,1,1); -- Cover Page
INSERT INTO permissions VALUES (9,2,1,1); -- Itinerary
INSERT INTO permissions VALUES (9,3,1,1); -- Key Contacts
INSERT INTO permissions VALUES (9,4,1,1); -- Crew Responsibilities by Itinerary
INSERT INTO permissions VALUES (9,5,1,1); -- Crew Responsibilities by Assignment
INSERT INTO permissions VALUES (9,6,1,1); -- Advance Crew Check List
INSERT INTO permissions VALUES (9,7,1,1); -- Arlington Information
INSERT INTO permissions VALUES (9,8,0,0); -- Arlington Reservation
INSERT INTO permissions VALUES (9,9,0,0); -- Navy Yard and Museum Reservation
INSERT INTO permissions VALUES (9,10,0,0); -- DC Tour Notes
INSERT INTO permissions VALUES (9,11,0,0); -- Incident Report Forms H132 (blank)
INSERT INTO permissions VALUES (9,12,1,1); -- Hilton Fire Alarm evac procedure H102
INSERT INTO permissions VALUES (9,13,1,1); -- Hilton Crisis Plan
INSERT INTO permissions VALUES (9,14,0,0); -- POW MIA Ceremony
INSERT INTO permissions VALUES (9,15,0,0); -- Banquet Script
INSERT INTO permissions VALUES (9,16,1,1); -- Fact Sheet
INSERT INTO permissions VALUES (9,17,1,1); -- Crew Information
INSERT INTO permissions VALUES (9,18,1,1); -- National Spreadsheet
INSERT INTO permissions VALUES (9,19,1,1); -- Bus 1 List
INSERT INTO permissions VALUES (9,20,1,1); -- Bus 2 List
INSERT INTO permissions VALUES (9,21,1,1); -- Bus 3 List
INSERT INTO permissions VALUES (9,22,1,1); -- Vetearn and Guardian Phone Numbers
INSERT INTO permissions VALUES (9,23,1,1); -- Hilton Room Assignments
INSERT INTO permissions VALUES (9,24,0,0); -- Veteran Service Notes
INSERT INTO permissions VALUES (9,25,0,0); -- Plane Boarding List
INSERT INTO permissions VALUES (9,26,0,0); -- Roll Call Sheets
INSERT INTO permissions VALUES (9,27,0,0); -- Hotel Check In List Sunday
INSERT INTO permissions VALUES (9,28,0,0); -- SWA Passenger List
INSERT INTO permissions VALUES (9,29,1,1); -- Veterans List
INSERT INTO permissions VALUES (9,30,1,1); -- Admin Panel
INSERT INTO permissions VALUES (9,31,1,1); -- Export Feature
INSERT INTO permissions VALUES (9,32,1,1); -- Medical Information

-- Safety Assistant
INSERT INTO permissions VALUES (10,1,1,1); -- Cover Page
INSERT INTO permissions VALUES (10,2,1,1); -- Itinerary
INSERT INTO permissions VALUES (10,3,1,1); -- Key Contacts
INSERT INTO permissions VALUES (10,4,1,1); -- Crew Responsibilities by Itinerary
INSERT INTO permissions VALUES (10,5,1,1); -- Crew Responsibilities by Assignment
INSERT INTO permissions VALUES (10,6,1,1); -- Advance Crew Check List
INSERT INTO permissions VALUES (10,7,0,0); -- Arlington Information
INSERT INTO permissions VALUES (10,8,0,0); -- Arlington Reservation
INSERT INTO permissions VALUES (10,9,0,0); -- Navy Yard and Museum Reservation
INSERT INTO permissions VALUES (10,10,0,0); -- DC Tour Notes
INSERT INTO permissions VALUES (10,11,0,0); -- Incident Report Forms H132 (blank)
INSERT INTO permissions VALUES (10,12,1,1); -- Hilton Fire Alarm evac procedure H102
INSERT INTO permissions VALUES (10,13,1,1); -- Hilton Crisis Plan
INSERT INTO permissions VALUES (10,14,1,1); -- POW MIA Ceremony
INSERT INTO permissions VALUES (10,15,1,1); -- Banquet Script
INSERT INTO permissions VALUES (10,16,1,1); -- Fact Sheet
INSERT INTO permissions VALUES (10,17,1,1); -- Crew Information
INSERT INTO permissions VALUES (10,18,1,1); -- National Spreadsheet
INSERT INTO permissions VALUES (10,19,1,1); -- Bus 1 List
INSERT INTO permissions VALUES (10,20,1,1); -- Bus 2 List
INSERT INTO permissions VALUES (10,21,1,1); -- Bus 3 List
INSERT INTO permissions VALUES (10,22,1,1); -- Vetearn and Guardian Phone Numbers
INSERT INTO permissions VALUES (10,23,1,1); -- Hilton Room Assignments
INSERT INTO permissions VALUES (10,24,0,0); -- Veteran Service Notes
INSERT INTO permissions VALUES (10,25,0,0); -- Plane Boarding List
INSERT INTO permissions VALUES (10,26,0,0); -- Roll Call Sheets
INSERT INTO permissions VALUES (10,27,0,0); -- Hotel Check In List Sunday
INSERT INTO permissions VALUES (10,28,0,0); -- SWA Passenger List
INSERT INTO permissions VALUES (10,29,1,1); -- Veterans List
INSERT INTO permissions VALUES (10,30,1,1); -- Admin Panel
INSERT INTO permissions VALUES (10,31,1,1); -- Export Feature
INSERT INTO permissions VALUES (10,32,1,1); -- Medical Information

-- Advance
INSERT INTO permissions VALUES (11,1,1,1); -- Cover Page
INSERT INTO permissions VALUES (11,2,1,1); -- Itinerary
INSERT INTO permissions VALUES (11,3,1,1); -- Key Contacts
INSERT INTO permissions VALUES (11,4,1,1); -- Crew Responsibilities by Itinerary
INSERT INTO permissions VALUES (11,5,1,1); -- Crew Responsibilities by Assignment
INSERT INTO permissions VALUES (11,6,1,1); -- Advance Crew Check List
INSERT INTO permissions VALUES (11,7,1,1); -- Arlington Information
INSERT INTO permissions VALUES (11,8,1,1); -- Arlington Reservation
INSERT INTO permissions VALUES (11,9,1,1); -- Navy Yard and Museum Reservation
INSERT INTO permissions VALUES (11,10,0,0); -- DC Tour Notes
INSERT INTO permissions VALUES (11,11,0,0); -- Incident Report Forms H132 (blank)
INSERT INTO permissions VALUES (11,12,1,1); -- Hilton Fire Alarm evac procedure H102
INSERT INTO permissions VALUES (11,13,1,1); -- Hilton Crisis Plan
INSERT INTO permissions VALUES (11,14,0,0); -- POW MIA Ceremony
INSERT INTO permissions VALUES (11,15,0,0); -- Banquet Script
INSERT INTO permissions VALUES (11,16,1,1); -- Fact Sheet
INSERT INTO permissions VALUES (11,17,1,1); -- Crew Information
INSERT INTO permissions VALUES (11,18,1,1); -- National Spreadsheet
INSERT INTO permissions VALUES (11,19,1,1); -- Bus 1 List
INSERT INTO permissions VALUES (11,20,1,1); -- Bus 2 List
INSERT INTO permissions VALUES (11,21,1,1); -- Bus 3 List
INSERT INTO permissions VALUES (11,22,1,1); -- Vetearn and Guardian Phone Numbers
INSERT INTO permissions VALUES (11,23,1,1); -- Hilton Room Assignments
INSERT INTO permissions VALUES (11,24,0,0); -- Veteran Service Notes
INSERT INTO permissions VALUES (11,25,1,1); -- Plane Boarding List
INSERT INTO permissions VALUES (11,26,0,0); -- Roll Call Sheets
INSERT INTO permissions VALUES (11,27,1,1); -- Hotel Check In List Sunday
INSERT INTO permissions VALUES (11,28,1,1); -- SWA Passenger List
INSERT INTO permissions VALUES (11,29,1,1); -- Veterans List
INSERT INTO permissions VALUES (11,30,1,1); -- Admin Panel
INSERT INTO permissions VALUES (11,31,1,1); -- Export Feature
INSERT INTO permissions VALUES (11,32,1,1); -- Medical Information

-- Photographer
INSERT INTO permissions VALUES (12,1,1,1); -- Cover Page
INSERT INTO permissions VALUES (12,2,1,1); -- Itinerary
INSERT INTO permissions VALUES (12,3,1,1); -- Key Contacts
INSERT INTO permissions VALUES (12,4,0,0); -- Crew Responsibilities by Itinerary
INSERT INTO permissions VALUES (12,5,0,0); -- Crew Responsibilities by Assignment
INSERT INTO permissions VALUES (12,6,0,0); -- Advance Crew Check List
INSERT INTO permissions VALUES (12,7,0,0); -- Arlington Information
INSERT INTO permissions VALUES (12,8,0,0); -- Arlington Reservation
INSERT INTO permissions VALUES (12,9,0,0); -- Navy Yard and Museum Reservation
INSERT INTO permissions VALUES (12,10,0,0); -- DC Tour Notes
INSERT INTO permissions VALUES (12,11,0,0); -- Incident Report Forms H132 (blank)
INSERT INTO permissions VALUES (12,12,1,1); -- Hilton Fire Alarm evac procedure H102
INSERT INTO permissions VALUES (12,13,1,1); -- Hilton Crisis Plan
INSERT INTO permissions VALUES (12,14,0,0); -- POW MIA Ceremony
INSERT INTO permissions VALUES (12,15,0,0); -- Banquet Script
INSERT INTO permissions VALUES (12,16,1,1); -- Fact Sheet
INSERT INTO permissions VALUES (12,17,1,1); -- Crew Information
INSERT INTO permissions VALUES (12,18,1,1); -- National Spreadsheet
INSERT INTO permissions VALUES (12,19,1,1); -- Bus 1 List
INSERT INTO permissions VALUES (12,20,1,1); -- Bus 2 List
INSERT INTO permissions VALUES (12,21,1,1); -- Bus 3 List
INSERT INTO permissions VALUES (12,22,0,0); -- Vetearn and Guardian Phone Numbers
INSERT INTO permissions VALUES (12,23,0,0); -- Hilton Room Assignments
INSERT INTO permissions VALUES (12,24,0,0); -- Veteran Service Notes
INSERT INTO permissions VALUES (12,25,0,0); -- Plane Boarding List
INSERT INTO permissions VALUES (12,26,0,0); -- Roll Call Sheets
INSERT INTO permissions VALUES (12,27,0,0); -- Hotel Check In List Sunday
INSERT INTO permissions VALUES (12,28,0,0); -- SWA Passenger List
INSERT INTO permissions VALUES (12,29,0,0); -- Veterans List
INSERT INTO permissions VALUES (12,30,0,0); -- Admin Panel
INSERT INTO permissions VALUES (12,31,0,0); -- Export Feature
INSERT INTO permissions VALUES (12,32,0,0); -- Medical Information
USE honor_flight

UPDATE veteran SET team_id = 447 WHERE team_id IS NULL OR team_id = '';
UPDATE veteran SET mission_id = 69 WHERE mission_id IS NULL OR mission_id = '';
UPDATE veteran SET bus_id = 160 WHERE veteran_id < 8000;
UPDATE veteran SET bus_id = 159 WHERE veteran_id < 6000;
UPDATE veteran SET bus_id = 158 WHERE veteran_id < 5000;
UPDATE veteran SET team_id = 443 WHERE veteran_id > 5000 AND veteran_id < 5700;
UPDATE veteran SET team_id = 445 WHERE veteran_id < 5001;
UPDATE veteran SET team_id = 442 WHERE veteran_id > 5700;
UPDATE veteran SET med_code = "Green" WHERE veteran_id > 5000 AND veteran_id < 5700;
UPDATE veteran SET med_code = "Red" WHERE veteran_id < 5001;
UPDATE veteran SET med_code = "Yellow" WHERE veteran_id > 5700;
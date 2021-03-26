const express = require('express');
const router = express.Router();

const teamController = require('../controllers/team.controller');

// get all teams
router.get('/teams', teamController.getTeamList);


// get team by ID
router.get('/teams/:id',teamController.getTeamByID);

// create new team
router.post('/teams', teamController.createNewTeam);

// update team
router.put('/teams/:id', teamController.updateTeam);

// delete team
router.delete('/teams/:id',teamController.deleteTeam);

module.exports = router;

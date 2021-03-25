const express = require('express');
const router = express.Router();

const teamController = require('../controllers/team.controller');

// get all teams
router.get('/', teamController.getTeamList);

// get team by ID
router.get('/:id',teamController.getTeamByID);

// create new team
router.post('/', teamController.createNewTeam);

// update team
router.put('/:id', teamController.updateTeam);

// delete team
router.delete('/:id',teamController.deleteTeam);

module.exports = router;

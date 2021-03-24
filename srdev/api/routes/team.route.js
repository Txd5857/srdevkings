const express = require('express');
const router = express.Router();

const teamController = require('../controllers/team.controller');

// get all employees
router.get('/', teamController.getTeamList);

// get employee by ID
router.get('/:id',teamController.getTeamByID);

// create new employee
router.post('/', teamController.createNewTeam);

// update employee
router.put('/:id', teamController.updateTeam);

// delete employee
router.delete('/:id',teamController.deleteTeam);

module.exports = router;

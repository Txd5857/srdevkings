const express = require('express');
const teamsRouter = express.Router();

teamsRouter.get('',async(req,res)=> {
    res.render('teams');
})

module.exports = teamsRouter; 
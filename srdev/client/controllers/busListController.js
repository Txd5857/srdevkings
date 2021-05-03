const axios = require('axios');

let handleHelloWorld = async (req, res) => {
    try {
        // Grab all data from the buses table in our database
        const busAPI = await axios.get('http://localhost:5002/api/buses');

        // render the buses page with a table that is populated
        // with the data from the buses table from the database
        return res.render('buses', { 
            buses : busAPI.data
        });
    }catch (error) {
        if(error.response){
            // Something went wrong
            // log the error output so it can be debugged
            console.log(error.response.data);
        }
    }
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
};

const axios = require('axios');

let handleHelloWorld = async (req, res) => {

    try {
        // Make a call to the server and GET the data for all veterans in the veterans table.
        const veteranAPI = await axios.get('http://localhost:5002/api/veterans');
        // Render the veterans page and populate it with the list of veteran data we got from the server.
        return res.render('veterans', { veterans : veteranAPI.data});
        
    }catch (error) {
    if(error.response){
        // something went wrong, needs to be debugged.
        console.log(error.response.data);
    }
    }
};


let handleByeWorld = async (req, res) => {
    // User clicked on a specific veteran in the veterans page!
    // Store that veteran's id in a variable so we can pull all data for that entry.
    const veteran_id = req.params.id;
    console.log(veteran_id);
    // Construct a query for the server, pass the veteran's id as a query parameter
    const api_url = "http://localhost:5002/api/veterans/"+veteran_id;
    try {
         // Make the GET call using the query we just constructed
         const veteranAPI = await axios.get(api_url);
         // Render the veteran's profile page with all of the data we just pulled about that id
         // from the database so that the page can be populated.
         return res.render('veteran', { veteran_id : veteran_id, veteran : veteranAPI.data});
    }catch (error) {
        if(error.response){
            // something went wrong, needs to be debugged.
            console.log(error.response.data);
            return res.render('homepage');
        }
    }
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
    handleByeWorld: handleByeWorld,
};

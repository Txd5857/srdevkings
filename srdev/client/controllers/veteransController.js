const axios = require('axios');

let handleHelloWorld = async (req, res) => {

    try {
        const veteranAPI = await axios.get('http://localhost:5002/api/veterans');

        return res.render('veterans', { veterans : veteranAPI.data});
        
    }catch (error) {
    if(error.response){
        console.log(error.response.data);
    }
    }
};


let handleByeWorld = async (req, res) => {
    const veteran_id = req.params.id;
    console.log(veteran_id);
    const api_url = "http://localhost:5002/api/veterans/"+veteran_id;
    try {
         const veteranAPI = await axios.get(api_url);
         return res.render('veteran', { veteran_id : veteran_id, veteran : veteranAPI.data});
    }catch (error) {
        if(error.response){
            return res.render('homepage');
            console.log(error.response.data);
        }
    }
};

let checkVeteran = async (req, res) => {

};

module.exports = {
    handleHelloWorld: handleHelloWorld,
    handleByeWorld: handleByeWorld,
    checkVeteran: checkVeteran
};

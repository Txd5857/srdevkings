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

module.exports = {
    handleHelloWorld: handleHelloWorld,
};

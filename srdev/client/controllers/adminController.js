let handleHelloWorld = async (req, res) => {
    return res.render("admin",{
        user: req.user
    });
};

let handleByeWorld = async (req, res) => {
    const userID = req.params.id;
    console.log(userID);
    try {
         return res.render('change_password', { 
             userID : userID
        });
    }catch (error) {
        if(error.response){
            return res.render('homepage');
            console.log(error.response.data);
        }
    }
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
    handleByeWorld: handleByeWorld
};

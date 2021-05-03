let handleHelloWorld = async (req, res) => {
    // render the admin page
    return res.render("admin",{
        user: req.user
    });
};

let handleByeWorld = async (req, res) => {

    // User is trying to change the password for an account
    // Grab the target account's ID and render the change_password page
    const userID = req.params.id;
    console.log(userID);
    try {
         return res.render('change_password', {
             userID : userID
        });
    }catch (error) {
        if(error.response){
            // Something went wrong. Log the error output
            // and kick the user back to the homepage
            console.log(error.response.data);
            return res.render('homepage');
        }
    }
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
    handleByeWorld: handleByeWorld
};

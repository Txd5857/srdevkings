let handleHelloWorld = async (req, res) => {
    return res.render("mission_creation",{
        user: req.user
    });
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
};
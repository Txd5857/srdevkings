let handleHelloWorld = async (req, res) => {
    // Mission creation page was requested
    // render the page
    return res.render("mission_creation",{
        user: req.user
    });
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
};
let handleHelloWorld = async (req, res) => {
    // user is trying to access the export page
    // render the export page
    return res.render("export",{
        user: req.user
    });
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
};
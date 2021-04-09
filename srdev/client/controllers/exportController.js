let handleHelloWorld = async (req, res) => {
    return res.render("export",{
        user: req.user
    });
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
};
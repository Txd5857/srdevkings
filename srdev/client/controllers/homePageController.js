let handleHelloWorld = async (req, res) => {
    return res.render("homepage",{
        user: req.user
    });
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
};

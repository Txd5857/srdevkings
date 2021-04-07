let handleHelloWorld = async (req, res) => {
    return res.render("admin",{
        user: req.user
    });
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
};

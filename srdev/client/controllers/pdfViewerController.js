let handleHelloWorld = async (req, res) => {
    return res.render("pdf_viewer",{
        user: req.user
    });
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
};
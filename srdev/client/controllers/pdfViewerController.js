let handleHelloWorld = async (req, res) => {
    console.log(req.params);
    return res.render("pdf_viewer",{
        user: req.user,
        filePath: "../pdf_files/"+req.params.filePath
    });
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
};
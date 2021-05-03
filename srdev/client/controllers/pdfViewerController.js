let handleHelloWorld = async (req, res) => {
    // pdfViewer page needs to be rendered with a specific file
    // render the page with that file's designated path
    console.log(req.params);
    return res.render("pdf_viewer",{
        user: req.user,
        filePath: "../pdf_files/"+req.params.filePath
    });
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
};
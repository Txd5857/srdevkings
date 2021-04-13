
const VeteranModel = require('../models/veteran.model');

// get veteran by ID
exports.getFileByPath = (req, res)=>{

    var fileName = '../client/public/pdf_files/F2_Itinerary_M66.pdf';
    // res.sendFile(fileName, options, function (err) {
    res.sendFile(fileName, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
            next();
        }
    });

    // //console.log('get emp by id');
    // FileModel.getFileByPath(req.params.id, (err, file)=>{
    //     if(err)
    //     res.send(err);
     
    //     // var options = {
    //     //     root: path.join(__dirname)
    //     // };
        
    //     var fileName = '../client/public/pdf_files/F2_Itinerary_M66.pdf';
    //     // res.sendFile(fileName, options, function (err) {
    //     res.sendFile(fileName, function (err) {
    //         if (err) {
    //             next(err);
    //         } else {
    //             console.log('Sent:', fileName);
    //             next();
    //         }
    //     });

    //     console.log('sending file',file[0]);
    //     res.send(file[0]);
    // })
}
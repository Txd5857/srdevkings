
const VeteranModel = require('../models/veteran.model');

// get veteran by ID
exports.getFileByPath = (req, res)=>{

    var fileName = '../client/public/pdf_files/F2_Itinerary_M66.pdf';
    res.sendFile(fileName, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
            next();
        }
    });
}
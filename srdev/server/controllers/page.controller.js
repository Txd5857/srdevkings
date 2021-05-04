
const PageModel = require('../models/page.model');

// get all pages list
exports.getPageList = (req, res)=>{
    //console.log('get emp by id');
    console.log(req.params.id);

    PageModel.getAllPages(req.params.id, (err, pages)=>{
        console.log(req.params.id);
        console.log('pages',pages);
        res.send(pages);
    })
}

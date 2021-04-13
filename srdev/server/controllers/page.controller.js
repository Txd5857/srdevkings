
const PageModel = require('../models/page.model');

// get all pages list
exports.getPageList = (req, res)=>{
    //console.log('get emp by id');
    console.log(req.params.id);

    PageModel.getAllPages(req.params.id, (err, pages)=>{
        console.log(req.params.id);
        // if(err)
        // res.send(err);

         // Format Guardian's DOB for display
        //  veteran[0].guardian_dob_year = veteran[0].guardian_dob.getFullYear();
        //  veteran[0].guardian_dob_month = veteran[0].guardian_dob.getMonth()+1;
        //  veteran[0].guardian_dob_day = veteran[0].guardian_dob.getDate();
 
        //  // Format Veteran's DOB for display and Calculate age
        //  veteran[0].dob_year = veteran[0].dob.getFullYear();
        //  veteran[0].dob_month = veteran[0].dob.getMonth()+1;
        //  veteran[0].dob_day = veteran[0].dob.getDate();
        //  currentDate = new Date();
        //  vetAge = currentDate.getFullYear() - veteran[0].dob_year;
        //  if(currentDate.getMonth()+1 > veteran[0].dob_month){
        //      veteran[0].age = vetAge;
        //  } else if(currentDate.getMonth()+1 === veteran[0].dob_month && currentDate.getDate() >= veteran[0].dob_day) {
        //      veteran[0].age = vetAge;
        //  } else {
        //      veteran[0].age = vetAge-1;
        //  }

        console.log('pages',pages);
        res.send(pages);
    })
}

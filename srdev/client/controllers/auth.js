const mysqlConnection = require('../../server/db_config/connection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (req,res)=>{
    try{
        const { username, password } = req.body;
        
        if( !username || !password ){
            return res.status(400).render('create', {
                message: 'Please provide an username and a password'
            });
        }


        mysqlConnection.query('SELECT * FROM user WHERE username=?', [username], async (error, results)=>{
            if(!results || results == "" || !(await bcrypt.compare(password, results[0].password)) ){
                res.status(401).render('create', {
                    message: 'Email or password is incorrect.'
                });
            }else{
                const id = results[0].user_id;
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: '90d'
                });

                mysqlConnection.query('UPDATE user SET token=? WHERE email=?', [token,email], async (error, results)=>{
                    if(error){
                        console.log(error);
                    }
                });

                //set token into the cookies
                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    )
                };

                res.cookie('jwt', token, cookieOptions);
                res.status(200).render('homepage', {
                    message: results[0].full_name,
                    id: id
                });
            }
        });
    }catch (error) {
        console.log(error);
    }
}

exports.register = (req,res)=>{
    const { username, password } = req.body;

    mysqlConnection.query('SELECT username FROM user WHERE username=?', [username], async (error, results)=>{

        let hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        mysqlConnection.query('INSERT INTO user SET ?', {username: username, password: hashedPassword}, (error, results)=>{
            if(error){
                console.log(error);
                return res.render('register', {
                    message: 'One or more fields were filled out incorrectly. Please try again.'
                });
            }else{
                console.log(results);
                return res.render('login',{
                    message: 'Account creation: Success. Please log in.'
                });
            }
        })
    });
}

 // if( error ){
        //     console.log(error);
        // }

        // if( results.length > 0 ){
        //     return res.render('signup', {
        //         message: 'Account creation: Failure. That email is taken.'
        //     });
        // } else if( password !== confirmpassword){
        //     return res.render('signup', {
        //         message: 'Account creation: Failure. Passwords do not match.'
        //     });
        // }else if( !name || !email || !address || !zip || !password || !confirmpassword || name == "" || email == "" || address == "" || zip == "" || password == "" || confirmpassword == ""){
        //     return res.render('signup',{
        //         message: 'Account creation: Failure. One or more fields are blank.'
        //     });
        // }
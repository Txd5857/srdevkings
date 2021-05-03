const mysqlConnection = require('../../server/db_config/connection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (req,res)=>{
    try{
        const { username, password } = req.body;
        
        if( !username || !password ){
            // One of the required fields was empty.
            // Send an error to the client and alert the user.
            return res.status(400).render('create', {
                message: 'Please provide an username and a password'
            });
        }

        // Grab the targeted username and compare the password for that username to the password
        // that was given by the client.
        mysqlConnection.query('SELECT * FROM user WHERE username=?', [username], async (error, results)=>{
            if(!results || results == "" || !(await bcrypt.compare(password, results[0].password)) ){
                // Username doesn't exist or password was wrong.
                // Send an error back to the client.
                res.status(401).render('create', {
                    message: 'Email or password is incorrect.'
                });
            }else{
                // User logged in successfully! Create a session for them using a JsonWebToken.
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

exports.change_password = (req,res)=>{
    console.log(req.body);
    const { userID, newPasswordAttempt } = req.body;
    mysqlConnection.query('SELECT userID FROM user WHERE userID=?', [userID], async (error, results)=>{

        let hashedPassword = await bcrypt.hash(newPasswordAttempt, 10);
        console.log(hashedPassword);
        mysqlConnection.query('UPDATE user SET ? WHERE userID='+userID, {password: hashedPassword}, (error, results)=>{
            if(error){
                console.log(error);
                return res.render('change_password', {
                    message: 'An error occurred. Please try again.'
                });
            }else{
                console.log(results);
                return res.redirect('../admin/users');
            }
        })
    });
}
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy
// const bcrypt = require('bcrypt');
// const mysqlConnection = require('./server/db_config/connection');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// function initialize(passport){
//     const authenticateUser = async (username, password, done) => {

//         const user = getUserByUsername(username);
//         if (user ==null) {
//             return done(null,false, {message: 'No user with that username' })
//         }
//         try {
//             if(await bcrypt.compare(password, user.password)) {
//                 return done(null,user);
//             } else {
//                 return done(null,false,{message: 'Password incorrect'});
//             }
//         } catch(e) {
//             return done(e)
//          }
//     }

//     passport.use(new LocalStrategy({usernameField: 'username'}, authenticateUser));
//     passport.serializeUser((user,done) => done(null, user.id));
//     passport.deserializeUser((id,done) => {}); 
// }

// function getUserByUsername(username){
//     try{
//         mysqlConnection.query('SELECT * FROM user WHERE username=?', [username], async (error, results)=>{
//         if(!results || results == "" || !(await bcrypt.compare(password, results[0].password)) ){
//             return null;
//         }else{
//             console.log(results);
//             return results;
//             // const id = results[0].user_id;
//             // const token = jwt.sign({ id }, process.env.JWT_SECRET, {
//             //     expiresIn: '90d'
//             // });

//             // mysqlConnection.query('UPDATE user SET token=? WHERE email=?', [token,email], async (error, results)=>{
//             //     if(error){
//             //         console.log(error);
//             //     }
//             // });

//             // //set token into the cookies
//             // const cookieOptions = {
//             //     expires: new Date(
//             //         Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
//             //     )
//             // };

//             // res.cookie('jwt', token, cookieOptions);
//             // res.status(200).render('homepage', {
//             //     message: results[0].full_name,
//             //     id: id
//             // });
//         }
//     });
//     }catch (error) {
//         console.log(error);
//     }

// };
// module.exports = initialize
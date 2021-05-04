
const UserModel = require('../models/user.model');

// get all user list
exports.getUserList = async (req, res,next)=> {
    try{
        let results = await UserModel.getAllUsers();
        console.log(results);
        res.json(results);
    }catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
   
}

// get user by ID
exports.getUserByID = (req, res)=>{
    UserModel.getUserByID(req.params.id, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single user data',user[0]);
        res.send(user[0]);
    })
}

// create new user
exports.createNewUser = (req, res) =>{
    const userReqData = new UserModel(req.body);
    console.log('userReqData', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.createUser(userReqData, (err, user)=>{
            if(err){
                res.send(err);
            } else {
                res.json({status: true, message: 'User Created Successfully', data: user})
            }
        })
    }
}

// update user
exports.updateUser = (req, res)=>{
    const userReqData = new UserModel(req.body);
    console.log('userReqData update', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.updateUser(req.params.id, userReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User updated Successfully'})
        })
    }
}

// delete user
exports.deleteUser = (req, res)=>{
    UserModel.deleteUser(req.params.id, (err, user)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'User deleted successully!',data: user});
    })
}
var express = require('express');
var router = express.Router();
const userModel = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', function(req,res,next){
		console.log(req.body);
	if(!req.body.email || !req.body.password){
        res.status(400).json({status: "error", message: "you should send email and password", data: null});
        next(err);
    }
	else
	{	
	try{
		userModel.create({
		   name: req.body.name, 
		   email: req.body.email, 
		   password: req.body.password
		   
		 }, (err, result)=>{
		  console.log(err)
		   if(err){
			 res.status(400).json({status: "error", message: err});
		   }
			 res.json({status: "success", message: "product added!!", data: result});    
		})
	   }catch(error){
		 res.status(500).json({status: "error", error: error});
	   }   
	}	   
});

module.exports = router;

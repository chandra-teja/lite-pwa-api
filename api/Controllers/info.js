const mongoose = require("mongoose");
const data = require("../models/userInfoModel");

exports.getAllUserdata = async function (req, res) {
  try {
    const abc = await data.find();
    res.send(abc);
  } catch (err) {
    res.send("get api error", err.message);
  }
};

//get Single user data
exports.getUserdata = async function (req, res) {
  try {
    const userInfo = await data.find({mobileNumber: req.params.mobileNumber})
    res.status(200).send(userInfo);
  } catch (err) {
    res.send("get api error", err.message);
  }
};
  
//POST API
exports.createUserdata = async function (req, res) {
  const newUser = new data({
    name: req.body.name,
    mobileNumber: req.body.mobileNumber,
    address: req.body.address,
    image: req.body.image,
    orderCount: req.body.orderCount,
  });

  try {
    await newUser.save();
    res.send("Data added");
  } catch (err) {
    res.send(err.message);
  }
};

//PATCH API
exports.updateUserdata = async function (req, res) {
  try {
        await data.updateOne({mobileNumber: req.params.id}, 
          {$set : {
        name: req.body.name,
        address: req.body.address,
        image: req.body.image 
      }})
    res.status(200).send('Updated');
  } catch (err) {
    res.send(err.message);
  }
};

//PUT API
exports.updateUserdataPut = async function (req, res) {

  try {
        await data.updateOne({mobileNumber: req.params.id}, 
          {$set : {
        name: req.body.name,
        address: req.body.address,
        image: req.body.image 
      }})
    res.status(200).send('Updated');
  } catch (err) {
    res.send(err.message);
  }
};
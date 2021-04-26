const { Db } = require("mongodb");
var objectId = require('mongodb').ObjectId;
var db = require('../config/connection');
var collection = require('../config/collections')

const { USERS_COLLECTION } = require('../config/collections');
// var collection = require('../config/collections');
var objectId = require('mongodb').ObjectId;
module.exports={
    addSignup : (userdetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.USERS_COLLECTION).insertOne(userdetails).then((data) => {
                resolve(data)
            })
        })
        
    },
    getUsers :()=>{
        return new Promise((resolve,reject)=>{
            let users = db.get().collection(collection.USERS_COLLECTION).find().toArray()
                resolve(users)
                console.log(users)
        
        })
    },
    editUser : (userId)=>{
        return new Promise((resolve,reject)=>{
            
            console.log(userId)
            db.get().collection(collection.USERS_COLLECTION).findOne({_id : objectId(userId)}).then((data)=>{
                resolve(data)
            })
        })
    },
    edited : (userDetails,userId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.USERS_COLLECTION).updateOne({_id : objectId(userId)},{
                $set:{
                    firstname:userDetails.firstname,
                    secondname:userDetails.secondname,
                    number:userDetails.number,
                    email:userDetails.email,
                    password:userDetails.password
                }
            }).then((response)=>{
                resolve(response)
            })
        })
    }
}

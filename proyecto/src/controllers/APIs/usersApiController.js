const db = require('../../database/models');
const path = require('path');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');



const usersApiController= {
list: async(req,res)=>{
    try {
        let users = await db.Usuarios.findAll()
        return res.json({
            meta:{
                status: 200,
                total: users.length,
                url: req.originalUrl
            },
            data: {...users},
           })
    } catch (error) {
        console.log(error.message)
    }
   
},
detail: async (req, res)=>{
	try {
        let user = await db.Usuarios.findByPk(req.params.id)
     return res.status(200).json({
        meta:{
            status: 200,
            url:req.originalUrl
        },
        data: user,
    })
    } catch (error) {
        console.log(error.message)
    }
},
register: async (req, res)=>{
       try {
           let userToCreate = await db.Usuarios.create(req.body);
           return res.json({
            meta:{
                status: 201,
                url:req.originalUrl
            },
            data: userToCreate,    
        })
       } catch (error) {
        console.log(error.message)
       }
}
}

module.exports = usersApiController;
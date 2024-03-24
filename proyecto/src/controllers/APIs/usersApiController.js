const db = require('../../database/models');
const path = require('path');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const usersApiController= {
list: async(req,res)=>{
    try {
        let users = await db.Usuarios.findAll({include: ['type']})
        const dataUsers = users.map(user =>{
            return {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                type: user.type,
                email: user.email,
                image: user.avatar,
                detail: `http://localhost:3002/users/detail/${user.id}`
            }
        })
        return res.json({
            meta:{
                status: 200,
                count: users.length,
                detail: req.originalUrl,
                
            },
            data: dataUsers,
           })
    } catch (error) {
        console.log(error.message)
    }
   
},
detail: async (req, res)=>{
	try {
        console.log(req.file)
        let user = await db.Usuarios.findByPk(req.params.id,{
            attributes:{
                exclude:['password','typeId']
            }
        })
        const avatarUrl = `${req.protocol}://${req.get('host')}/img/users/${user.avatar}`;
        return res.status(200).json({
            meta:{
            status: 200,
            url:req.originalUrl
        },
        data: {
            user,
            avatar: avatarUrl
        }
    })
    } catch (error) {
        console.log(error.message)
    }
}
}

module.exports = usersApiController;
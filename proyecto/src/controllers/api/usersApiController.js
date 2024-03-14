const db = require('../../database/models');

const usersApiController= {

   users:(req,res)=>{
    db.Usuarios.findAll()
        .then(users => {
            res.json({
                meta: {
                    status: 200,
                    length: users.length,
                    url: req.originalUrl
                },
                data: { ...users },
            })
            
        })
   },
   detail:(req,res)=>{},
   register:(req,res)=>{},
   procesarRegister:(req,res)=>{},
   login:(req,res)=>{},
   procesarLogin:(req,res)=>{},
   profileUser:(req,res)=>{},
   logout:(req,res)=>{}
}

module.exports = usersApiController
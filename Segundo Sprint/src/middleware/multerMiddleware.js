/* const path = require ('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
       
        cb(null, path.join(__dirname, '../public/img/users'))
    }, filename: (req, file, cb) => {
        
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});
const uploadFile = multer({storage});

module.exports = uploadFile; */
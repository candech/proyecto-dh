const path = require ('path');
const multer = require('multer');

const storageUsers = multer.diskStorage({
    destination:(req, file, cb) => {
       
        cb(null, path.join(__dirname, '../public/img/users'))
    }, filename: (req, file, cb) => {
        
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

const uploadFileUsers = multer({storage: storageUsers});

const storageProducts = multer.diskStorage({
    destination:(req, file, cb) => {
       
        cb(null, path.join(__dirname, '../public/img/products'))
    }, filename: (req, file, cb) => {
        
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});
const uploadFileProducts = multer({storage: storageProducts});

module.exports ={uploadFileProducts, uploadFileUsers};

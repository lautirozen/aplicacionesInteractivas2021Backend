const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: 'dkqvhpuus', //reemplazar con sus credenciales
    api_key: '378141488546977', 
    api_secret: 'ztqPAmWyTi5S3eTWLEBrheYsb7A'
}); 
module.exports = cloudinary;
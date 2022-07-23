const multer = require('multer')

module.exports = multer({
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg') {
            return cb(new multer.MulterError('Arquivo em formato estranho'));
        }

        return cb(null, true);
    },
    storage: multer.diskStorage({})
});

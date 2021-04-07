const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/img'))
    },
    filename: function (req, file, cb) {
        const timeStamp = Date.now();
        const ramdomStr = Math.random().toString(36).slice(-6);
        const ext = path.extname(file.originalname);
        const filename = `${timeStamp}-${ramdomStr}${ext}`
        cb(null, filename)
        // cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({
    storage: storage, limits: {
        fileSize: 1024 * 1024 * 2
    },
    fileFilter (req, file, cb) {
        const extname = path.extname(file.originalname)
        const whiteList = ['.jpg', '.gif', '.png']
        if (whiteList.includes(extname)) {
            cb(null, true)
        }
        else {
            cb(new Error(`you ext name of ${extname} is not support`))
        }
    }
})



router.post('/', upload.single('img'), (req, res) => {
    const url = `http://${req.headers.host}/img/${req.file.filename}`
    res.send({
        code: 0,
        msg: "",
        data: url
    })
})


module.exports = router;
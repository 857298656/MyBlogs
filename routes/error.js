
const getMsg = require('./getSendResult');
const multer = require('multer')
module.exports = (err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            console.log(err);
            res.status(200).send(getMsg.getErr(err.message));
            return;
        }
        const errObj = err instanceof Error ? err.message : err;
        res.status(500).send(getMsg.getErr(errObj));
    }
    else {
        next();
    }
}
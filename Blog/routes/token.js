const { getErr } = require('./getSendResult');
const { pathToRegexp } = require('path-to-regexp');
const jwt = require("./jwt");
const needTokenApi = [
    {
        method: "POST",
        path: "/api/article/add"
    },
    {
        method: "GET",
        path: "/api/article/:id"
    },
    {
        method: "PUT",
        path: "/api/article/:id"
    },
    {
        method: "GET",
        path: "/api/admin/whoami"
    },
    {
        method: "GET",
        path: "/api/comment"
    },
    {
        method: "POST",
        path: "/api/comment/add"
    },
    {
        method: "DETELE",
        path: "/api/comment/:id"
    },
    {
        method: "GET",
        path: "/api/comment/commuser"
    },

]

//用于解析token
module.exports = (req, res, next) => {
    const apis = needTokenApi.filter(api => {
        const reg = pathToRegexp(api.path);
        return api.method === req.method && reg.test(req.path);
    })
    if (apis.length === 0) {
        next();
        return;
    }
    const result = jwt.verify(req);
    if (result) {
        //认证通过
        req.userId = result.id;
        next();
    }
    else {
        //认证失败
        handleNotToken(req, res, next);
    }
}

function handleNotToken (req, res, next) {
    res.status(403).send(getErr("you dont have any token to access the api", 403))
}
const express = require('express')
const app = express()
const cors = require('cors')
const history = require('connect-history-api-fallback');

app.use(history({
    htmlAcceptHeaders: ['text/html'],
    verbose: true
}));


// 映射public目录中的静态资源
const path = require('path')
const staticRoot = path.resolve(__dirname, '../public')
app.use(express.static(staticRoot))

app.use(
    cors({
        origin (origin, callback) {
            if (!origin) {
                callback(null, '*')
                return
            }
            callback(null, origin)
        },
        credentials: true,
    })
);

const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.use(require('./token'));

//解析application/x-www-form-urlencoded格式的请求体
app.use(express.urlencoded({ extended: true }));

//解析application/json格式的请求体
app.use(express.json());

//处理API的请求
app.use('/api/admin', require('./api/admin'));
app.use('/api/article', require('./api/article'));
app.use('/api/comment', require('./api/comment'));
app.use('/api/upload', require('./api/upload'));

app.use(require('./error'));

const port = 1002;
app.listen(port, () => {
    console.log(`server listen on ${port}`);
})
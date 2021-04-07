import request from './request';


export async function getArticles () {
    const resp = await request().get("/api/article");
    return resp.data;
}

export async function ArticleAdd (title, content, imgurl, author, AdminId) {
    const resp = await request().post("/api/article/add", { title, content, imgurl, author, AdminId });
    resp.data.msg = "添加成功"
    return resp.data;
}

export async function upload () {
    const resp = await request().post('/api/upload');
    return resp.data
}

export async function getArticleId (id) {
    const resp = await request().get(`/api/article/${id}`)
    return resp.data;
}
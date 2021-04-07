import request from './request';

export async function getComments () {
    const resp = await request().get('/api/comment');
    return resp.data
}


export async function addComment (commentId, replyId = '', replyWhoId = '', content, flag = false, ArticleId) {
    const resp = await request().post("/api/comment", { commentId, replyId, replyWhoId, content, flag, ArticleId });
    resp.msg = "添加成功";
    return resp.data;
}

export async function DeleteComment (id) {
    const resp = await request().delete(`/api/comment/${id}`)
    resp.mag = "删除成功"
    return resp.data
}

export async function getCommentId (id) {
    const resp = await request().get(`/api/comment/${id}`);
    return resp.data
}
import request from "./request";


export async function login (loginId, loginPwd) {
    const resp = await request().post("/api/admin/login", { loginId, loginPwd });
    resp.data.msg = "登录成功"
    return resp.data;
}

export function loginOut () {
    localStorage.removeItem("token");
}

export async function SignedIn () {
    const resp = await request().get("/api/admin/whoami");
    return resp.data;
}

export async function loginAdd (loginId, loginPwd) {
    const resp = await request().post("/api/admin/add", { loginId, loginPwd });
    resp.data.msg = '添加成功';
    return resp.data;
}

export async function getLogins () {
    const resp = await request().get("/api/admin");
    return resp.data;
}

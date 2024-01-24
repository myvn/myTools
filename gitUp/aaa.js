process.env.https_proxy='http://127.0.0.1:7890'
process.env.http_proxy='http://127.0.0.1:7890'
process.env.all_proxy='socks5://127.0.0.1:7890'
console.log(process.env);
delete process.env.https_proxy
delete process.env.http_proxy
delete process.env.all_proxy
console.log(process.env);


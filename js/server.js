const hexo = require('hexo');
const { createProxyMiddleware } = require('http-proxy-middleware');

// 初始化Hexo
const app = hexo.server();

// 配置代理规则（和你之前的proxy配置对应）
app.use('/api', createProxyMiddleware({
  target: 'https://www.myskill-blog.cn',  // 目标API
  changeOrigin: true,  // 允许跨域
  pathRewrite: { '^/api': '' }  // 去掉请求路径中的/api前缀
}));

// 启动服务器（默认端口4000）
app.listen(4000, () => {
  console.log('Hexo server running at http://localhost:4000 with proxy');
});
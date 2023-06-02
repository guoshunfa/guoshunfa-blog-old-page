import{_ as l,r as d,o as r,c as t,a as n,b as e,d as i,e as s}from"./app.4659d0e0.js";const c={},o=s(`<h1 id="nginx-部署静态文件" tabindex="-1"><a class="header-anchor" href="#nginx-部署静态文件" aria-hidden="true">#</a> Nginx - 部署静态文件</h1><blockquote><p>以需求为导向，进行配置。</p><p>这里已经默认安装过了Nginx。</p></blockquote><h2 id="_1-简单部署" tabindex="-1"><a class="header-anchor" href="#_1-简单部署" aria-hidden="true">#</a> 1. 简单部署</h2><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server {
  listen       8991;                                                         
  server_name  127.0.0.1;     
  index index.html;
  root /Users/guoshunfa/workspace/my/git-project/panda-doc/docs/.vuepress/dist;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-绑定域名-可多个" tabindex="-1"><a class="header-anchor" href="#_2-绑定域名-可多个" aria-hidden="true">#</a> 2. 绑定域名(可多个)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen       <span class="token number">80</span><span class="token punctuation">;</span>                                                         
  server_name  guoshunfa.cn pandacode.cn blog.pandacode.cn<span class="token punctuation">;</span>     
  index index.html<span class="token punctuation">;</span>
  root /Users/guoshunfa/workspace/my/git-project/panda-doc/docs/.vuepress/dist<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-域名配置ssl" tabindex="-1"><a class="header-anchor" href="#_3-域名配置ssl" aria-hidden="true">#</a> 3. 域名配置ssl</h2>`,7),u={href:"https://developer.aliyun.com/article/766958",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"TODO：没有进行验证",-1),m=s(`<h3 id="_3-1-准备工作" tabindex="-1"><a class="header-anchor" href="#_3-1-准备工作" aria-hidden="true">#</a> 3.1. 准备工作</h3><h4 id="_3-1-1-nginx-的-ssl-模块安装配置" tabindex="-1"><a class="header-anchor" href="#_3-1-1-nginx-的-ssl-模块安装配置" aria-hidden="true">#</a> 3.1.1. Nginx 的 SSL 模块安装配置</h4><p>查看 nginx 是否安装 http_ssl_module 模块。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果出现 configure arguments: –with-http_ssl_module, 则已安装（下面的步骤可以跳过，进入 [准备SSL证书](#3.1.2. 准备SSL 证书)）。</p><p><strong>配置ssl模块</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置ssl模块</span>
<span class="token builtin class-name">cd</span> nginx-1.15.9 <span class="token comment"># nginx目录</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx --with-http_ssl_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 make 命令编译（使用make install会重新安装nginx），此时当前目录会出现 objs 文件夹。</p><p>用新的 nginx 文件覆盖当前的 nginx 文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> ./objs/nginx /usr/local/nginx/sbin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次查看安装的模块（configure arguments: –with-http_ssl_module说明ssl模块已安装）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-V</span>
nginx version: nginx/1.15.9<span class="token punctuation">..</span>.configure arguments: --with-http_ssl_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-2-准备ssl-证书" tabindex="-1"><a class="header-anchor" href="#_3-1-2-准备ssl-证书" aria-hidden="true">#</a> 3.1.2. 准备SSL 证书</h4><p>下载申请好的 ssl 证书文件压缩包到本地并解压（这里是用的 pem 与 key 文件，文件名可以更改）。</p><p>在 nginx 目录新建 cert 文件夹存放证书文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/nginx
<span class="token function">mkdir</span> cert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将这两个文件上传至服务器的 cert 目录里。 这里使用 mac 终端上传至服务器的 scp 命令（这里需要新开一个终端，不要使用连接服务器的窗口）:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">scp</span> /Users/yourname/Downloads/ssl.pem root@xxx.xx.xxx.xx:/usr/local/nginx/cert/
<span class="token function">scp</span> /Users/yourname/Downloads/ssl.key root@xxx.xx.xxx.xx:/usr/local/nginx/cert/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-3-放行ssl默认端口" tabindex="-1"><a class="header-anchor" href="#_3-1-3-放行ssl默认端口" aria-hidden="true">#</a> 3.1.3. 放行ssl默认端口</h4><p>服务器放行443端口，避免拦截。</p><h4 id="_4-nginx-conf-配置" tabindex="-1"><a class="header-anchor" href="#_4-nginx-conf-配置" aria-hidden="true">#</a> 4. Nginx.conf 配置</h4><p>编辑 nginx.conf 配置文件：</p>`,22),p={href:"https://www.aliyun.com/minisite/goods?spm=a2c6h.12873639.0.0.c59a5caahlH2sx&userCode=veyumm2k",target:"_blank",rel:"noopener noreferrer"},h=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
# 服务器端口使用443，开启ssl, 这里ssl就是上面安装的ssl模块
listen       443 ssl;
# 域名，多个以空格分开
server_name  &lt;a href=&quot;https://www.aliyun.com/minisite/goods?userCode=veyumm2k&quot; target=&quot;_blank&quot;&gt;hack520.com&lt;/a&gt; &lt;a href=&quot;https://www.aliyun.com/minisite/goods?userCode=veyumm2k&quot; target=&quot;_blank&quot;&gt;www.hack520.com&lt;/a&gt;;

# ssl证书地址
ssl_certificate     /usr/local/nginx/cert/ssl.pem;  # pem文件的路径
ssl_certificate_key  /usr/local/nginx/cert/ssl.key; # key文件的路径

# ssl验证相关配置
ssl_session_timeout  5m;    #缓存有效期
ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;    #加密算法
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;    #安全链接可选的加密协议
ssl_prefer_server_ciphers on;   #使用服务器端的首选算法

location / {
    root   html;
    index  index.html index.htm;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 http 重定向 https。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
  listen       80;
  server_name  &lt;a href=&quot;https://www.aliyun.com/minisite/goods?userCode=veyumm2k&quot; target=&quot;_blank&quot;&gt;hack520.com&lt;/a&gt; &lt;a href=&quot;https://www.aliyun.com/minisite/goods?userCode=veyumm2k&quot; target=&quot;_blank&quot;&gt;www.hack520.com&lt;/a&gt;;
  return 301 https://$server_name$request_uri;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function b(g,x){const a=d("ExternalLinkIcon");return r(),t("div",null,[o,n("blockquote",null,[n("p",null,[e("阿里云官方介绍"),n("a",u,[e("文档"),i(a)]),e("。")]),v]),m,n("p",null,[e("配置 https "),n("a",p,[e("server"),i(a)]),e("：")]),h])}const k=l(c,[["render",b],["__file","02.nginx-deploy-static-files.html.vue"]]);export{k as default};

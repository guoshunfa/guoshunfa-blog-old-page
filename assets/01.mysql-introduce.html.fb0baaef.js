import{_ as n,r as l,o as c,c as r,a as e,b as o,d as t,e as s}from"./app.4659d0e0.js";const i={},d=s('<h1 id="mysql-介绍" tabindex="-1"><a class="header-anchor" href="#mysql-介绍" aria-hidden="true">#</a> Mysql - 介绍</h1><h2 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql" aria-hidden="true">#</a> 安装Mysql</h2><h4 id="mac-安装mysql" tabindex="-1"><a class="header-anchor" href="#mac-安装mysql" aria-hidden="true">#</a> Mac 安装Mysql</h4>',3),m={href:"https://juejin.im/post/6844903831298375693",target:"_blank",rel:"noopener noreferrer"},p=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="docker-安装-mysql" tabindex="-1"><a class="header-anchor" href="#docker-安装-mysql" aria-hidden="true">#</a> Docker 安装 Mysql</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker查询mysql镜像</span>
<span class="token function">docker</span> search mysql
<span class="token comment"># 拉取mysql镜像</span>
<span class="token function">docker</span> pull mysql
<span class="token comment"># 启动容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--name</span> mymysql <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root  docker.io/mysql:latest
<span class="token comment">##</span>
<span class="token comment"># 参数说明：</span>
<span class="token comment"># -p 3306:3306 将主机3306端口映射到容器3306端口</span>
<span class="token comment"># -e MYSQL_ROOT_PASSWORD=root 设置远程登录的root用户密码为root</span>
<span class="token comment"># --name zyz-name 可选，设置容器别名</span>
<span class="token comment"># mysql 镜像名称</span>
<span class="token comment">##</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function u(v,h){const a=l("ExternalLinkIcon");return c(),r("div",null,[d,e("blockquote",null,[e("p",null,[e("a",m,[o("MySQL安装（Mac版）"),t(a)])])]),p])}const k=n(i,[["render",u],["__file","01.mysql-introduce.html.vue"]]);export{k as default};

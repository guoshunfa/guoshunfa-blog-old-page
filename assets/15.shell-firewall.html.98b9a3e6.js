import{_ as s,r as a,o as l,c as i,a as n,b as r,d,e as c}from"./app.4659d0e0.js";const t={},m=c(`<h1 id="shell-linux-防火墙和端口" tabindex="-1"><a class="header-anchor" href="#shell-linux-防火墙和端口" aria-hidden="true">#</a> Shell - Linux 防火墙和端口</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看防火墙状态</span>

systemctl status firewalld

<span class="token comment"># 如果不是显示active状态，需要打开防火墙</span>

systemctl start firewalld

<span class="token comment"># 查看所有已开放的临时端口（默认为空）</span>

firewall-cmd --list-ports

<span class="token comment"># 查看所有永久开放的端口（默认为空）</span>

firewall-cmd --list-ports <span class="token parameter variable">--permanent</span>

<span class="token comment"># 添加临时开放端口（例如：比如我修改ssh远程连接端口是223，则需要开放这个端口）</span>

firewall-cmd --add-port<span class="token operator">=</span><span class="token number">223</span>/tcp

<span class="token comment"># 添加永久开放的端口（例如：223端口）</span>

firewall-cmd --add-port<span class="token operator">=</span><span class="token number">223</span>/tcp <span class="token parameter variable">--permanent</span>

<span class="token comment"># 关闭临时端口</span>

firewall-cmd --remove-port<span class="token operator">=</span><span class="token number">80</span>/tcp

<span class="token comment"># 关闭永久端口</span>

firewll-cmd --remove-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>

<span class="token comment"># 配置结束后需要输入重载命令并重启防火墙以生效配置</span>

firewall-cmd <span class="token parameter variable">--reload</span>
<span class="token comment"># or</span>
systemctl restart firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,3),o={href:"https://www.cnblogs.com/ketoli/p/15111625.html",target:"_blank",rel:"noopener noreferrer"};function v(p,u){const e=a("ExternalLinkIcon");return l(),i("div",null,[m,n("ul",null,[n("li",null,[n("a",o,[r("凉了记忆"),d(e)])])])])}const h=s(t,[["render",v],["__file","15.shell-firewall.html.vue"]]);export{h as default};

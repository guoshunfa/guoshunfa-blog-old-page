import{_ as s,o as n,c as a,e}from"./app.4659d0e0.js";const t={},l=e(`<h1 id="mysql-修改root账号密码" tabindex="-1"><a class="header-anchor" href="#mysql-修改root账号密码" aria-hidden="true">#</a> Mysql - 修改root账号密码</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 停止mysql</span>
<span class="token comment">##（windows）</span>
net stop mysql<span class="token punctuation">;</span>
<span class="token comment">##（mac brew）</span>
brew stop mysql<span class="token punctuation">;</span>
<span class="token comment">##（linux systemctl）</span>
systemctl stop mysql.service<span class="token punctuation">;</span>

<span class="token comment"># 2. 无密码登陆</span>
mysqld <span class="token parameter variable">--console</span> --skip-grant-tables --shared-memory

<span class="token comment"># 3. 清空密码</span>
UPDATE mysql.user SET <span class="token assign-left variable">authentication_string</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span> WHERE <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span> and <span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 4. 修改密码</span>
ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;密码&#39;</span><span class="token punctuation">;</span>
<span class="token comment">## 如果报错了ERROR 1290 (HY000): The MySQL server is running with the --skip-grant-tables option so it cannot execute this statement，就执行 flush privileges;</span>
<span class="token comment">## 然后再执行ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;密码&#39;;</span>

<span class="token comment"># 5. 试试是否修改成功</span>
mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[l];function o(c,r){return n(),a("div",null,i)}const m=s(t,[["render",o],["__file","50.Mysql - 修改root账号密码.html.vue"]]);export{m as default};

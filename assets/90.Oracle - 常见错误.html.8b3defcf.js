import{_ as s,o as a,c as n,e}from"./app.4659d0e0.js";const l={},c=e(`<h1 id="oracle-常见错误" tabindex="-1"><a class="header-anchor" href="#oracle-常见错误" aria-hidden="true">#</a> Oracle - 常见错误</h1><h2 id="错误-sqlplus-command-not-found" tabindex="-1"><a class="header-anchor" href="#错误-sqlplus-command-not-found" aria-hidden="true">#</a> 错误：sqlplus: command not found</h2><blockquote><p>转载自：https://www.cnblogs.com/sprinng/p/6548540.html</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 调整成对应oracle地址</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_BASE</span><span class="token operator">=</span>/u01/app/oracle
<span class="token comment"># 注意调整对应版本</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_HOME</span><span class="token operator">=</span><span class="token variable">$ORACLE_BASE</span>/product/10.2.0/db_1
<span class="token function">su</span> - root
<span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token variable">$ORACLE_HOME</span>/bin/sqlplus /usr/bin
<span class="token function">su</span> - oracle
sqlplus /nolog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[c];function i(t,r){return a(),n("div",null,o)}const d=s(l,[["render",i],["__file","90.Oracle - 常见错误.html.vue"]]);export{d as default};

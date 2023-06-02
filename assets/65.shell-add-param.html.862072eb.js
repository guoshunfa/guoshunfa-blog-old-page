import{_ as n,r as e,o as l,c as p,a,b as t,d as i,e as o}from"./app.4659d0e0.js";const r={},c=o(`<h1 id="shell-增加自定义参数" tabindex="-1"><a class="header-anchor" href="#shell-增加自定义参数" aria-hidden="true">#</a> Shell - 增加自定义参数</h1><h3 id="使用介绍" tabindex="-1"><a class="header-anchor" href="#使用介绍" aria-hidden="true">#</a> 使用介绍</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./xx.sh <span class="token parameter variable">--rproject</span><span class="token operator">=</span>demo <span class="token parameter variable">--rip</span><span class="token operator">=</span>xxx.xxx.xxx.xxx <span class="token parameter variable">--rport</span><span class="token operator">=</span><span class="token number">5000</span> <span class="token parameter variable">--rtag</span><span class="token operator">=</span>admin <span class="token parameter variable">--ruser</span><span class="token operator">=</span>root <span class="token parameter variable">--rpwd</span><span class="token operator">=</span>pwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="脚本demo" tabindex="-1"><a class="header-anchor" href="#脚本demo" aria-hidden="true">#</a> 脚本demo</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">COMMANDLINE</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">COMMAND</span> <span class="token keyword">in</span> <span class="token variable">$COMMANDLINE</span>
<span class="token keyword">do</span>
    <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $COMMAND <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&quot;=&quot;</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
    <span class="token assign-left variable">val</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $COMMAND <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&quot;=&quot;</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>
    <span class="token keyword">case</span> <span class="token variable">$key</span> <span class="token keyword">in</span>
        --rproject<span class="token punctuation">)</span>
            <span class="token assign-left variable">rproject</span><span class="token operator">=</span><span class="token variable">$val</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        --rip<span class="token punctuation">)</span>
            <span class="token assign-left variable">rip</span><span class="token operator">=</span><span class="token variable">$val</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        --rport<span class="token punctuation">)</span>
            <span class="token assign-left variable">rport</span><span class="token operator">=</span><span class="token variable">$val</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        --rtag<span class="token punctuation">)</span>
            <span class="token assign-left variable">rtag</span><span class="token operator">=</span><span class="token variable">$val</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        --ruser<span class="token punctuation">)</span>
            <span class="token assign-left variable">ruser</span><span class="token operator">=</span><span class="token variable">$val</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
        --rpwd<span class="token punctuation">)</span>
            <span class="token assign-left variable">rpwd</span><span class="token operator">=</span><span class="token variable">$val</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token keyword">done</span>
<span class="token comment">#----------参数处理</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$rproject</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$rip</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$rport</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$rtag</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$ruser</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$rpwd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,6),d={href:"https://my.oschina.net/rootxxx/blog/4466068",target:"_blank",rel:"noopener noreferrer"};function v(u,k){const s=e("ExternalLinkIcon");return l(),p("div",null,[c,a("ul",null,[a("li",null,[a("a",d,[t("shell 增加自定义参数"),i(s)])])])])}const m=n(r,[["render",v],["__file","65.shell-add-param.html.vue"]]);export{m as default};

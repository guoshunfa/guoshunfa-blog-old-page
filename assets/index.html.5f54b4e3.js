import{_ as n,o as a,c as s,e as t}from"./app.4659d0e0.js";const e={},p=t(`<h1 id="springmvc-前后端传参" tabindex="-1"><a class="header-anchor" href="#springmvc-前后端传参" aria-hidden="true">#</a> SpringMVC - 前后端传参</h1><h2 id="modelandview-thymeleaf" tabindex="-1"><a class="header-anchor" href="#modelandview-thymeleaf" aria-hidden="true">#</a> ModelAndView + thymeleaf</h2><blockquote><p>废话不多说，直接上demo。</p></blockquote><p><strong>properties:</strong></p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># ----------------------Springmvc配置-----------------------------</span>
<span class="token comment"># 指定前端页面的前缀</span>
<span class="token key attr-name">spring.mvc.view.prefix</span><span class="token punctuation">=</span><span class="token value attr-value">/</span>
<span class="token comment"># 指定前端页面的后缀</span>
<span class="token key attr-name">spring.mvc.view.suffix</span><span class="token punctuation">=</span><span class="token value attr-value">.html</span>
<span class="token comment"># ------------------------thymeleaf配置-----------------------------------</span>
<span class="token key attr-name">spring.thymeleaf.servlet.content-type</span><span class="token punctuation">=</span><span class="token value attr-value">text/html</span>
<span class="token comment"># 指定文件路径</span>
<span class="token key attr-name">spring.thymeleaf.prefix</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:/templates/</span>
<span class="token key attr-name">spring.thymeleaf.check-template</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.thymeleaf.check-template-location</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.thymeleaf.mode</span><span class="token punctuation">=</span><span class="token value attr-value">HTML</span>
<span class="token key attr-name">spring.thymeleaf.encoding</span><span class="token punctuation">=</span><span class="token value attr-value">UTF-8</span>
<span class="token key attr-name">spring.thymeleaf.cache</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>maven:</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- thymeleaf --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-thymeleaf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 省略其他springboot包 --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>controller:</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 页面跳转controller</span>
<span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PageController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ModelAndView</span> mav <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mav<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;testParam&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;欧吼&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mav<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> mav<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>html:</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name"><span class="token namespace">xmlns:</span>th</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.thymeleaf.org<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name"><span class="token namespace">th:</span>inline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> testParam <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>$<span class="token punctuation">{</span>testParam<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>testParam<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><img src="https://file.pandacode.cn/blog/2022119111119.png">`,13),l=[p];function c(o,i){return a(),s("div",null,l)}const r=n(e,[["render",c],["__file","index.html.vue"]]);export{r as default};
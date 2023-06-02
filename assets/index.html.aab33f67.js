import{_ as n,o as s,c as a,e as p}from"./app.4659d0e0.js";const e={},t=p(`<h1 id="java-基础-spel-表达式" tabindex="-1"><a class="header-anchor" href="#java-基础-spel-表达式" aria-hidden="true">#</a> Java 基础 - spel 表达式</h1><h2 id="_1-spel-表达式-介绍" tabindex="-1"><a class="header-anchor" href="#_1-spel-表达式-介绍" aria-hidden="true">#</a> 1. spel 表达式 介绍</h2><blockquote><p>Spring Expression Language（简称 SpEL）是一种功能强大的表达式语言，支持运行时查询和操作对象图 。表达式语言一般是用最简单的形式完成最主要的工作，以此减少工作量。</p><p>Java 有许多可用的表达式语言，例如 JSP EL，OGNL，MVEL 和 JBoss EL，SpEL 语法类似于 JSP EL，功能类似于 Struts2 中的 OGNL，能在运行时构建复杂表达式、存取对象图属性、调用对象方法等，并且能与 Spring 功能完美整合，如 SpEL 可以用来配置 Bean 定义。</p><p>SpEL 并不与 Spring 直接相关，可以被独立使用。SpEL 表达式的创建是为了向 Spring 社区提供一种受良好支持的表达式语言，该语言适用于 Spring 家族中的所有产品。也就是说，SpEL 是一种与技术无关的 API，可以集成其它表达式语言。</p><p>SpEL 提供了以下接口和类：</p><ul><li>Expression interface：该接口负责评估表达式字符串</li><li>ExpressionParser interface：该接口负责解析字符串</li><li>EvaluationContext interface：该接口负责定义上下文环境</li></ul><p>SpEL 支持如下表达式：</p><h4 id="_1-基本表达式" tabindex="-1"><a class="header-anchor" href="#_1-基本表达式" aria-hidden="true">#</a> 1. 基本表达式</h4><p>字面量表达式、关系、逻辑与算术运算表达式、字符串连接及截取表达式、三目运算表达式、正则表达式、括号优先级表达式；</p><h4 id="_2-类相关表达式" tabindex="-1"><a class="header-anchor" href="#_2-类相关表达式" aria-hidden="true">#</a> 2. 类相关表达式</h4><p>类类型表达式、类实例化、instanceof 表达式、变量定义及引用、赋值表达式、自定义函数、对象属性存取及安全导航表达式、对象方法调用、Bean 引用；</p><h4 id="_3-集合相关表达式" tabindex="-1"><a class="header-anchor" href="#_3-集合相关表达式" aria-hidden="true">#</a> 3. 集合相关表达式</h4><p>内联 List、内联数组、集合、字典访问、列表、字典、数组修改、集合投影、集合选择；不支持多维内联数组初始化；不支持内联字典定义；</p><h4 id="_4-其他表达式" tabindex="-1"><a class="header-anchor" href="#_4-其他表达式" aria-hidden="true">#</a> 4. 其他表达式</h4><p>模板表达式。</p><blockquote><p>注：SpEL 表达式中的关键字不区分大小写。</p></blockquote></blockquote><h2 id="_2-实例" tabindex="-1"><a class="header-anchor" href="#_2-实例" aria-hidden="true">#</a> 2. 实例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">pandacode<span class="token punctuation">.</span>cn</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>expression<span class="token punctuation">.</span></span><span class="token class-name">Expression</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>expression<span class="token punctuation">.</span></span><span class="token class-name">ExpressionParser</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>expression<span class="token punctuation">.</span>spel<span class="token punctuation">.</span>standard<span class="token punctuation">.</span></span><span class="token class-name">SpelExpressionParser</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">ExpressionParser</span> parser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpelExpressionParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 运算符</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>parser<span class="token punctuation">.</span><span class="token function">parseExpression</span><span class="token punctuation">(</span><span class="token string">&quot;1&gt;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 字符串输出</span>
        			   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>parser<span class="token punctuation">.</span><span class="token function">parseExpression</span><span class="token punctuation">(</span><span class="token string">&quot;&#39;https://pandacode.cn&#39;.concat(&#39;/&#39;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 引入类处理</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>parser<span class="token punctuation">.</span><span class="token function">parseExpression</span><span class="token punctuation">(</span><span class="token string">&quot;T(org.apache.commons.lang.StringUtils).isBlank(&#39;&#39;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>false
https://pandacode.cn/
true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[t];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","index.html.vue"]]);export{r as default};
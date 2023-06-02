import{_ as p,r as t,o,c as l,a as n,b as a,d as e,e as c}from"./app.4659d0e0.js";const i={},r=c(`<h1 id="oracle-存储过程与存储函数" tabindex="-1"><a class="header-anchor" href="#oracle-存储过程与存储函数" aria-hidden="true">#</a> Oracle - 存储过程与存储函数</h1><h2 id="一-存储过程和存储函数的定义" tabindex="-1"><a class="header-anchor" href="#一-存储过程和存储函数的定义" aria-hidden="true">#</a> 一. 存储过程和存储函数的定义</h2><ul><li><p><strong>定义：<strong>存储在数据库中，供所有用户程序调用的</strong>子程序</strong>叫做存储过程/存储函数。</p><p><strong>复杂点的解释：<strong>存储过程(Stored Procedure)，就是一组用于完成特定数据库功能的</strong>SQL 语句集</strong>，该SQL语句集经过编译后存储在数据库系统中。在使用时候，用户通过指定已经定义的存储过程名字并给出相应的存储过程参数来调用并执行它，从而完成一个或一系列的数据库操作。</p></li><li><p>**区别：**是否可以通过return返回函数值。 存储函数可以通过return返回函数值；而存储过程不可以。</p></li><li><p><strong>注意点：<strong>由于通过</strong>out</strong>参数，存储过程也可以返回函数值，所以存储过程和存储函数已经没有太大的区别了。而存储函数仍然存在，是由于oracle不断升级，需要实现向下兼容，所以存储函数就一直存留着。</p></li></ul><h2 id="二-存储过程" tabindex="-1"><a class="header-anchor" href="#二-存储过程" aria-hidden="true">#</a> 二. 存储过程</h2><h3 id="_1-创建和使用存储过程" tabindex="-1"><a class="header-anchor" href="#_1-创建和使用存储过程" aria-hidden="true">#</a> 1. 创建和使用存储过程</h3><p>用<strong>create procedure</strong>命令建立存储过程，语法如下：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>create <span class="token punctuation">[</span><span class="token keyword">or</span> replace<span class="token punctuation">]</span> procedure 过程名<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span>
<span class="token keyword">as</span>   <span class="token operator">--</span> <span class="token keyword">as</span>不可以省略
PLSQL子程序体<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项：</strong></p><ol><li>存储过程或者存储函数，只能创建或者替换 。</li><li>参数可以带也可以不带。</li><li><strong>as</strong>相当于PLSQL语句中的declare，用来声明变量、游标等，但是<strong>不可以省略</strong>。</li></ol><h3 id="_2-入门案例" tabindex="-1"><a class="header-anchor" href="#_2-入门案例" aria-hidden="true">#</a> 2. 入门案例</h3><h4 id="_1-不带参数的存储过程-不用带括号" tabindex="-1"><a class="header-anchor" href="#_1-不带参数的存储过程-不用带括号" aria-hidden="true">#</a> （1）不带参数的存储过程:不用带括号</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>create <span class="token keyword">or</span> replace procedure sayHello
<span class="token keyword">as</span>
<span class="token return-type class-name">begin</span>
   dbms_output<span class="token punctuation">.</span><span class="token function">put_line</span><span class="token punctuation">(</span>&#39;HelloWorld&#39;<span class="token punctuation">)</span><span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>调用方式：</strong></p><ul><li>&lt;1&gt; 使用execute： <strong>exec</strong>是sqlplus命令，<strong>只能在sqlplus中使用</strong>，使用时，exec可以直接跟过程名（可以省略括号）； 控制台执行示例:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>SQL<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> serveroutput on<span class="token punctuation">;</span>
SQL<span class="token operator">&gt;</span> <span class="token builtin class-name">exec</span> sayHello<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>&lt;2&gt; 使用call： <strong>使用call时，要带上括号</strong>;call为SQL命令使用时，对场景没有限制。 控制台执行示例:</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>SQL<span class="token operator">&gt;</span> <span class="token keyword">set</span> <span class="token class-name">serveroutput</span> <span class="token keyword">on</span><span class="token punctuation">;</span>
SQL<span class="token operator">&gt;</span> <span class="token return-type class-name">call</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>&lt;3&gt; 使用PLSQL语句调用： 控制台执行示例:</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>SQL<span class="token operator">&gt;</span> <span class="token keyword">set</span> <span class="token class-name">serveroutput</span> <span class="token keyword">on</span><span class="token punctuation">;</span>
SQL<span class="token operator">&gt;</span> <span class="token class-name">begin</span>
         sayHello<span class="token punctuation">;</span>
    end<span class="token punctuation">;</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-带参数的存储过程" tabindex="-1"><a class="header-anchor" href="#_2-带参数的存储过程" aria-hidden="true">#</a> （2）带参数的存储过程:</h4><ul><li>给指定的员工涨100元工资,并且打印涨前和涨后的薪水:</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>create <span class="token keyword">or</span> replace <span class="token return-type class-name">procedure</span> <span class="token function">addSal</span><span class="token punctuation">(</span>pempno <span class="token keyword">in</span> emp<span class="token punctuation">.</span>empno<span class="token operator">%</span>type<span class="token punctuation">)</span>
<span class="token keyword">as</span>
    <span class="token class-name">pename</span> emp<span class="token punctuation">.</span>ename<span class="token operator">%</span>type<span class="token punctuation">;</span>
    beforesal emp<span class="token punctuation">.</span>sal<span class="token operator">%</span>type<span class="token punctuation">;</span>
    aftersal emp<span class="token punctuation">.</span>sal<span class="token operator">%</span>type<span class="token punctuation">;</span>
begin
    <span class="token keyword">select</span> ename<span class="token punctuation">,</span>sal <span class="token keyword">into</span> pename<span class="token punctuation">,</span>beforesal <span class="token keyword">from</span> emp <span class="token keyword">where</span> <span class="token class-name">empno</span><span class="token operator">=</span>pempno<span class="token punctuation">;</span>
    aftersal<span class="token punctuation">:</span><span class="token operator">=</span>beforesal<span class="token operator">+</span><span class="token number">100</span><span class="token punctuation">;</span>
    update emp <span class="token keyword">set</span> sal<span class="token operator">=</span>aftersal <span class="token keyword">where</span> <span class="token class-name">empno</span><span class="token operator">=</span>pempno<span class="token punctuation">;</span> 
    dbms_output<span class="token punctuation">.</span><span class="token function">put_line</span><span class="token punctuation">(</span>&#39;姓名<span class="token punctuation">:</span> &#39;<span class="token operator">||</span>pename<span class="token operator">||</span>&#39; 涨前工资<span class="token punctuation">:</span>&#39;<span class="token operator">||</span>beforesal<span class="token operator">||</span>&#39;涨后工资<span class="token punctuation">:</span>&#39;<span class="token operator">||</span>aftersal<span class="token punctuation">)</span><span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>SQL<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> serveroutput on<span class="token punctuation">;</span>
SQL<span class="token operator">&gt;</span> begin
	<span class="token number">2</span>	 addSal<span class="token punctuation">(</span><span class="token number">7782</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token number">3</span>	 addSal<span class="token punctuation">(</span><span class="token number">7788</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token number">4</span>  commit<span class="token punctuation">;</span>
	<span class="token number">5</span>  end<span class="token punctuation">;</span>
	<span class="token number">6</span>  /
姓名：CLARK 涨前工资:7608.87 涨后工资:7708.87
姓名：SCOTT 涨前工资:7263.4 涨后工资:7363.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项：</strong></p><ul><li>&lt;1&gt; <strong>要说明</strong>，参数是输入参数(in)还是输出参数(out)；</li><li>&lt;2&gt; 为保证调用多个存储过程中处在同一个事务中，所以一般不在存储过程或者存储函数中，commit或rollback；</li></ul><h2 id="三-存储函数" tabindex="-1"><a class="header-anchor" href="#三-存储函数" aria-hidden="true">#</a> 三. 存储函数</h2><h3 id="_1-存储函数" tabindex="-1"><a class="header-anchor" href="#_1-存储函数" aria-hidden="true">#</a> 1. 存储函数</h3><ul><li>函数(Function)为一命名的存储程序,可带参数,并返回一计算值.</li><li>函数和过程的结构类似,但必须有一个return子句,用于返回函数值.</li></ul><h3 id="_2-创建存储函数的语法" tabindex="-1"><a class="header-anchor" href="#_2-创建存储函数的语法" aria-hidden="true">#</a> 2. 创建存储函数的语法</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>create <span class="token punctuation">[</span><span class="token operator">or</span> replace<span class="token punctuation">]</span> function 函数名<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span>
<span class="token keyword">return</span> 函数值类型
<span class="token keyword">as</span>
PLSQL子程序体<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项:</strong></p><ul><li>(1) 与存储过程注意事项类似,不同的是,<strong>必须有个返回值</strong>;</li><li>(2) 参数列表可以有,也可以没有.当没有时,函数名后面不要带括号.</li></ul><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>create or replace function <span class="token function">queryempannal</span><span class="token punctuation">(</span>pempno <span class="token keyword">in</span> number<span class="token punctuation">)</span>
<span class="token keyword">return</span> number
<span class="token keyword">as</span>
  psal emp<span class="token punctuation">.</span>sal<span class="token operator">%</span><span class="token keyword">type</span><span class="token punctuation">;</span>
  pcomm emp<span class="token punctuation">.</span>comm<span class="token operator">%</span><span class="token keyword">type</span><span class="token punctuation">;</span>
begin
  select sal<span class="token punctuation">,</span>comm into psal<span class="token punctuation">,</span>pcomm from emp <span class="token keyword">where</span> empno<span class="token operator">=</span>pempno<span class="token punctuation">;</span>
  <span class="token keyword">return</span> psal<span class="token operator">*</span><span class="token number">12</span><span class="token operator">+</span><span class="token function">nvl</span><span class="token punctuation">(</span>pcomm<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-in和out参数" tabindex="-1"><a class="header-anchor" href="#四-in和out参数" aria-hidden="true">#</a> 四. in和out参数</h2><h3 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1.概述</h3><ul><li>(1) 一般来讲,存储过程和存储函数的区别在于存储函数可以有一个返回值;而存储过程没有返回值.</li><li>(2) 过程和函数都可以通过out指定一个或多个输出参数.我们可以利用out参数,在过程和函数中实现返回多个值. <ul><li>a. 存储过程和存储函数都可以有out参数;</li><li>b. 存储过程和存储函数都可以有多个out参数;</li><li>c. 存储过程可以通过out参数来实现返回值;</li></ul></li><li>(3) 什么时候用存储过程/存储函数? <ul><li>原则:如果只有一个返回值,用存储函数;否则,就用存储过程.</li></ul></li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>create <span class="token keyword">or</span> replace <span class="token return-type class-name">procedure</span> <span class="token function">queryempinform</span><span class="token punctuation">(</span>eno <span class="token keyword">in</span> number<span class="token punctuation">,</span>
                                           pename <span class="token keyword">out</span> varchar2<span class="token punctuation">,</span>
                                           psal <span class="token keyword">out</span> number<span class="token punctuation">,</span>
                                           pjob <span class="token keyword">out</span> varchar2 <span class="token punctuation">)</span>
<span class="token keyword">as</span>
<span class="token class-name">begin</span>
  <span class="token keyword">select</span> ename<span class="token punctuation">,</span>sal<span class="token punctuation">,</span>job <span class="token keyword">into</span> pename<span class="token punctuation">,</span>psal<span class="token punctuation">,</span>pjob <span class="token keyword">from</span> emp <span class="token keyword">where</span> <span class="token class-name">empno</span><span class="token operator">=</span>eno<span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-案例" tabindex="-1"><a class="header-anchor" href="#五-案例" aria-hidden="true">#</a> 五. 案例</h2><h3 id="blob类型转换成clob类型" tabindex="-1"><a class="header-anchor" href="#blob类型转换成clob类型" aria-hidden="true">#</a> blob类型转换成clob类型</h3><h4 id="存储函数" tabindex="-1"><a class="header-anchor" href="#存储函数" aria-hidden="true">#</a> 存储函数</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">FUNCTION</span> blob_to_clob2 <span class="token punctuation">(</span>blob_in <span class="token operator">IN</span> <span class="token keyword">BLOB</span><span class="token punctuation">)</span>
<span class="token keyword">RETURN</span> CLOB
<span class="token keyword">AS</span>
	v_clob    CLOB<span class="token punctuation">;</span>
	v_varchar VARCHAR2<span class="token punctuation">(</span><span class="token number">32767</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	v_start	 PLS_INTEGER :<span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	v_buffer  PLS_INTEGER :<span class="token operator">=</span> <span class="token number">32767</span><span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
 DBMS_LOB<span class="token punctuation">.</span>CREATETEMPORARY<span class="token punctuation">(</span>v_clob<span class="token punctuation">,</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">if</span> DBMS_LOB<span class="token punctuation">.</span>GETLENGTH<span class="token punctuation">(</span>blob_in<span class="token punctuation">)</span> <span class="token operator">is</span> <span class="token boolean">null</span> <span class="token keyword">then</span>
        <span class="token keyword">return</span> empty_clob<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>
	<span class="token keyword">FOR</span> i <span class="token operator">IN</span> <span class="token number">1.</span><span class="token punctuation">.</span>CEIL<span class="token punctuation">(</span>DBMS_LOB<span class="token punctuation">.</span>GETLENGTH<span class="token punctuation">(</span>blob_in<span class="token punctuation">)</span> <span class="token operator">/</span> v_buffer<span class="token punctuation">)</span>
	<span class="token keyword">LOOP</span>
	  v_varchar :<span class="token operator">=</span> UTL_RAW<span class="token punctuation">.</span>CAST_TO_VARCHAR2<span class="token punctuation">(</span>DBMS_LOB<span class="token punctuation">.</span>SUBSTR<span class="token punctuation">(</span>blob_in<span class="token punctuation">,</span> v_buffer<span class="token punctuation">,</span> v_start<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           DBMS_LOB<span class="token punctuation">.</span>WRITEAPPEND<span class="token punctuation">(</span>v_clob<span class="token punctuation">,</span> LENGTH<span class="token punctuation">(</span>v_varchar<span class="token punctuation">)</span><span class="token punctuation">,</span> v_varchar<span class="token punctuation">)</span><span class="token punctuation">;</span>
		v_start :<span class="token operator">=</span> v_start <span class="token operator">+</span> v_buffer<span class="token punctuation">;</span>
	<span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>
  <span class="token keyword">RETURN</span> v_clob<span class="token punctuation">;</span>
<span class="token keyword">END</span> blob_to_clob2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="存储函数使用" tabindex="-1"><a class="header-anchor" href="#存储函数使用" aria-hidden="true">#</a> 存储函数使用</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 使用场景一：表中存在两个字段，一个字段类型为blob，一个字段类型为clob。将blob类型的字段进行转换，并存入clob字段中。</span>
<span class="token keyword">UPDATE</span> 表名 <span class="token keyword">set</span> clob字段名 <span class="token operator">=</span> blob_to_clob2<span class="token punctuation">(</span><span class="token keyword">blob</span>字段名<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="blob类型转换成varchar类型" tabindex="-1"><a class="header-anchor" href="#blob类型转换成varchar类型" aria-hidden="true">#</a> blob类型转换成varchar类型</h3><h4 id="存储函数-1" tabindex="-1"><a class="header-anchor" href="#存储函数-1" aria-hidden="true">#</a> 存储函数</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token operator">or</span> <span class="token keyword">replace</span> <span class="token keyword">FUNCTION</span> blob_to_varchar <span class="token punctuation">(</span>blob_in <span class="token operator">IN</span> <span class="token keyword">BLOB</span><span class="token punctuation">)</span> 
<span class="token keyword">RETURN</span> VARCHAR2 
<span class="token operator">IS</span> 

v_varchar VARCHAR2<span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
v_start PLS_INTEGER :<span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> 
v_buffer PLS_INTEGER :<span class="token operator">=</span> <span class="token number">4000</span><span class="token punctuation">;</span> 

<span class="token keyword">BEGIN</span> 
 <span class="token comment">--select userenv(&#39;LANGUAGE&#39;) into g_nls_db_char from dual; </span>
 <span class="token keyword">if</span> DBMS_LOB<span class="token punctuation">.</span>GETLENGTH<span class="token punctuation">(</span>blob_in<span class="token punctuation">)</span> <span class="token operator">is</span> <span class="token boolean">null</span> <span class="token keyword">then</span>
        <span class="token keyword">return</span> empty_clob<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
 <span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>
 DBMS_OUTPUT<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span><span class="token string">&#39;TEST:&#39;</span> <span class="token operator">||</span> CEIL<span class="token punctuation">(</span>DBMS_LOB<span class="token punctuation">.</span>GETLENGTH<span class="token punctuation">(</span>blob_in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">--DBMS_LOB.CREATETEMPORARY(v_clob, TRUE); </span>
 <span class="token keyword">FOR</span> i <span class="token operator">IN</span> <span class="token number">1.</span><span class="token punctuation">.</span>CEIL<span class="token punctuation">(</span>DBMS_LOB<span class="token punctuation">.</span>GETLENGTH<span class="token punctuation">(</span>blob_in<span class="token punctuation">)</span> <span class="token operator">/</span> v_buffer<span class="token punctuation">)</span> 
 <span class="token keyword">LOOP</span> 
 v_varchar :<span class="token operator">=</span> UTL_RAW<span class="token punctuation">.</span>CAST_TO_VARCHAR2<span class="token punctuation">(</span>utl_raw<span class="token punctuation">.</span><span class="token keyword">convert</span><span class="token punctuation">(</span>DBMS_LOB<span class="token punctuation">.</span>SUBSTR<span class="token punctuation">(</span>blob_in<span class="token punctuation">,</span> v_buffer<span class="token punctuation">,</span> v_start<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;SIMPLIFIED CHINESE_CHINA.ZHS16GBK&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;AMERICAN_THE NETHERLANDS.UTF8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">--DBMS_LOB.WRITEAPPEND(v_clob, LENGTH(v_varchar), v_varchar); </span>
 v_start :<span class="token operator">=</span> v_start <span class="token operator">+</span> v_buffer<span class="token punctuation">;</span> 
 <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span> 
 <span class="token comment">--DBMS_OUTPUT.put_line(v_varchar);</span>
 <span class="token keyword">RETURN</span> v_varchar<span class="token punctuation">;</span> 
<span class="token keyword">end</span> blob_to_varchar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="存储函数使用-1" tabindex="-1"><a class="header-anchor" href="#存储函数使用-1" aria-hidden="true">#</a> 存储函数使用</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 使用场景一：表中存在两个字段，一个字段类型为blob，一个字段类型为varchar。将blob类型的字段进行转换，并存入varchar字段中。</span>
<span class="token keyword">UPDATE</span> 表名 <span class="token keyword">set</span> <span class="token keyword">varchar</span>字段名 <span class="token operator">=</span> blob_to_varchar<span class="token punctuation">(</span><span class="token keyword">blob</span>字段名<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="blob类型通过base64加密" tabindex="-1"><a class="header-anchor" href="#blob类型通过base64加密" aria-hidden="true">#</a> blob类型通过base64加密</h3><h4 id="存储函数-2" tabindex="-1"><a class="header-anchor" href="#存储函数-2" aria-hidden="true">#</a> 存储函数</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span>  <span class="token operator">OR</span>  <span class="token keyword">REPLACE</span>  <span class="token keyword">FUNCTION</span>  base64encode<span class="token punctuation">(</span>p_blob <span class="token operator">IN</span> <span class="token keyword">BLOB</span><span class="token punctuation">)</span>
   <span class="token keyword">RETURN</span>  CLOB
<span class="token operator">IS</span>
   l_clob CLOB<span class="token punctuation">;</span>
   l_step PLS_INTEGER :<span class="token operator">=</span> <span class="token number">12000</span><span class="token punctuation">;</span>
<span class="token keyword">BEGIN</span>
   <span class="token keyword">FOR</span>  i  <span class="token operator">IN</span>  <span class="token number">0</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> TRUNC<span class="token punctuation">(</span><span class="token punctuation">(</span>DBMS_LOB<span class="token punctuation">.</span>getlength<span class="token punctuation">(</span>p_blob<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token operator">/</span>l_step<span class="token punctuation">)</span> <span class="token keyword">LOOP</span>
     l_clob :<span class="token operator">=</span> l_clob <span class="token operator">||</span> UTL_RAW<span class="token punctuation">.</span>cast_to_varchar2<span class="token punctuation">(</span>UTL_ENCODE<span class="token punctuation">.</span>base64_encode<span class="token punctuation">(</span>DBMS_LOB<span class="token punctuation">.</span>substr<span class="token punctuation">(</span>p_blob<span class="token punctuation">,</span> l_step<span class="token punctuation">,</span> i <span class="token operator">*</span> l_step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">END</span>  <span class="token keyword">LOOP</span><span class="token punctuation">;</span>
   <span class="token keyword">RETURN</span>  l_clob<span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token punctuation">;</span>
<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,52),u={href:"https://www.jianshu.com/p/be6d1bbebd03",target:"_blank",rel:"noopener noreferrer"},d={href:"https://codeantenna.com/a/o0AyRF3Ipp",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/c851204293/article/details/104915395",target:"_blank",rel:"noopener noreferrer"};function v(b,m){const s=t("ExternalLinkIcon");return o(),l("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[a("Oracle存储过程与存储函数-入门"),e(s)])]),n("li",null,[n("a",d,[a("blob转clob和varchar2"),e(s)])]),n("li",null,[n("a",k,[a("Oracle的存储过程基本写法"),e(s)])])])])}const _=p(i,[["render",v],["__file","10.oracle-stored-procedure.html.vue"]]);export{_ as default};
import{_ as n,o as a,c as s,e as t}from"./app.4659d0e0.js";const e={},p=t(`<h1 id="集成testng-服务测试框架" tabindex="-1"><a class="header-anchor" href="#集成testng-服务测试框架" aria-hidden="true">#</a> 集成TestNG(服务测试框架)</h1><h2 id="_1-maven" tabindex="-1"><a class="header-anchor" href="#_1-maven" aria-hidden="true">#</a> 1. maven</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.testng<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>testng<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>6.8.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.8.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-概念" tabindex="-1"><a class="header-anchor" href="#_2-概念" aria-hidden="true">#</a> 2. 概念</h2><blockquote><p>TestNG按照官方的定义：</p><p><strong>TestNG</strong>是一个测试框架，其灵感来自JUnit和NUnit，但引入了一些新的功能，使其功能更强大，使用更方便。</p><p>TestNG是一个开源自动化测试框架;TestNG表示<strong>下一代</strong>(<strong>N</strong>ext <strong>G</strong>eneration的首字母)。 TestNG类似于JUnit(特别是JUnit 4)，但它不是JUnit框架的扩展。它的灵感来源于JUnit。它的目的是优于JUnit，尤其是在用于测试集成多类时。 TestNG的创始人是<strong>Cedric Beust</strong>(塞德里克·博伊斯特)。</p><p>TestNG消除了大部分的旧框架的限制，使开发人员能够编写更加灵活和强大的测试。 因为它在很大程度上借鉴了Java注解(JDK5.0引入的)来定义测试，它也可以显示如何使用这个新功能在真实的Java语言生产环境中。</p><p><strong>TestNG的特点</strong></p><ul><li>注解</li><li>TestNG使用Java和面向对象的功能</li><li>支持综合类测试(例如，默认情况下，不用创建一个新的测试每个测试方法的类的实例)</li><li>独立的编译时测试代码和运行时配置/数据信息</li><li>灵活的运行时配置</li><li>主要介绍“测试组”。当编译测试，只要要求<code>TestNG</code>运行所有的“前端”的测试，或“快”，“慢”，“数据库”等</li><li>支持依赖测试方法，并行测试，负载测试，局部故障</li><li>灵活的插件API</li><li>支持多线程测试</li></ul></blockquote><h2 id="_3-testng-基本注解" tabindex="-1"><a class="header-anchor" href="#_3-testng-基本注解" aria-hidden="true">#</a> 3. TestNG 基本注解</h2><h3 id="_3-1-注解列表" tabindex="-1"><a class="header-anchor" href="#_3-1-注解列表" aria-hidden="true">#</a> 3.1. 注解列表</h3><p>以下是TestNG支持的注释列表：</p><table><thead><tr><th>注解</th><th>描述</th></tr></thead><tbody><tr><td><code>@BeforeSuite</code></td><td>在该套件的所有测试都运行在注释的方法之前，仅运行一次。</td></tr><tr><td><code>@AfterSuite</code></td><td>在该套件的所有测试都运行在注释方法之后，仅运行一次。</td></tr><tr><td><code>@BeforeClass</code></td><td>在调用当前类的第一个测试方法之前运行，注释方法仅运行一次。</td></tr><tr><td><code>@AfterClass</code></td><td>在调用当前类的第一个测试方法之后运行，注释方法仅运行一次</td></tr><tr><td><code>@BeforeTest</code></td><td>注释的方法将在属于<code>&lt;test&gt;</code>标签内的类的所有测试方法运行之前运行。</td></tr><tr><td><code>@AfterTest</code></td><td>注释的方法将在属于<code>&lt;test&gt;</code>标签内的类的所有测试方法运行之后运行。</td></tr><tr><td><code>@BeforeGroups</code></td><td>配置方法将在之前运行组列表。 此方法保证在调用属于这些组中的任何一个的第一个测试方法之前不久运行。</td></tr><tr><td><code>@AfterGroups</code></td><td>此配置方法将在之后运行组列表。该方法保证在调用属于任何这些组的最后一个测试方法之后不久运行。</td></tr><tr><td><code>@BeforeMethod</code></td><td>注释方法将在每个测试方法之前运行。</td></tr><tr><td><code>@AfterMethod</code></td><td>注释方法将在每个测试方法之后运行。</td></tr><tr><td><code>@DataProvider</code></td><td>标记一种方法来提供测试方法的数据。 注释方法必须返回一个<code>Object [] []</code>，其中每个<code>Object []</code>可以被分配给测试方法的参数列表。 要从该<code>DataProvider</code>接收数据的<code>@Test</code>方法需要使用与此注释名称相等的<code>dataProvider</code>名称。</td></tr><tr><td><code>@Factory</code></td><td>将一个方法标记为工厂，返回<code>TestNG</code>将被用作测试类的对象。 该方法必须返回<code>Object []</code>。</td></tr><tr><td><code>@Listeners</code></td><td>定义测试类上的侦听器。</td></tr><tr><td><code>@Parameters</code></td><td>描述如何将参数传递给<code>@Test</code>方法。</td></tr><tr><td><code>@Test</code></td><td>将类或方法标记为测试的一部分。</td></tr></tbody></table><h3 id="_3-2-忽略测试" tabindex="-1"><a class="header-anchor" href="#_3-2-忽略测试" aria-hidden="true">#</a> 3.2. 忽略测试</h3><blockquote><p>默认enabled为true。默认测试用例是开启状态。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span><span class="token punctuation">(</span>enabled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-3-超时处理" tabindex="-1"><a class="header-anchor" href="#_3-3-超时处理" aria-hidden="true">#</a> 3.3. 超时处理</h3><blockquote><p>超时处理，常用来做性能测试，超过时间会报错。单位：毫秒。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span><span class="token punctuation">(</span>timeOut <span class="token operator">=</span> <span class="token number">5000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-4-使用注释-注解的好处" tabindex="-1"><a class="header-anchor" href="#_3-4-使用注释-注解的好处" aria-hidden="true">#</a> 3.4. 使用注释/注解的好处</h3><p>以下是使用注释/注解的一些好处：</p><ul><li>TestNG通过查找注释/注解来识别它感兴趣的方法。 因此，方法名称不限于任何模式或格式。</li><li>可以将其他参数传递给注释。</li><li>注释是强类型的，所以编译器会马上标记任何错误。</li><li>测试类不再需要扩展任何东西(如TestCase，对于JUnit3)。</li></ul><h2 id="_4-testng-dataprovider-注解-数据提供者" tabindex="-1"><a class="header-anchor" href="#_4-testng-dataprovider-注解-数据提供者" aria-hidden="true">#</a> 4. TestNG - DataProvider（注解）数据提供者</h2><blockquote><p>测试参数化能让测试大量的数据集变为可能，也大大方便数据的修改和测试脚本的编写，测试参数化让数据和脚本分离开来，方便后续的维护。 这一篇先来说说数据提供者DataProvider</p></blockquote><p><strong>数据提供者@DataProvider</strong> 注解@DataProvider在参数化测试中起到重要的作用，该注解下的函数返回数据类型需要时Object[][]，看例子如何实现：</p><h3 id="_4-1-使用" tabindex="-1"><a class="header-anchor" href="#_4-1-使用" aria-hidden="true">#</a> 4.1. 使用</h3><p>@DataProvider函数，需要定义属性name</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@DataProvider</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;testcase&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">dataProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
            <span class="token punctuation">{</span><span class="token string">&quot;小李&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token string">&quot;小赵&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token string">&quot;小周&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// @Test测试用例，属性dataProvider需要指定对应的数据提供者名称</span>
<span class="token annotation punctuation">@Test</span><span class="token punctuation">(</span>dataProvider <span class="token operator">=</span> <span class="token string">&quot;testcase&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testcase</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create test :com.testproj.Demo.TestDataProvider@38bc8ab5
[TestNG] Running:
  E:\\OPPO\\JavaProject\\TestNGProj\\res\\testNG.xml
小李
小赵
小明
小周
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-备注" tabindex="-1"><a class="header-anchor" href="#_4-2-备注" aria-hidden="true">#</a> 4.2. 备注</h3><h4 id="_4-2-1-注解使用" tabindex="-1"><a class="header-anchor" href="#_4-2-1-注解使用" aria-hidden="true">#</a> 4.2.1. 注解使用</h4><ol><li>DataProvider注解name属性和Test对应dataProvider属性可以进行绑定。</li></ol><h4 id="_4-2-2-返回结构object" tabindex="-1"><a class="header-anchor" href="#_4-2-2-返回结构object" aria-hidden="true">#</a> 4.2.2. 返回结构<code>Object[][]</code></h4><ol><li><p><code>Object[][]</code>每层都会调用一次测试用例。上面的例子，会调用四次对应的testcase测试用例。</p></li><li><p><code>Object[][]</code>一层可以放入多个属性，例：</p></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@DataProvider</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;testcase&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">dataProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
            <span class="token punctuation">{</span><span class="token string">&quot;小李&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span> <span class="token number">187</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token string">&quot;小王&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token string">&quot;女&quot;</span><span class="token punctuation">,</span> <span class="token number">167</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token string">&quot;小组&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span> <span class="token number">174</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token string">&quot;小六&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span> <span class="token number">179</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Test</span><span class="token punctuation">(</span>dataProvider <span class="token operator">=</span> <span class="token string">&quot;testcase&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testcase</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">long</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> sex<span class="token punctuation">,</span> <span class="token keyword">long</span> height<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;姓名：&quot;</span><span class="token operator">+</span>name<span class="token operator">+</span><span class="token string">&quot;；年龄：&quot;</span><span class="token operator">+</span>age<span class="token operator">+</span><span class="token string">&quot;；性别：&quot;</span><span class="token operator">+</span>sex<span class="token operator">+</span><span class="token string">&quot;；身高：&quot;</span><span class="token operator">+</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>Object[][]</code>每层的参数数量和参数类型必须相同。</li></ol><h3 id="_4-3-提供数据方式" tabindex="-1"><a class="header-anchor" href="#_4-3-提供数据方式" aria-hidden="true">#</a> 4.3. 提供数据方式</h3><ol><li>硬编码在Java源码上。</li><li>txt文本文件。</li><li>配置文件properties。</li><li>excel文档。</li><li>数据库。</li><li>网络中。</li></ol>`,36),o=[p];function c(i,l){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","50.integrated-testng.html.vue"]]);export{d as default};

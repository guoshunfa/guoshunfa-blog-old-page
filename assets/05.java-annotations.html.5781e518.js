import{_ as o,r as p,o as c,c as l,a as n,b as a,d as e,e as t}from"./app.4659d0e0.js";const i={},u=t(`<h1 id="oracle-java-注解" tabindex="-1"><a class="header-anchor" href="#oracle-java-注解" aria-hidden="true">#</a> Oracle Java 注解</h1><blockquote><p>本文章以jdk8为基础进行编写，如果想查看后续的版本可以前往jdk版本目录下查看。</p><p>翻译自：https://docs.oracle.com/javase/tutorial/java/annotations/index.html</p></blockquote><p>注解是元数据的一种形式，它提供关于程序的数据，而不是程序本身的一部分。注释对它们所注解的代码的操作没有直接影响。</p><p>注解有多种用途，其中包括：</p><ul><li><strong>编译器信息</strong> — 编译器可以使用注解来检测错误或抑制警告。</li><li><strong>编译时和部署时处理</strong> — 软件工具可以处理注解信息以生成代码、XML文件等。</li><li><strong>运行时处理</strong> — 某些注解可在运行时检查。</li></ul><h2 id="注解基础" tabindex="-1"><a class="header-anchor" href="#注解基础" aria-hidden="true">#</a> 注解基础</h2><h3 id="注解的格式" tabindex="-1"><a class="header-anchor" href="#注解的格式" aria-hidden="true">#</a> 注解的格式</h3><p>在最简单的形式中，注释如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Entity</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>at符号字符（@）向编译器表示后面是注释。在以下示例中，注释的名称为“覆盖”：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">void</span> <span class="token function">mySuperMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注释可以包括可以命名或未命名的元素，这些元素有值：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Author</span><span class="token punctuation">(</span>
   name <span class="token operator">=</span> <span class="token string">&quot;Benjamin Franklin&quot;</span><span class="token punctuation">,</span>
   date <span class="token operator">=</span> <span class="token string">&quot;3/27/2003&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果只有一个名为value的元素，则可以省略该名称，如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果注释没有元素，则可以省略括号，如前面的@Override示例所示。</p><p>也可以在同一声明上使用多个注释：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Author</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Jane Doe&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EBook</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果注释具有相同的类型，则称为重复注释：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Author</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Jane Doe&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Author</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;John Smith&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),d={href:"https://docs.oracle.com/javase/tutorial/java/annotations/repeating.html",target:"_blank",rel:"noopener noreferrer"},r=t(`<p>注释类型可以是在java中定义的类型之一。lang或java.lang.annotation包。在前面的示例中，Override和SuppressWarnings是预定义的Java注释。也可以定义自己的注释类型。上一个示例中的Author和Ebook注释是自定义注释类型。</p><h3 id="可以使用注释的位置" tabindex="-1"><a class="header-anchor" href="#可以使用注释的位置" aria-hidden="true">#</a> 可以使用注释的位置</h3><p>注释可以应用于声明：类、字段、方法和其他程序元素的声明。在声明中使用时，按照惯例，每个注释通常显示在自己的行上。</p><p>从JavaSE8版本开始，注释也可以应用于类型的使用。以下是一些示例：</p><ul><li>类实例创建表达式：</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token annotation punctuation">@Interned</span> <span class="token class-name">MyObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>类型铸造:</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> myString <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token annotation punctuation">@NonNull</span> <span class="token class-name">String</span><span class="token punctuation">)</span> str<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>implements子句：</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token keyword">class</span> <span class="token class-name">UnmodifiableList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span>
        <span class="token annotation punctuation">@Readonly</span> <span class="token class-name">List</span><span class="token operator">&lt;</span><span class="token annotation punctuation">@Readonly</span> <span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>引发异常声明：</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token keyword">void</span> <span class="token function">monitorTemperature</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>
        <span class="token annotation punctuation">@Critical</span> <span class="token class-name">TemperatureException</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12),v={href:"https://docs.oracle.com/javase/tutorial/java/annotations/type_annotations.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="声明批注类型" tabindex="-1"><a class="header-anchor" href="#声明批注类型" aria-hidden="true">#</a> 声明批注类型</h2><p>许多注释替换代码中的注释。</p><p>假设一个软件组传统上以提供重要信息的注释开始每个类的主体：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Generation3List</span> <span class="token keyword">extends</span> <span class="token class-name">Generation2List</span> <span class="token punctuation">{</span>

   <span class="token comment">// Author: John Doe</span>
   <span class="token comment">// Date: 3/17/2002</span>
   <span class="token comment">// Current revision: 6</span>
   <span class="token comment">// Last modified: 4/12/2004</span>
   <span class="token comment">// By: Jane Doe</span>
   <span class="token comment">// Reviewers: Alice, Bill, Cindy</span>

   <span class="token comment">// class code goes here</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若要将此相同的元数据与注释一起添加，必须首先定义注释类型。执行此操作的语法为：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@interface</span> <span class="token class-name">ClassPreamble</span> <span class="token punctuation">{</span>
   <span class="token class-name">String</span> <span class="token function">author</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">String</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">int</span> <span class="token function">currentRevision</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token class-name">String</span> <span class="token function">lastModified</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;N/A&quot;</span><span class="token punctuation">;</span>
   <span class="token class-name">String</span> <span class="token function">lastModifiedBy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;N/A&quot;</span><span class="token punctuation">;</span>
   <span class="token comment">// Note use of array</span>
   <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">reviewers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释类型定义看起来类似于一个接口定义，其中关键字接口前面有at符号（@）（@=at，如注释类型）。注释类型是一种界面形式，将在后面的课程中介绍。目前，您不需要了解接口。</p><p>前一个注释定义的主体包含注释类型元素声明，看起来很像方法。请注意，它们可以定义可选的默认值。</p><p>定义注释类型后，可以使用该类型的注释，并填充值，如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@ClassPreamble</span> <span class="token punctuation">(</span>
   author <span class="token operator">=</span> <span class="token string">&quot;John Doe&quot;</span><span class="token punctuation">,</span>
   date <span class="token operator">=</span> <span class="token string">&quot;3/17/2002&quot;</span><span class="token punctuation">,</span>
   currentRevision <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span>
   lastModified <span class="token operator">=</span> <span class="token string">&quot;4/12/2004&quot;</span><span class="token punctuation">,</span>
   lastModifiedBy <span class="token operator">=</span> <span class="token string">&quot;Jane Doe&quot;</span><span class="token punctuation">,</span>
   <span class="token comment">// Note array notation</span>
   reviewers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Cindy&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Generation3List</span> <span class="token keyword">extends</span> <span class="token class-name">Generation2List</span> <span class="token punctuation">{</span>

<span class="token comment">// class code goes here</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>==注意：要使@ClassPreamble中的信息显示在Javadoc生成的文档中，必须使用@Documented注释注释@ClassPremable定义：==</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// import this to use @Documented</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">ClassPreamble</span> <span class="token punctuation">{</span>

   <span class="token comment">// Annotation element definitions</span>
   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预定义的注释类型" tabindex="-1"><a class="header-anchor" href="#预定义的注释类型" aria-hidden="true">#</a> 预定义的注释类型</h2><p>Java SE API中预定义了一组注释类型。一些注释类型由Java编译器使用，有些则适用于其他注释。</p><h3 id="java语言使用的注释类型" tabindex="-1"><a class="header-anchor" href="#java语言使用的注释类型" aria-hidden="true">#</a> Java语言使用的注释类型</h3><p>在java中定义的预定义注释类型。lang是@Deprecated、@Override和@SuppressWarnings。</p>`,16),m={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Deprecated.html",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"@Deprecated",-1),b=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token comment">// Javadoc comment follows</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@deprecated</span>
     * explanation of why it was deprecated
     */</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">deprecatedMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Override.html",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"@Override",-1),j=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token comment">// mark method as a superclass method</span>
   <span class="token comment">// that has been overridden</span>
   <span class="token annotation punctuation">@Override</span> 
   <span class="token keyword">int</span> <span class="token function">overriddenMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然重写方法时不需要使用此注释，但它有助于防止错误。如果标记为@Override的方法未能正确覆盖其超类之一中的方法，编译器将生成错误。</p>`,2),f={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/SuppressWarnings.html",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"@SuppressWarnings",-1),w=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token comment">// use a deprecated method and tell </span>
   <span class="token comment">// compiler not to generate a warning</span>
   <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;deprecation&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">void</span> <span class="token function">useDeprecatedMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// deprecation warning</span>
        <span class="token comment">// - suppressed</span>
        objectOne<span class="token punctuation">.</span><span class="token function">deprecatedMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个编译器警告都属于一个类别。Java语言规范列出了两个类别：弃用和未选中。当与泛型出现之前编写的遗留代码交互时，可能会出现未经检查的警告。要抑制多个类别的警告，请使用以下语法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;deprecation&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),q={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/SafeVarargs.html",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"@SafeVarargs",-1),S={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/FunctionalInterface.html",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"@FunctionalInterface",-1),A=n("h3",{id:"应用于其他注释的注释",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#应用于其他注释的注释","aria-hidden":"true"},"#"),a(" 应用于其他注释的注释")],-1),J=n("p",null,"应用于其他注释的注释称为元注释。java.lang.annotation中定义了几种元注释类型。",-1),T={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/annotation/Retention.html",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"@Retention",-1),R=n("ul",null,[n("li",null,[n("code",null,"RetentionPolicy.SOURCE"),a(" – 标记的注释仅保留在源级别，编译器将忽略它。")]),n("li",null,[n("code",null,"RetentionPolicy.CLASS"),a(" – 标记的注释在编译时由编译器保留，但被Java虚拟机（JVM）忽略。")]),n("li",null,[n("code",null,"RetentionPolicy.RUNTIME"),a(" – 标记的注释由JVM保留，因此可以由运行时环境使用。")])],-1),M={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/annotation/Documented.html",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"@Documented",-1),O={href:"https://docs.oracle.com/javase/8/docs/technotes/guides/javadoc/index.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/annotation/Target.html",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"@Target",-1),L=t("<ul><li><code>ElementType.ANNOTATION_TYPE</code> 可以应用于注释类型。</li><li><code>ElementType.CONSTRUCTOR</code> 可以应用于构造函数。</li><li><code>ElementType.FIELD</code> 可以应用于字段或属性。</li><li><code>ElementType.LOCAL_VARIABLE</code> 可以应用于局部变量。</li><li><code>ElementType.METHOD</code> 可以应用于方法级注释。</li><li><code>ElementType.PACKAGE</code> 可以应用于包声明。</li><li><code>ElementType.PARAMETER</code> 可以应用于方法的参数。</li><li><code>ElementType.TYPE</code> 可以应用于类的任何元素。</li></ul>",1),B={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/annotation/Inherited.html",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"@Inherited",-1),W={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/annotation/Repeatable.html",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"@Repeatable",-1),F={href:"https://docs.oracle.com/javase/tutorial/java/annotations/repeating.html",target:"_blank",rel:"noopener noreferrer"},U=n("h2",{id:"类型注释和可插拔类型系统",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#类型注释和可插拔类型系统","aria-hidden":"true"},"#"),a(" 类型注释和可插拔类型系统")],-1),G=n("em",null,"类型的使用",-1),X=n("em",null,"类型注释",-1),Y={href:"https://docs.oracle.com/javase/tutorial/java/annotations/basics.html",target:"_blank",rel:"noopener noreferrer"},z=t(`<p>创建类型注释是为了支持改进的Java程序分析，以确保更强的类型检查。Java SE 8发行版不提供类型检查框架，但它允许您编写（或下载）一个类型检查框架。</p><p>例如，您希望确保程序中的特定变量永远不会赋值为null；您希望避免触发“NullPointerException”。您可以编写一个自定义插件来检查这一点。然后，您将修改代码以注释该特定变量，表明它从未赋值为null。变量声明可能如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@NonNull</span> <span class="token class-name">String</span> str<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当您编译代码时，包括命令行中的“NonNull”模块，如果编译器检测到潜在问题，就会打印警告，允许您修改代码以避免错误。更正代码以删除所有警告后，程序运行时不会发生此特定错误。</p><p>您可以使用多个类型检查模块，其中每个模块检查不同类型的错误。通过这种方式，您可以在Java类型系统的基础上进行构建，在需要的时间和位置添加特定的检查。</p><p>通过明智地使用类型注释和可插入类型检查器，您可以编写更强大、更不容易出错的代码。</p>`,6),H={href:"http://types.cs.washington.edu/checker-framework/",target:"_blank",rel:"noopener noreferrer"},K=t(`<h2 id="重复注释" tabindex="-1"><a class="header-anchor" href="#重复注释" aria-hidden="true">#</a> 重复注释</h2><p>在某些情况下，您希望将相同的注释应用于声明或类型使用。从Java SE 8版本开始，<em>重复注释</em>使您能够做到这一点。</p><p>例如，您正在编写代码以使用计时器服务，该服务使您能够在给定时间或按特定计划运行方法，类似于UNIX“cron”服务。现在，您要设置一个计时器，以在每月的最后一天和每周五晚上11:00运行一个方法“doPeriodCleanup”。若要设置计时器，请创建一个“@Schedule”注释，并将其应用于“doPeriodicCleanup”方法两次。第一次使用指定一个月的最后一天，第二次使用指定星期五晚上11点，如以下代码示例所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Schedule</span><span class="token punctuation">(</span>dayOfMonth<span class="token operator">=</span><span class="token string">&quot;last&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Schedule</span><span class="token punctuation">(</span>dayOfWeek<span class="token operator">=</span><span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> hour<span class="token operator">=</span><span class="token string">&quot;23&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doPeriodicCleanup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上一个示例将注释应用于方法。可以在使用标准注释的任何位置重复注释。例如，您有一个用于处理未授权访问异常的类。您为管理者和管理员分别使用一个“@Alert”注释来注释类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Alert</span><span class="token punctuation">(</span>role<span class="token operator">=</span><span class="token string">&quot;Manager&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Alert</span><span class="token punctuation">(</span>role<span class="token operator">=</span><span class="token string">&quot;Administrator&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UnauthorizedAccessException</span> <span class="token keyword">extends</span> <span class="token class-name">SecurityException</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出于兼容性原因，重复注释存储在Java编译器自动生成的<em>容器注释</em>中。为了让编译器执行此操作，代码中需要两个声明。</p><h3 id="step-1-声明可重复注释类型" tabindex="-1"><a class="header-anchor" href="#step-1-声明可重复注释类型" aria-hidden="true">#</a> Step 1: 声明可重复注释类型</h3><p>批注类型必须标记为“@Repeatable”元批注。以下示例定义了自定义的“@Schedule”可重复注释类型：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Repeatable</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Repeatable</span><span class="token punctuation">(</span><span class="token class-name">Schedules</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Schedule</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> <span class="token function">dayOfMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;first&quot;</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> <span class="token function">dayOfWeek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;Mon&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token function">hour</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">12</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>括号中的“@Repeatable”元注释的值是Java编译器为存储重复注释而生成的容器注释的类型。在此示例中，包含的批注类型为“Schedules”，因此重复的“@Schedule”批注存储在“@Schedules”批注中。</p><p>将同一注释应用于声明而不首先声明它是可重复的，将导致编译时错误。</p><h3 id="step-2-声明包含批注类型" tabindex="-1"><a class="header-anchor" href="#step-2-声明包含批注类型" aria-hidden="true">#</a> Step 2: 声明包含批注类型</h3><p>包含批注类型必须具有数组类型的“value”元素。数组类型的组件类型必须是可重复的注释类型。包含注释类型的“Schedules”的声明如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Schedules</span> <span class="token punctuation">{</span>
    <span class="token class-name">Schedule</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正在检索批注" tabindex="-1"><a class="header-anchor" href="#正在检索批注" aria-hidden="true">#</a> 正在检索批注</h3>`,16),Q={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/AnnotatedElement.html#getAnnotation-java.lang.Class-",target:"_blank",rel:"noopener noreferrer"},Z=n("em",null,"一个",-1),$={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/AnnotatedElement.html#getAnnotationsByType-java.lang.Class-",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/AnnotatedElement.html",target:"_blank",rel:"noopener noreferrer"},an=n("h3",{id:"设计注意事项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#设计注意事项","aria-hidden":"true"},"#"),a(" 设计注意事项")],-1),sn=n("p",null,[a("设计注释类型时，必须考虑该类型注释的"),n("em",null,"基数"),a("。现在可以零次、一次或多次使用注释，如果注释的类型标记为“@Repeatable”。还可以通过使用“@Target”元注释来限制可以使用注释类型的位置。例如，您可以创建只能用于方法和字段的可重复注释类型。仔细设计注释类型非常重要，以确保程序员"),n("em",null,"使用"),a("注释时发现它尽可能灵活和强大。")],-1);function en(tn,on){const s=p("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[a("自Java SE 8发行版起，支持重复注释。有关详细信息，请参见"),n("a",d,[a("Repeating Annotations"),e(s)]),a(".。")]),r,n("p",null,[a("这种形式的注释称为类型注释。有关详细信息，请参见 "),n("a",v,[a("Type Annotations and Pluggable Type Systems"),e(s)]),a(".。")]),k,n("p",null,[n("a",m,[h,e(s)]),a(" 注释表示标记的元素已弃用，不应再使用。每当程序使用带有@Deprecated注释的方法、类或字段时，编译器都会生成警告。当元素被弃用时，还应使用Javadoc@deprecated标记对其进行记录，如下例所示。在Javadoc注释和注释中使用at符号（@）并非巧合：它们在概念上是相关的。此外，请注意，Javadoc标记以小写d开头，注释以大写d开头。")]),b,n("p",null,[n("a",g,[_,e(s)]),a(" 注释通知编译器该元素将覆盖在超类中声明的元素。重写方法将在接口和继承中讨论。")]),j,n("p",null,[n("a",f,[y,e(s)]),a(" 注释告诉编译器抑制否则将生成的特定警告。在以下示例中，使用了不推荐使用的方法，编译器通常会生成警告。但是，在这种情况下，注释会导致警告被抑制。")]),w,n("p",null,[n("a",q,[x,e(s)]),a("注释应用于方法或构造函数时，断言代码不会对其varargs参数执行潜在的不安全操作。使用此注释类型时，将禁止与varargs用法相关的未选中警告。")]),n("p",null,[n("a",S,[E,e(s)]),a(" @JavaSE8中引入的，类型声明旨在成为Java语言规范定义的功能接口。")]),A,J,n("p",null,[n("a",T,[C,e(s)]),a(" 注释指定如何存储标记的注释：")]),R,n("p",null,[n("a",M,[N,e(s)]),a(" annotation表示无论何时使用指定的注释，都应该使用Javadoc工具记录这些元素。（默认情况下，注释不包含在Javadoc中。）有关更多信息，请参阅"),n("a",O,[a("Javadoc tools page"),e(s)]),a(".。")]),n("p",null,[n("a",D,[P,e(s)]),a(" annotation标记另一个注释，以限制注释可以应用于哪种Java元素。目标注释指定以下元素类型之一作为其值：")]),L,n("p",null,[n("a",B,[I,e(s)]),a(" annotation表示注释类型可以从超类继承。（默认情况下，这不是真的。）当用户查询注释类型并且类没有该类型的注释时，将查询类的超类以获取注释类型。此注释仅适用于类声明。")]),n("p",null,[n("a",W,[V,e(s)]),a(" annotation, Java SE 8中引入的标记注释表示标记注释可以多次应用于同一声明或类型使用。关于更多信息， see "),n("a",F,[a("Repeating Annotations"),e(s)]),a(".")]),U,n("p",null,[a("在JavaSE8发布之前，注释只能应用于声明。从Java SE 8版本开始，注释也可以应用于任何"),G,a("。这意味着可以在使用类型的任何地方使用注释。使用类型的几个例子是类实例创建表达式（“new”）、强制转换、“implements”子句和“throws”子句。这种形式的注释称为"),X,a(),n("a",Y,[a("Annotations Basics"),e(s)]),a(".")]),z,n("p",null,[a("在许多情况下，您不必编写自己的类型检查模块。有第三方为您完成了这项工作。例如，您可能希望利用华盛顿大学创建的Checker框架。该框架包括“NonNull”模块、正则表达式模块和互斥锁模块。关于更多信息， see the "),n("a",H,[a("Checker Framework"),e(s)]),a(".")]),K,n("p",null,[a("反射API中有几种方法可用于检索注释。返回单个注释的方法的行为，如"),n("a",Q,[a("AnnotatedElement.getAnnotation（Class）"),e(s)]),a("是不变的，因为它们仅在存在所请求类型的"),Z,a("注释时返回单个注释。如果存在多个请求类型的注释，则可以通过首先获取它们的容器注释来获取它们。这样，遗留代码继续工作。JavaSE8中引入了其他方法，可以扫描容器注释以同时返回多个注释，例如"),n("a",$,[a("AnnotatedElement.getAnnotationsByType（Class）"),e(s)]),a("。参见"),n("a",nn,[a("AnnotatedElement"),e(s)]),a("有关所有可用方法的信息的类规范。")]),an,sn])}const cn=o(i,[["render",en],["__file","05.java-annotations.html.vue"]]);export{cn as default};

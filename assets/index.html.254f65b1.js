import{_ as n,o as e,c as a,e as s}from"./app.4659d0e0.js";const i={},l=s(`<h1 id="java-测试-assert断言" tabindex="-1"><a class="header-anchor" href="#java-测试-assert断言" aria-hidden="true">#</a> Java 测试 - Assert断言</h1><blockquote><p>在 JDK 1.4之前，开发人员经常使用注释来记录关于程序正确性的假设。然而，注释作为测试和调试假设的机制是无用的。编译器忽略注释，因此无法使用它们进行 bug 检测。开发人员在更改代码时也经常不更新注释。</p><p>在 JDK 1.4中，断言被引入作为测试和调试代码假设的新机制。实质上，断言是在运行时执行的可编译实体，假设你已经为程序测试启用了它们。可以通过编写断言来通知 bug 发生的地方，这样可以大大减少调试失败程序的时间。</p></blockquote><h2 id="_1-编写断言的表达式" tabindex="-1"><a class="header-anchor" href="#_1-编写断言的表达式" aria-hidden="true">#</a> 1. 编写断言的表达式</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">assert</span> <span class="token class-name">BooleanExpr</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果 BooleanExpr 的计算结果为 true，则不会发生任何事情，并继续执行。但是，如果表达式计算结果为 false，那么将抛出 AssertionError</p><h3 id="_1-1-举个例子" tabindex="-1"><a class="header-anchor" href="#_1-1-举个例子" aria-hidden="true">#</a> 1.1. 举个例子</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">assert</span> a<span class="token operator">&gt;</span><span class="token number">100</span><span class="token punctuation">;</span><span class="token comment">//false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-运行后没有反应" tabindex="-1"><a class="header-anchor" href="#_2-运行后没有反应" aria-hidden="true">#</a> 2. 运行后没有反应??</h2><p><code>有的小伙伴发现自己的IDE并没有抛出Error 这是因为没有显示开启,启用断言</code> 开启方法: vm options 加入 -ea</p><p>此时我们运行项目 发现抛出了异常</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Exception</span> in thread <span class="token string">&quot;main&quot;</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>AssertionError</span>
    at <span class="token class-name">Scratch</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span>scratch_4<span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-希望获得更多信息" tabindex="-1"><a class="header-anchor" href="#_3-希望获得更多信息" aria-hidden="true">#</a> 3. 希望获得更多信息?</h2><p>此时我们已经知道了断言的基本用法 但是抛出Error后我们并不知道是什么问题导致的 还需要去翻看代码找到报错的地方, 如果我们希望获得更多有用的信息 我们可以这样修改Assert语句:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>assert BooleanExpr : expr;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>expr 是任何可以返回值的表达式(包括方法调用)但是不能调用具有 void 返回类型的方法。一个有用的表达式是一个字符串，用它来描述失败的原因</p><h3 id="_3-1-举个例子" tabindex="-1"><a class="header-anchor" href="#_3-1-举个例子" aria-hidden="true">#</a> 3.1. 举个例子</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">assert</span> a<span class="token operator">&gt;</span><span class="token number">100</span> <span class="token operator">:</span> <span class="token string">&quot;a &lt; 100&quot;</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Exception in thread &quot;main&quot; java.lang.AssertionError: a &lt; 100
    at Scratch.main(scratch_4.java:5)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>无论哪个例子，在不使用-ea (启用断言)选项的情况下运行都不会产生输出。当断言未启用时，它们不会执行，尽管它们仍然存在于类文件中。</p><h2 id="_4-前置条件和后置条件" tabindex="-1"><a class="header-anchor" href="#_4-前置条件和后置条件" aria-hidden="true">#</a> 4. 前置条件和后置条件</h2><p>前置条件: 是在执行某些代码之前必须求值为 true 的条件</p><p>后置条件: 是在执行某些代码后必须求值为 true 的条件</p><h3 id="_4-1-前置条件" tabindex="-1"><a class="header-anchor" href="#_4-1-前置条件" aria-hidden="true">#</a> 4.1. 前置条件</h3><p>前置条件检查:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

class PNG
    {
        /**
         *  Create a PNG instance, read specified PNG file, and decode
         *  it into suitable structures.
         *
         *  @param filespec path and name of PNG file to read
         *
         *  @throws NullPointerException when &lt;code&gt;filespec&lt;/code&gt; is
         *          &lt;code&gt;null&lt;/code&gt;
         */
        PNG(String filespec) throws IOException
        {
            //在非私有构造方法中 使用前置条件
            if (filespec == null)
                throw new NullPointerException(&quot;filespec is null&quot;);
            try (FileInputStream fis = new FileInputStream(filespec))
            {
                readHeader(fis);
            }
        }

        private void readHeader(InputStream is) throws IOException
        {  
                //在私有方法中使用前置条件检查
            assert is != null : &quot;null passed to is&quot;;
        }
    }

    class Scratch
    {
        public static void main(String[] args) throws IOException
        {
            PNG png = new PNG((args.length == 0) ? null : args[0]);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-后置条件" tabindex="-1"><a class="header-anchor" href="#_4-2-后置条件" aria-hidden="true">#</a> 4.2. 后置条件</h3><p>后置条件检查:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class AssertDemo
{
   public static void main(String[] args)
   {
      int[] array = { 20, 91, -6, 16, 0, 7, 51, 42, 3, 1 };
      sort(array);
      for (int element: array)
         System.out.printf(&quot;%d &quot;, element);
      System.out.println();
   }

   private static boolean isSorted(int[] x)
   {
      for (int i = 0; i &lt; x.length - 1; i++)
         if (x[i] &gt; x[i + 1])
            return false;
      return true;
   }

   private static void sort(int[] x)
   {
      int j, a;
      // For all integer values except the leftmost value ...
      for (int i = 1; i &lt; x.length; i++)
      {
         // Get integer value a.
         a = x[i];
         // Get index of a. This is the initial insert position, which is
         // used if a is larger than all values in the sorted section.
         j = i;
         // While values exist to the left of a&#39;s insert position and the
         // value immediately to the left of that insert position is
         // numerically greater than a&#39;s value ...
         while (j &gt; 0 &amp;&amp; x[j - 1] &gt; a)
         {
            // Shift left value -- x[j - 1] -- one position to its right --
            // x[j].
            x[j] = x[j - 1];
            // Update insert position to shifted value&#39;s original position
            // (one position to the left).
            j--;
         }
         // Insert a at insert position (which is either the initial insert
         // position or the final insert position), where a is greater than
         // or equal to all values to its left.
         x[j] = a;
      }
      //在 sort ()返回给它的调用者之前，我使用 assert 检查 x 被排序的后置条件。
      assert isSorted(x): &quot;array not sorted&quot;;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-陷阱" tabindex="-1"><a class="header-anchor" href="#_5-陷阱" aria-hidden="true">#</a> 5. 陷阱</h2><p>assert关键字用法简单，但是使用assert往往会让你陷入越来越深的陷阱中。应避免使用。笔者经过研究，总结了以下原因：</p><blockquote><p>1、 assert关键字需要在运行时候显式开启才能生效，否则你的断言就没有任何意义。而现在主流的Java IDE工具默认都没有开启-ea断言检查功能。这就意味着你如果使用IDE工具编码，调试运行时候会有一定的麻烦。并且，对于Java Web应用，程序代码都是部署在容器里面，你没法直接去控制程序的运行，如果一定要开启-ea的开关，则需要更改Web容器的运行配置参数。这对程序的移 植和部署都带来很大的不便。</p></blockquote><blockquote><p>2、用assert代替if是陷阱之二。assert的判断和if语句差不多，但两者的作用有着本质的区别：assert关键字本意上是为测试 调试程序时使用的，但如果不小心用assert来控制了程序的业务流程，那在测试调试结束后去掉assert关键字就意味着修改了程序的正常的逻辑。</p></blockquote><blockquote><p>3、assert断言失败将面临程序的退出。这在一个生产环境下的应用是绝不能容忍的。一般都是通过异常处理来解决程序中潜在的错误。但是使用断言就很危险，一旦失败系统就挂了。</p></blockquote><h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结" aria-hidden="true">#</a> 6. 总结</h2><p>assert既然是为了调试测试程序用，不在正式生产环境下用，那应该考虑更好的测试JUint来代替其做用，JUint相对assert关键的所提供的功能是有过之而无不及。当然完全可以通过IDE debug来进行调试测试</p><p>因此，应当避免在Java中使用assert关键字，除非哪一天Java默认支持开启-ea的开关，这时候可以考虑。对比一下，assert能给你带来多少好处，多少麻烦，这是我们选择是否使用的的原则,读者可以自行取舍.</p>`,37),t=[l];function d(r,c){return e(),a("div",null,t)}const v=n(i,[["render",d],["__file","index.html.vue"]]);export{v as default};

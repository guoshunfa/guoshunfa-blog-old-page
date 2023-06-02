import{_ as a,o as s,c as n,e}from"./app.4659d0e0.js";const t={},i=e(`<h1 id="宝塔安装gitlab提示配置错误" tabindex="-1"><a class="header-anchor" href="#宝塔安装gitlab提示配置错误" aria-hidden="true">#</a> 宝塔安装gitlab提示配置错误</h1><p>转载自：https://blog.csdn.net/w18838020329/article/details/125763134</p><blockquote><p>宝塔面板在安装gitlab时会遇到安装以提示已完成，在实际设置时提示“未找到相关配置，gitlab可能已损坏” 此错误安装“gitlab中文社区办”和“gitlab最新社区版”均有可能遇到此错误，详细错误见下图。</p></blockquote><p><img src="https://img-blog.csdnimg.cn/0ea1bc9df53143a9b131097350788c8d.png#pic_center" alt="img"></p><p>出现该错误的原因： 之前该环境安装过gitlab并且已经卸载，但是并未完全清除相关文件，所以导致再次安装时出现此错误。</p><p>1、停止gitlab</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> gitlab-ctl stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、卸载gitlab</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">-e</span> gitlab-ce <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">-e</span> gitlab-ee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、查看gitlab进程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span>  <span class="token operator">|</span> <span class="token function">grep</span> gitlab
<span class="token comment">#杀掉守护进程（runsvdir -P /opt/gitlab/service log）</span>
<span class="token function">kill</span> 进程pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、删除gitlab文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> *gitlab* <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> gitlab <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span>
<span class="token comment">#ls /root/gitlab*看看有没有，有也删除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完删除操作后宝塔已安装的gitlab就被完全清除了，此时再去软件商店安装需要的gitlab版本即可成功安装</p><p>————————————————</p><p>版权声明：本文为CSDN博主「Emma&#39;」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。</p><p>原文链接：https://blog.csdn.net/w18838020329/article/details/125763134</p>`,17),l=[i];function p(c,o){return s(),n("div",null,l)}const d=a(t,[["render",p],["__file","005.宝塔安装gitlab提示配置错误.html.vue"]]);export{d as default};

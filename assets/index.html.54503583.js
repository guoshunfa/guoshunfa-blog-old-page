import{_ as t,o as p,c as e,e as n,a,b as s}from"./app.4659d0e0.js";const o={},c=n('<h1 id="web组件库-iframe-引入各平台视频" tabindex="-1"><a class="header-anchor" href="#web组件库-iframe-引入各平台视频" aria-hidden="true">#</a> Web组件库 - iframe 引入各平台视频</h1><h2 id="_1-引入b站视频" tabindex="-1"><a class="header-anchor" href="#_1-引入b站视频" aria-hidden="true">#</a> 1. 引入B站视频</h2><h3 id="_1-1-效果" tabindex="-1"><a class="header-anchor" href="#_1-1-效果" aria-hidden="true">#</a> 1.1. 效果</h3>',3),l=a("iframe",{src:"//player.bilibili.com/player.html?aid=420367466&bvid=BV1N3411q7z7&cid=401728312&page=1&as_wide=1&high_quality=1&danmaku=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",style:{width:"100%",height:"500px","max-width":"100%",align:"center",padding:"20px 0"}}," ",-1),u=n(`<p>代码：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//player.bilibili.com/player.html?aid=420367466&amp;bvid=BV1N3411q7z7&amp;cid=401728312&amp;page=1&amp;as_wide=1&amp;high_quality=1&amp;danmaku=0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scrolling</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span> <span class="token attr-name">framespacing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span><span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span><span class="token property">align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-实现" tabindex="-1"><a class="header-anchor" href="#_1-2-实现" aria-hidden="true">#</a> 1.2. 实现</h3><p>找到B站视频下方分享，将嵌入代码放入源代码中即可展示B站视频。</p><p><img src="https://file.pandacode.cn//blog/202109111303699.png" alt="image-20210905130818150"></p><p>例：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//player.bilibili.com/player.html?aid=420367466&amp;bvid=BV1N3411q7z7&amp;cid=401728312&amp;page=1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scrolling</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span> <span class="token attr-name">framespacing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),i=a("iframe",{src:"//player.bilibili.com/player.html?aid=420367466&bvid=BV1N3411q7z7&cid=401728312&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ",-1),r=n(`<h4 id="_1-2-1-参数描述-src" tabindex="-1"><a class="header-anchor" href="#_1-2-1-参数描述-src" aria-hidden="true">#</a> 1.2.1. 参数描述（src）</h4><table><thead><tr><th>key</th><th>说明</th></tr></thead><tbody><tr><td>aid</td><td>之前 B 站使用的 AV 号</td></tr><tr><td>bvid</td><td>目前的 BV 号</td></tr><tr><td>page</td><td>第几个视频, 起始下标为 1 (默认值也是为 1)就是 B 站视频, 选集里的, 第几个视频</td></tr><tr><td>as_wide</td><td>是否宽屏 【1: 宽屏, 0: 小屏】</td></tr><tr><td>high_quality</td><td>是否高清 【1: 高清(最高1080p) / 0: 最低视频质量(默认)】</td></tr><tr><td>danmaku</td><td>是否开启弹幕 【1: 开启(默认), 0: 关闭】</td></tr></tbody></table><h4 id="_1-2-2-调整样式" tabindex="-1"><a class="header-anchor" href="#_1-2-2-调整样式" aria-hidden="true">#</a> 1.2.2. 调整样式</h4><div class="language-stylus line-numbers-mode" data-ext="styl"><pre class="language-stylus"><code><span class="token selector">&lt;style scoped lang=&#39;stylus&#39;&gt;
iframe <span class="token punctuation">{</span></span>
  <span class="token property-declaration"><span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">;</span></span>
  <span class="token property-declaration"><span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">500</span><span class="token unit">px</span><span class="token punctuation">;</span></span>
  <span class="token property-declaration"><span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">;</span></span>
  <span class="token property-declaration"><span class="token property">align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
  <span class="token property-declaration"><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token unit">px</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终效果：</p>`,5),d=a("iframe",{src:"//player.bilibili.com/player.html?aid=420367466&bvid=BV1N3411q7z7&cid=401728312&page=1&as_wide=1&high_quality=1&danmaku=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",style:{width:"100%",height:"500px","max-width":"100%",align:"center",padding:"20px 0"}}," ",-1),k=a("h2",{id:"_2-引入腾讯视频",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-引入腾讯视频","aria-hidden":"true"},"#"),s(" 2. 引入腾讯视频")],-1),h=a("blockquote",null,[a("p",null,"与B站视频同理，引入内嵌代码即可查看视频。")],-1),m=a("h3",{id:"_2-1-效果",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-1-效果","aria-hidden":"true"},"#"),s(" 2.1. 效果")],-1),g=a("iframe",{frameborder:"0",src:"https://v.qq.com/iframe/player.html?vid=v3270e4uem9",allowFullScreen:"true",style:{width:"100%",height:"500px","max-width":"100%",align:"center",padding:"20px 0"}},null,-1),v=n(`<p>代码：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://v.qq.com/iframe/player.html?vid=v3270e4uem9<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowFullScreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span><span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span><span class="token property">align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-实现" tabindex="-1"><a class="header-anchor" href="#_2-2-实现" aria-hidden="true">#</a> 2.2. 实现</h3><h4 id="_2-2-1-参数描述" tabindex="-1"><a class="header-anchor" href="#_2-2-1-参数描述" aria-hidden="true">#</a> 2.2.1. 参数描述</h4><table><thead><tr><th>key</th><th>说明</th></tr></thead><tbody><tr><td>vid</td><td>视频唯一值</td></tr></tbody></table><h5 id="_2-2-1-1-去广告" tabindex="-1"><a class="header-anchor" href="#_2-2-1-1-去广告" aria-hidden="true">#</a> 2.2.1.1. 去广告</h5><p>有广告：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>center</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://v.qq.com/txp/iframe/player.html?vid=h30676epxvg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>240<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>center</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>无广告：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>center</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://v.qq.com/iframe/player.html?vid=h30676epxvg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>240<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>center</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>地址去掉/txp，可关闭广告。</p>`,11),q=[c,l,u,i,r,d,k,h,m,g,v];function b(_,f){return p(),e("div",null,q)}const x=t(o,[["render",b],["__file","index.html.vue"]]);export{x as default};

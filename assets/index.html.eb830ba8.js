import{_ as a,r,o as l,c as o,a as e,b as n,d as s,e as t}from"./app.4659d0e0.js";const d={},c=e("h1",{id:"vuepress框架-插件包收藏",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress框架-插件包收藏","aria-hidden":"true"},"#"),n(" Vuepress框架 - 插件包收藏")],-1),u=e("h2",{id:"一、插件包收藏",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、插件包收藏","aria-hidden":"true"},"#"),n(" 一、插件包收藏")],-1),p={href:"https://mermaid-js.github.io/mermaid/#/README",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/IOriens/vuepress-plugin-baidu-autopush",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.npmjs.com/package/vuepress-plugin-thirdparty-search",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/vxhly/vuepress-plugin-one-click-copy",target:"_blank",rel:"noopener noreferrer"},b={href:"https://vuepress-community.netlify.app/zh/plugins/zooming/#%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/zhaojun1998/Valine-Admin",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.npmjs.com/package/vuepress-plugin-element-ui/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://notes.youngkbt.cn/about/website/info/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://notes.youngkbt.cn/about/website/private/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://notes.youngkbt.cn/about/website/index-big-img/",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="二、各插件包使用说明" tabindex="-1"><a class="header-anchor" href="#二、各插件包使用说明" aria-hidden="true">#</a> 二、各插件包使用说明</h2><h3 id="_2-1-vuepress-plugin-comment-平台评论" tabindex="-1"><a class="header-anchor" href="#_2-1-vuepress-plugin-comment-平台评论" aria-hidden="true">#</a> 2.1. vuepress-plugin-comment 平台评论</h3><p>先放官网链接：https://github.com/dongyuanxin/vuepress-plugin-comment</p><h4 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h4><ul><li>Support Gitalk, Valine</li><li>Dynamic Import</li><li>Response router change and refresh automatic</li><li>User can use passage&#39;s <code>$frontmatter</code></li></ul><h4 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h4><h5 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h5><p>With <code>npm</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --save vuepress-plugin-comment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>With <code>yarn</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add vuepress-plugin-comment -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>With <code>cnpm</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cnpm i --save vuepress-plugin-comment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="⚠️route-object-properties" tabindex="-1"><a class="header-anchor" href="#⚠️route-object-properties" aria-hidden="true">#</a> ⚠️Route object properties</h5><p><strong>Don&#39;t use <code>window</code> object directly to get route information</strong>.</p>`,15),y=e("code",null,"frontmatter.to",-1),I=e("code",null,"frontmatter.from",-1),j={href:"https://router.vuejs.org/api/#route-object-properties",target:"_blank",rel:"noopener noreferrer"},G=t(`<h5 id="use-in-gitalk" tabindex="-1"><a class="header-anchor" href="#use-in-gitalk" aria-hidden="true">#</a> Use in Gitalk</h5><p>The <code>options</code> is exactly the same as <code>Gitalk</code> configuration.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  plugins: [
    [
      &#39;vuepress-plugin-comment&#39;,
      {
        choosen: &#39;gitalk&#39;, 
        options: {
          clientID: &#39;GitHub Application Client ID&#39;,
          clientSecret: &#39;GitHub Application Client Secret&#39;,
          repo: &#39;GitHub repo&#39;,
          owner: &#39;GitHub repo owner&#39;,
          admin: [&#39;GitHub repo owner and collaborators, only these guys can initialize github issues&#39;],
          distractionFreeMode: false 
        }
      }
    ]
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to access variables, such as <code>$frontmatter</code> and <code>window</code>, please use <strong>EJS</strong> syntax.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  plugins: [
    [
      &#39;vuepress-plugin-comment&#39;,
      {
        choosen: &#39;gitalk&#39;, 
        options: {
          id: &#39;&lt;%- frontmatter.commentid || frontmatter.permalink %&gt;&#39;,
          title: &#39;「Comment」&lt;%- frontmatter.title %&gt;&#39;,
          body: &#39;&lt;%- frontmatter.title %&gt;：&lt;%-window.location.origin %&gt;&lt;%- frontmatter.to.path || window.location.pathname %&gt;&#39;,
          clientID: &#39;GitHub Application Client ID&#39;,
          clientSecret: &#39;GitHub Application Client Secret&#39;,
          repo: &#39;GitHub repo&#39;,
          owner: &#39;GitHub repo owner&#39;,
          admin: [&#39;GitHub repo owner and collaborators, only these guys can initialize github issues&#39;],
          distractionFreeMode: false,
        }
      }
    ]
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note</strong>: Never use callback function in plugin configuration, that will be filtered by vuepress. So I have to support EJS syntax.</p><h5 id="use-in-valine" tabindex="-1"><a class="header-anchor" href="#use-in-valine" aria-hidden="true">#</a> Use in Valine</h5><blockquote><p>https://github.com/DesertsP/Valine-Admin</p></blockquote><p>The <code>options</code> is exactly the same as <code>Valine</code> configuration.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  plugins: [
    [
      &#39;vuepress-plugin-comment&#39;,
      {
        choosen: &#39;valine&#39;, 
        options: {
          el: &#39;#valine-vuepress-comment&#39;,
          appId: &#39;Your own appId&#39;,
          appKey: &#39;Your own appKey&#39;
        }
      }
    ]
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to access variables, such as <code>$frontmatter</code> and <code>window</code>, please use <strong>EJS</strong> syntax.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  plugins: [
    [
      &#39;vuepress-plugin-comment&#39;,
      {
        choosen: &#39;valine&#39;, 
        options: {
          el: &#39;#valine-vuepress-comment&#39;,
          appId: &#39;Your own appId&#39;,
          appKey: &#39;Your own appKey&#39;,
          path: &#39;&lt;%- frontmatter.commentid || frontmatter.permalink %&gt;&#39;
        }
      }
    ]
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="how-to-hide-page-comment" tabindex="-1"><a class="header-anchor" href="#how-to-hide-page-comment" aria-hidden="true">#</a> How to hide page comment</h5><p>If you want to hide comment plugin in specified page, set <code>$frontmatter.comment</code> or <code>$frontmatter.comments</code> to <code>false</code>.</p><p>For example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
comment: false 
# comments: false 
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Comment won&#39;t appear in the page of this passage.</p><h4 id="options-detail" tabindex="-1"><a class="header-anchor" href="#options-detail" aria-hidden="true">#</a> Options Detail</h4><ul><li><p><strong>choosen</strong> <code>string</code></p><p><strong>Required</strong>.</p></li><li><p><strong>options</strong> <code>object</code></p><p><strong>Required</strong>. The options of choosen comment plugin.</p></li><li><p><strong>container</strong> <code>string</code></p><p><strong>Optional, default as <code>&#39;main.page&#39;</code></strong>. The dom selector that contains choosen comment plugin.</p></li></ul>`,19);function E(V,H){const i=r("ExternalLinkIcon");return l(),o("div",null,[c,u,e("ul",null,[e("li",null,[e("a",p,[n("vuepress-plugin-mermaidjs"),s(i)]),n(" 流程图、时序图、类图、状态图 ......")]),e("li",null,[e("a",v,[n("vuepress-plugin-baidu-autopush"),s(i)]),n(" 百度推送")]),e("li",null,[e("a",m,[n("vuepress-plugin-thirdparty-search"),s(i)]),n(" 第三方搜索链接")]),e("li",null,[e("a",h,[n("vuepress-plugin-one-click-copy"),s(i)]),n(" 代码块复制按钮")]),e("li",null,[e("a",b,[n("vuepress-plugin-zooming"),s(i)]),n(" 放大图片")]),e("li",null,[n("vuepress-plugin-comment Valine方式加入评论 | "),e("a",g,[n("Valine-Admin"),s(i)]),n(" 加入邮箱通知")]),e("li",null,[e("a",f,[n("vuepress-plugin-element-ui"),s(i)]),n(" Element UI")]),e("li",null,[e("a",x,[n("站点信息模块"),s(i)])]),e("li",null,[e("a",_,[n("私密文章功能"),s(i)])]),e("li",null,[e("a",w,[n("首页大图模块"),s(i)])])]),k,e("p",null,[n("Plugin has registered correct route information in "),y,n(" object and "),I,n(" object. Their properties are the same as "),e("a",j,[n("vue-router's route object"),s(i)]),n(".")]),G])}const D=a(d,[["render",E],["__file","index.html.vue"]]);export{D as default};

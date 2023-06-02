import{_ as e,o as a,c as s,e as n}from"./app.4659d0e0.js";const i={},t=n(`<h1 id="docker-mac安装" tabindex="-1"><a class="header-anchor" href="#docker-mac安装" aria-hidden="true">#</a> Docker - Mac安装</h1><p>转载自：https://blog.csdn.net/qq_42405688/article/details/124468315</p><p>开始安装：</p><p>1、终端输入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> <span class="token parameter variable">--appdir</span><span class="token operator">=</span>/Applications <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、出现：<code>docker was successfully installed!</code> 安装成功。</p><p><img src="https://file.pandacode.cn/blog/202208081615425.png" alt="img"></p><p>3、 第一次使用，是需要本机密码确认的。</p><p><img src="https://file.pandacode.cn/blog/202208081616558.png" alt="img"></p><p>4、输入密码后，弹出以下界面。</p><p><img src="https://file.pandacode.cn/blog/202208081616103.png" alt="img"></p><p>5、安装成功后，可在终端检查docker版本，显示版本后，表示安装成功。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://file.pandacode.cn/blog/202208081617222.png" alt="img"></p><p>二、docker国内镜像配置</p><p><img src="https://file.pandacode.cn/blog/202208081617490.png" alt="img"></p><p>在红框处进行添加以下代码后，点击Apply &amp; Restart 按钮：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;builder&quot;: {
    &quot;gc&quot;: {
      &quot;enabled&quot;: true,
      &quot;defaultKeepStorage&quot;: &quot;20GB&quot;
    }
  },
  &quot;experimental&quot;: false,
  &quot;features&quot;: {
    &quot;buildkit&quot;: true
  },
  &quot;registry-mirrors&quot;:[
    &quot;http://hub-mirror.c.163.com&quot;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看是否应用镜像成功，红框内容就是上面配置的国内镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>附docker国内常用镜像：</p><p>1、中科大: https://docker.mirrors.ustc.edu.cn</p><p>2、网易: http://hub-mirror.c.163.com</p><p>3、Docker 官方中国区: https://registry.docker-cn.com</p><p>4、七牛云: https://reg-mirror.qiniu.com</p></blockquote>`,21),c=[t];function l(d,r){return a(),s("div",null,c)}const p=e(i,[["render",l],["__file","05.docker-mac-install.html.vue"]]);export{p as default};

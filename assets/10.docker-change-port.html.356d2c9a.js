import{_ as t,r as c,o as r,c as p,a as e,b as a,d as s,e as o}from"./app.4659d0e0.js";const i={},d=e("h1",{id:"docker-容器启动后修改或添加端口",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-容器启动后修改或添加端口","aria-hidden":"true"},"#"),a(" Docker - 容器启动后修改或添加端口")],-1),l=e("p",null,"转载自：https://cloud.tencent.com/developer/article/1833131",-1),u={href:"https://cloud.tencent.com/product/tke?from=10680",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"通常间接的办法是，保存镜像，再创建一个新的容器，在创建时指定新的端口映射。",-1),g=e("h2",{id:"方法一-删除原有容器-重新建新容器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#方法一-删除原有容器-重新建新容器","aria-hidden":"true"},"#"),a(" 方法一：删除原有容器，重新建新容器")],-1),v={href:"https://cloud.tencent.com/solution/database?from=10680",target:"_blank",rel:"noopener noreferrer"},k=o(`<h2 id="方法二-利用docker-commit新构镜像" tabindex="-1"><a class="header-anchor" href="#方法二-利用docker-commit新构镜像" aria-hidden="true">#</a> 方法二：利用docker commit新构镜像</h2><p>docker commit：把一个容器的文件改动和配置信息commit到一个新的镜像。这个在测试的时候会非常有用，把容器所有的文件改动和配置信息导入成一个新的docker镜像，然后用这个新的镜像重起一个容器，这对之前的容器不会有任何影响。</p><p>1、停止docker容器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker stop container01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、commit该docker容器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker commit container01 new_image<span class="token operator">:</span>tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、用前一步新生成的镜像重新起一个容器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker run <span class="token operator">--</span>name container02 <span class="token operator">-</span>p <span class="token number">80</span><span class="token operator">:</span><span class="token number">80</span> <span class="token literal-property property">new_image</span><span class="token operator">:</span>tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),h={href:"https://cloud.tencent.com/product/cdh?from=10680",target:"_blank",rel:"noopener noreferrer"},b=o(`<h2 id="方法三-修改文件端口-重启docker服务" tabindex="-1"><a class="header-anchor" href="#方法三-修改文件端口-重启docker服务" aria-hidden="true">#</a> 方法三：修改文件端口，重启docker服务</h2><ol><li>停止docker(<code>一定</code>要先停止dokcer，不然直接修改配置文件<code>不会生效</code>)</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>systemctl stop docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.修改这个容器的hostconfig.json文件中的端口（如果config.v2.json里面也记录了端口，也要修改）</p><blockquote><p>注：以下是我个人操作 <code>363ff2d977f8</code>是CONTAINER ID 此次操作想让<code>宿主机8080</code>端口映射<code>容器内的80</code>端口</p></blockquote><p><img src="https://file.pandacode.cn/blog/202204241647014.png" alt="img"></p><p>配置文件路径<code>/var/lib/docker/containers/363ff2d*</code> 先修改<code>hostconfig.json</code>；</p><blockquote><p>如果之前没有端口映射, 应该有这样的一段: “PortBindings”:{} 增加一个映射, 这样写: “PortBindings”:{“8080/tcp”:[{“HostIp”:””,“HostPort”:“60000”}]} 前一个数字是容器端口, 后一个是宿主机端口。将宿主机的60000端口映射到容器的8080端口 而修改现有端口映射更简单, 把端口号改掉就行。</p></blockquote><ul><li>修改前</li></ul><p><img src="https://file.pandacode.cn/blog/202204241647837.png" alt="img"></p><ul><li>修改后</li></ul><p><img src="https://file.pandacode.cn/blog/202204241647629.png" alt="img"></p><p>3.在修改<code>config.v2.json</code>文件；</p><ul><li>修改前</li></ul><p><img src="https://file.pandacode.cn/blog/202204241648192.png" alt="img"></p><ul><li>修改后</li></ul><p><img src="https://file.pandacode.cn/blog/202204241648205.png" alt="img"></p><p><strong>由于此次实验目的宿主机8080端口映射docker指定容器内的80端口</strong> <strong>并且config.v2.json原文件已经带有80端口我就不用做新的更改了</strong></p><p>如果添加新的其他映射端口，此文件需要进行填写容器内的映射端口，</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>举例：
<span class="token string-property property">&quot;ExposedPorts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
   <span class="token string-property property">&quot;80/tcp&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string-property property">&quot;3306/tcp&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
   <span class="token punctuation">}</span>，<span class="token string">&quot;XXXX/tcp&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
   <span class="token punctuation">}</span><span class="token punctuation">}</span>  #注：这里写的都是容器内的端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、重启 docker服务</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5、查看配置项已经修改成功</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker inspect  <span class="token constant">CONTAINER</span> <span class="token constant">ID</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://file.pandacode.cn/blog/202204241648545.png" alt="img"></p><p><img src="https://file.pandacode.cn/blog/202204241648989.png" alt="img"></p><p><img src="https://file.pandacode.cn/blog/202204241648543.png" alt="img"></p>`,27);function _(f,j){const n=c("ExternalLinkIcon");return r(),p("div",null,[d,l,e("p",null,[e("a",u,[a("docker"),s(n)]),a("容器启动后怎么修改端口映射？在docker run创建并运行容器的时候，可以通过-p指定端口映射规则。但是，也会遇到刚开始忘记设置端口映射或者设置错了需要修改的情况。当docker start运行容器后，并没有提供一个-p选项或设置，让你修改指定端口映射规则。")]),m,g,e("p",null,[a("这个解决方案最为简单，把原来的容器删掉，重新建一个。当然这次不要忘记加上端口映射。优点是简单快捷，在测试环境使用较多。缺点是如果是"),e("a",v,[a("数据库"),s(n)]),a("镜像，那重新建一个又要重新配置一次，就比较麻烦了。")]),k,e("p",null,[a("这种方式的优点是不会影响统一"),e("a",h,[a("宿主机"),s(n)]),a("上的其他容器，缺点是管理起来显得比较乱。")]),b])}const q=t(i,[["render",_],["__file","10.docker-change-port.html.vue"]]);export{q as default};

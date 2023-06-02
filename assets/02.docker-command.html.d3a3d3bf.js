import{_ as o,r as c,o as t,c as r,a as n,b as s,d as e,e as i}from"./app.4659d0e0.js";const l={},p=n("h1",{id:"docker-命令记录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-命令记录","aria-hidden":"true"},"#"),s(" Docker - 命令记录")],-1),d={href:"https://www.runoob.com/docker/docker-command-manual.html",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看docker版本。</span>
<span class="token function">docker</span> <span class="token parameter variable">-v</span>
<span class="token function">docker</span> version
<span class="token comment"># 查看docker系统信息</span>
<span class="token function">docker</span> info
<span class="token comment"># 搜索镜像</span>
<span class="token function">docker</span> search 镜像
<span class="token comment"># 获取镜像</span>
<span class="token function">docker</span> pull 镜像仓库地址
<span class="token comment"># 上传镜像</span>
<span class="token function">docker</span> push 镜像仓库地址
<span class="token comment"># 查看镜像的创建历史</span>
<span class="token function">docker</span> <span class="token function">history</span> 镜像仓库地址
<span class="token comment"># 运行容器</span>
<span class="token comment"># -name 定义一个容器的名字</span>
<span class="token comment"># -d 标识是让 docker 容器的后台运行。</span>
<span class="token comment"># -p 标识通知 docker 将容器内部使用的网络端口映射到我们使用的主机上。</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 nginx
<span class="token comment"># 查询容器内部ip地址</span>
<span class="token function">docker</span> inspect 容器ID/容器名 <span class="token operator">|</span> <span class="token function">grep</span> IPAddress
<span class="token comment"># 列出容器 -- 仅运行的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span>
<span class="token comment"># 列出容器 -- 包含停止的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
<span class="token comment"># 查看当前本地所有的镜像</span>
<span class="token function">docker</span> images
<span class="token comment"># 停止容器</span>
<span class="token function">docker</span> stop 容器ID/容器名
<span class="token comment"># 开始容器</span>
<span class="token function">docker</span> start 容器ID/容器名
<span class="token comment"># 重启容器</span>
<span class="token function">docker</span> restart 容器ID/容器名
<span class="token comment"># 杀掉一个运行中的容器</span>
<span class="token function">docker</span> <span class="token function">kill</span> <span class="token parameter variable">-s</span> KILL 容器ID/容器名
<span class="token comment"># 删除容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> 容器ID/容器名
<span class="token comment"># 删除一个或多个容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> xx,xx2
<span class="token comment"># 删除镜像【顺序：停止镜像里的容器，再删除容器，最后再删除镜像】</span>
<span class="token function">docker</span> rmi 镜像id/镜像名
<span class="token comment"># 列出所有的容器 ID</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span>
<span class="token comment"># 停止所有的容器</span>
<span class="token function">docker</span> stop <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>
<span class="token comment"># 删除所有的容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>
<span class="token comment"># 删除所有的镜像</span>
<span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-q</span><span class="token variable">)</span></span>
<span class="token comment"># 停止并删除指定容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> 容器ID/容器名 <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token punctuation">\\</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-i</span> <span class="token function">docker</span> stop <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-i</span> <span class="token function">docker</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment"># 删除镜像</span>
<span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;镜像id/镜像名&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span> <span class="token punctuation">\\</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-I</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token function">docker</span> rmi <span class="token parameter variable">--force</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment"># ex: 删除镜像 \`nginx:latest\`</span>
<span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;nginx&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;latest&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span> <span class="token punctuation">\\</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-I</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token function">docker</span> rmi <span class="token parameter variable">--force</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment"># 删除所有停止的容器</span>
<span class="token function">docker</span> container prune
<span class="token comment"># 删除所有部使用的镜像</span>
<span class="token function">docker</span> image prune <span class="token parameter variable">--force</span> <span class="token parameter variable">--all</span>
<span class="token function">docker</span> image prune <span class="token parameter variable">--f</span> <span class="token parameter variable">--a</span>
<span class="token comment"># 限制容器内存 -m</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token parameter variable">-m</span> 100m nginx
<span class="token comment"># 查看容器运行内存信息</span>
<span class="token function">docker</span> stats nginx
<span class="token comment"># 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID/容器名 /bin/bash
<span class="token comment"># 以交互模式启动一个容器，在容器内执行/bin/bash命令</span>
<span class="token function">docker</span> run <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> 容器ID/容器名 /bin/bash
<span class="token comment"># 查看容器日志 -t: 显示时间戳</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> <span class="token parameter variable">-t</span> 容器ID/容器名
<span class="token function">docker</span> logs <span class="token parameter variable">-fn10</span> <span class="token parameter variable">-t</span> 容器ID/容器名
<span class="token comment"># 构建镜像</span>
<span class="token comment"># 用法：docker build -t 镜像名称 .</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> docker_demo <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-docker-启动jar包" tabindex="-1"><a class="header-anchor" href="#_2-docker-启动jar包" aria-hidden="true">#</a> 2. docker 启动jar包</h2><h3 id="_2-1-编写dockerfile文件" tabindex="-1"><a class="header-anchor" href="#_2-1-编写dockerfile文件" aria-hidden="true">#</a> 2.1. 编写dockerFile文件</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 引用哪个镜像，没有镜像则pull</span>
<span class="token instruction"><span class="token keyword">FROM</span> centos:7</span>
<span class="token comment"># 为Dockerfile中所有RUN、CMD、ENTRYPOINT、COPY和ADD指令设定工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /usr</span>
<span class="token comment"># 执行命令(这里创建了一个目录)</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir /usr/local/java</span>
<span class="token comment"># 和copy一样，复制文件到指定目录，但是copy不能解压，add自动解压</span>
<span class="token instruction"><span class="token keyword">ADD</span> jdk-8u111-linux-x64.tar.gz /usr/local/java</span>
<span class="token comment"># 重命名(不知道文件名可以现在宿主机解压后看一下)</span>
<span class="token instruction"><span class="token keyword">RUN</span> ln -s /usr/local/java/jdk1.8.0_111 /usr/local/java/jdk </span>
<span class="token comment"># 设置环境变量 </span>
<span class="token instruction"><span class="token keyword">ENV</span> JAVA_HOME /usr/local/java/jdk </span>
<span class="token instruction"><span class="token keyword">ENV</span> JRE_HOME <span class="token variable">\${JAVA_HOME}</span>/jre </span>
<span class="token instruction"><span class="token keyword">ENV</span> CLASSPATH .:<span class="token variable">\${JAVA_HOME}</span>/lib:<span class="token variable">\${JRE_HOME}</span>/lib </span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH <span class="token variable">\${JAVA_HOME}</span>/bin:<span class="token variable">$PATH</span> </span>

<span class="token comment"># 创建一个目录</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir /demo</span>
<span class="token comment"># 将jar包copy到指定目录</span>
<span class="token instruction"><span class="token keyword">ADD</span> job.jar /demo/app.jar</span>
<span class="token comment"># 启动命令</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;java&quot;</span>,<span class="token string">&quot;-Djava.security.egd=file:/dev/./urandom&quot;</span>,<span class="token string">&quot;-jar&quot;</span>,<span class="token string">&quot;-Xmx512m&quot;</span>,<span class="token string">&quot;-Xms512m&quot;</span>,<span class="token string">&quot;/demo/app.jar&quot;</span>]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-下载需要的外部包" tabindex="-1"><a class="header-anchor" href="#_2-2-下载需要的外部包" aria-hidden="true">#</a> 2.2. 下载需要的外部包</h3><p>​ 这个场景我只用到了jdk。</p><h3 id="_2-3-执行dockerfile文件-构建镜像" tabindex="-1"><a class="header-anchor" href="#_2-3-执行dockerfile文件-构建镜像" aria-hidden="true">#</a> 2.3. 执行dockerFile文件，构建镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> my/demo <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意最后的 .</strong> 表示 Dockerfile 文件在当前目录下</p><p>my/demo 构建之后镜像名称</p><h3 id="_2-4-运行容器" tabindex="-1"><a class="header-anchor" href="#_2-4-运行容器" aria-hidden="true">#</a> 2.4. 运行容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> demo <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 my/demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="关于-docker-镜像的更多信息" tabindex="-1"><a class="header-anchor" href="#关于-docker-镜像的更多信息" aria-hidden="true">#</a> <strong>关于 Docker</strong> 镜像<strong>的更多信息：</strong></h2>`,13),m={href:"https://www.freecodecamp.org/news/docker-image-guide-how-to-remove-and-delete-docker-images-stop-containers-and-remove-all-volumes/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.freecodecamp.org/news/docker-image-guide-how-to-remove-and-delete-docker-images-stop-containers-and-remove-all-volumes/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.freecodecamp.org/news/where-are-docker-images-stored-docker-container-paths-explained/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.freecodecamp.org/news/where-are-docker-images-stored-docker-container-paths-explained/",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"关于-docker-容器的更多信息",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#关于-docker-容器的更多信息","aria-hidden":"true"},"#"),s(),n("strong",null,"关于 Docker 容器的更多信息：")],-1),h={href:"https://www.freecodecamp.org/news/automate-docker-container-deployment-via-maven-53a855e26d3e/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.freecodecamp.org/news/how-to-find-and-fix-docker-container-vulnerabilities-in-2020/",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"关于-docker-的更多信息",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#关于-docker-的更多信息","aria-hidden":"true"},"#"),s(),n("strong",null,"关于 Docker 的更多信息：")],-1),w={href:"https://www.freecodecamp.org/news/a-beginners-guide-to-docker-how-to-create-your-first-docker-application-cc03de9b639f/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.freecodecamp.org/news/docker-devops-course/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://www.freecodecamp.org/news/docker-101-creation-to-deployment/",target:"_blank",rel:"noopener noreferrer"},y=n("h2",{id:"参考文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考文档","aria-hidden":"true"},"#"),s(" 参考文档")],-1),j={href:"https://chinese.freecodecamp.org/news/how-to-remove-images-in-docker/",target:"_blank",rel:"noopener noreferrer"};function I(q,E){const a=c("ExternalLinkIcon");return t(),r("div",null,[p,n("blockquote",null,[n("p",null,[n("a",d,[s("docker 命令"),e(a)])])]),k,n("ul",null,[n("li",null,[n("a",m,[s("Docker "),e(a)]),s("镜像"),n("a",u,[s("指南"),e(a)])]),n("li",null,[n("a",v,[s("Docker "),e(a)]),s("镜像"),n("a",b,[s("存储在哪里"),e(a)])])]),f,n("ul",null,[n("li",null,[n("a",h,[s("如何自动化部署 Docker 容器"),e(a)])]),n("li",null,[n("a",g,[s("如何修复 Docker 容器"),e(a)])])]),_,n("ul",null,[n("li",null,[n("a",w,[s("Docker 入门指南"),e(a)])]),n("li",null,[n("a",x,[s("Docker DevOps 课程（视频）"),e(a)])]),n("li",null,[n("a",D,[s("Docker 101：从创建到部署"),e(a)])])]),y,n("ul",null,[n("li",null,[n("a",j,[s("如何删除 Docker 镜像和容器"),e(a)])])])])}const N=o(l,[["render",I],["__file","02.docker-command.html.vue"]]);export{N as default};

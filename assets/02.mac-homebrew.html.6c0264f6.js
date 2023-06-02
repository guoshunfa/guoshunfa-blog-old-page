import{_ as s,r as o,o as n,c as l,a as e,b as r,d as a,e as d}from"./app.4659d0e0.js";const i={},c=e("h1",{id:"mac-homebrew使用说明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mac-homebrew使用说明","aria-hidden":"true"},"#"),r(" Mac - Homebrew使用说明")],-1),b={href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"brew文件地址",-1),m=e("ol",null,[e("li",null,[e("p",null,"配置文件在/usr/local/etc中")]),e("li",null,[e("p",null,"安装文件在/usr/local/Cellar中")]),e("li",null,[e("p",null,"二进制可执行程序的软连接在/usr/local/bin中")])],-1),u=d(`<h2 id="_1-homebrew-介绍" tabindex="-1"><a class="header-anchor" href="#_1-homebrew-介绍" aria-hidden="true">#</a> 1.Homebrew 介绍</h2><p>Homebrew是一款自由及开放源代码的软件包管理系统，用以简化Mac OS X系统上的软件安装过程，最初由Max Howell写成。因其可扩展性得到了一致好评，并在Ruby on Rails社区广为人知。</p><p>Homebrew使用GitHub，通过用户的贡献扩大对软件包的支持。2012年，Homebrew是GitHub上拥有最多新贡献者的项目。2013年，Homebrew同时成为GitHub上最多贡献者及最多已关闭问题的项目。</p><p><strong>Homebrew 实现</strong></p><p>Homebrew以Ruby语言写成，针对于Mac OS X操作系统自带Ruby的版本。</p><p>默认安装在/usr/local，由一个核心git版本库构成，以使用户能更新Homebrew。</p><p>包管理器使用一种称为“公式”（formula）的DSL脚本来管理依赖、下载源代码及配置和编译软件，从源代码中构建软件。</p><p>称为“瓶”（bottle）的二进制包是用默认选项预编译好的公式。</p><p><strong>Homebrew 历史</strong></p><ul><li>Homebrew由Max Howell于2009年编写。</li><li>2013年3月，Homebrew成功完成了Kickstarter活动，为项目筹集维护资金，并筹集到了14859英镑。</li><li>2013年12月13日，Homebrew存储库从Howell的GitHub帐户迁移到自己的项目帐户。</li><li>2015年2月，由于SourceForge的停机导致二进制文件无法使用，Homebrew将其托管移至bintray。</li><li>截至2016年7月，Homebrew由12名开发人员组成的团队维护。</li></ul><p><strong>Homebrew 作者逸事</strong></p><p>Homebrew的作者Max Howell曾应聘过Google的职位，但在技术面试没有通过，随后他在Twitter上发帖称“Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f**k off”。（Google：我们90%的工程师都在用你的软件（Homebrew），但是你不会在白板上翻转二叉树，所以滚出去），在网上引发了关于招聘程序员面试时白板编程意义的讨论。</p><h2 id="_2-homebrew-安装" tabindex="-1"><a class="header-anchor" href="#_2-homebrew-安装" aria-hidden="true">#</a> 2. Homebrew 安装</h2><p>只需执行如下命令即可：</p><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>ruby <span class="token operator">-</span>e <span class="token string-literal"><span class="token string">&quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>首先会安装如下脚本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">==</span><span class="token operator">&gt;</span> This script will install:
/usr/local/bin/brew                        <span class="token comment">#brew命令</span>
/usr/local/share/doc/homebrew              <span class="token comment">#homewbrew文档目录</span>
/usr/local/share/man/man1/brew.1           <span class="token comment">#brew的可以操作的指令</span>
/usr/local/share/zsh/site-functions/_brew  <span class="token comment">#可用于zsh的brew相关函数</span>
/usr/local/etc/bash_completion.d/brew      <span class="token comment">#brew的自动补全配置</span>
/usr/local/Homebrew                        <span class="token comment">#Homebrew的安装主目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其次它会创建如下目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#创建下载程序的目录，如果是非root账号下安装的homebrew，该目录会在最后变成~/Library/Caches/Homebrew</span>
<span class="token operator">==</span><span class="token operator">&gt;</span> /usr/bin/sudo /bin/mkdir <span class="token parameter variable">-p</span> /Library/Caches/Homebrew   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-homebrew-命令描述" tabindex="-1"><a class="header-anchor" href="#_3-homebrew-命令描述" aria-hidden="true">#</a> 3.Homebrew 命令描述</h2><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td><code>brew search [TEXT| /REGEX/]</code></td><td>搜索 brew 支持的软件（支持模糊搜索）</td></tr><tr><td><code>brew info [FORMULA...]</code></td><td>显示软件的各种信息（包括版本、源码地址、依赖等等）。</td></tr><tr><td><code>brew install [FORMULA...]</code></td><td>安装指定的软件。</td></tr><tr><td><code>brew update</code></td><td>brew 自身进行更新。</td></tr><tr><td><code>brew upgrade [FORMULA...]</code></td><td>更新安装过的软件。<br> 如果不加软件名，就更新所有可以更新的软件。</td></tr><tr><td><code>brew list [FORMULA...]</code></td><td>查看软件安装的文件列表。<br>如果不加软件名，就列出所有已安装的软件列表。</td></tr><tr><td><code>brew uninstall [FORMULA...]</code></td><td>卸载指定的软件。</td></tr><tr><td>\`brew services run [FORMULA</td><td>--all]\`</td></tr><tr><td>\`brew services start [FORMULA</td><td>--all]\`</td></tr><tr><td>\`brew services stop [FORMULA</td><td>--all]\`</td></tr><tr><td>\`brew services restart [FORMULA</td><td>--all]\`</td></tr><tr><td><code>brew services cleanup</code></td><td>删除所有未使用的服务</td></tr></tbody></table><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,22),h={href:"https://www.knowledgedict.com/tutorial/homebrew-intro.html",target:"_blank",rel:"noopener noreferrer"};function w(v,_){const t=o("ExternalLinkIcon");return n(),l("div",null,[c,e("blockquote",null,[e("p",null,[e("a",b,[r("homebrew 官网"),a(t)])]),p,m]),u,e("ul",null,[e("li",null,[e("a",h,[r("homebrew 简介"),a(t)])])])])}const g=s(i,[["render",w],["__file","02.mac-homebrew.html.vue"]]);export{g as default};
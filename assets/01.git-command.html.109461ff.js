import{_ as s,r as d,o as t,c as l,a as n,b as e,d as i,e as r}from"./app.4659d0e0.js";const c={},o=r(`<h1 id="git-命令记录" tabindex="-1"><a class="header-anchor" href="#git-命令记录" aria-hidden="true">#</a> Git - 命令记录</h1><blockquote><p>git clone http://userName:password@链接</p></blockquote><h2 id="_1-git更换远程仓库地址" tabindex="-1"><a class="header-anchor" href="#_1-git更换远程仓库地址" aria-hidden="true">#</a> 1. Git更换远程仓库地址</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看远端地址</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>
<span class="token comment">#查看远端仓库名</span>
<span class="token function">git</span> remote 

<span class="token function">git</span> remote set-url origin https://gitee.com/xx/xx.git <span class="token punctuation">(</span>新地址<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-git提交-拉取代码" tabindex="-1"><a class="header-anchor" href="#_2-git提交-拉取代码" aria-hidden="true">#</a> 2. Git提交/拉取代码</h2><h3 id="_2-1-拉取代码" tabindex="-1"><a class="header-anchor" href="#_2-1-拉取代码" aria-hidden="true">#</a> 2.1. 拉取代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉取当前分支的代码</span>
<span class="token function">git</span> pull
<span class="token comment"># 拉取dev分支的代码（origin后衔接指定分支）</span>
<span class="token function">git</span> pull origin dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-查看代码调整情况" tabindex="-1"><a class="header-anchor" href="#_2-2-查看代码调整情况" aria-hidden="true">#</a> 2.2. 查看代码调整情况</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>具体状态如下：</p><ul><li><p>Untracked: 未跟踪,一般为新增文件，此文件在文件夹中, 但并没有加入到git库, 不参与版本控制. 通过git add 状态变为Staged.</p></li><li><p>Modified: 文件已修改, 仅仅是修改, 并没有进行其他的操作.</p></li><li><p>deleted： 文件已删除，本地删除，服务器上还没有删除.</p></li><li><p>renamed：</p></li></ul><h3 id="_2-3-将状态改变的代码提交至缓存" tabindex="-1"><a class="header-anchor" href="#_2-3-将状态改变的代码提交至缓存" aria-hidden="true">#</a> 2.3. 将状态改变的代码提交至缓存</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将所有的修改的文件提交到缓存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token comment"># 将指定修改的文件提交到缓存区</span>
<span class="token function">git</span> <span class="token function">add</span> 文件
<span class="token comment"># 将目录下所有修改过的被跟踪代码提交到缓存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-u</span> 目录
<span class="token comment"># 将目录下所有修改过的未被跟踪的代码提交到缓存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span> 目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-将代码提交到本地仓库中" tabindex="-1"><a class="header-anchor" href="#_2-4-将代码提交到本地仓库中" aria-hidden="true">#</a> 2.4. 将代码提交到本地仓库中</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -m 标注提交信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;修改项目代码&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-将缓存区代码推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#_2-5-将缓存区代码推送到远程仓库" aria-hidden="true">#</a> 2.5. 将缓存区代码推送到远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 推送到当前分支</span>
<span class="token function">git</span> push
<span class="token comment"># 推送到dev分支（origin后衔接指定分支）</span>
<span class="token function">git</span> push origin dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-git切换分支" tabindex="-1"><a class="header-anchor" href="#_3-git切换分支" aria-hidden="true">#</a> 3. Git切换分支</h2><h3 id="_3-1-查看远程分支" tabindex="-1"><a class="header-anchor" href="#_3-1-查看远程分支" aria-hidden="true">#</a> 3.1. 查看远程分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例子：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~/panda$ <span class="token function">git</span> branch <span class="token parameter variable">-a</span>
* master
  remotes/origin/HEAD -<span class="token operator">&gt;</span> origin/master
  remotes/origin/master
  remotes/origin/nnvm
  remotes/origin/piiswrong-patch-1
  remotes/origin/v0.9rc1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-查看本地分支" tabindex="-1"><a class="header-anchor" href="#_3-2-查看本地分支" aria-hidden="true">#</a> 3.2. 查看本地分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~/panda$ <span class="token function">git</span> branch
* master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-切换分支" tabindex="-1"><a class="header-anchor" href="#_3-3-切换分支" aria-hidden="true">#</a> 3.3. 切换分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> dev origin/dev
Branch dev <span class="token builtin class-name">set</span> up to track remote branch v0.9rc1 from origin.
Switched to a new branch <span class="token string">&#39;dev&#39;</span>

＃已经切换到dev分支了
$ <span class="token function">git</span> branch
  master
* dev

＃切换回master分支
$ <span class="token function">git</span> checkout master
Switched to branch <span class="token string">&#39;master&#39;</span>
Your branch is up-to-date with <span class="token string">&#39;origin/master&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令行指引" tabindex="-1"><a class="header-anchor" href="#命令行指引" aria-hidden="true">#</a> 命令行指引</h3><p>您还可以按照以下说明从计算机中上传现有文件。</p><h5 id="git-全局设置" tabindex="-1"><a class="header-anchor" href="#git-全局设置" aria-hidden="true">#</a> Git 全局设置</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.name &quot;panda&quot;
git config --global user.email &quot;pandacode_cn@163.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="创建一个新仓库" tabindex="-1"><a class="header-anchor" href="#创建一个新仓库" aria-hidden="true">#</a> 创建一个新仓库</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone http://8.141.66.12:8099/pandacode/panda-doc.git
cd panda-doc
git switch -c main
touch README.md
git add README.md
git commit -m &quot;add README&quot;
git push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="推送现有文件夹" tabindex="-1"><a class="header-anchor" href="#推送现有文件夹" aria-hidden="true">#</a> 推送现有文件夹</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd existing_folder
git init --initial-branch=main
git remote add origin http://8.141.66.12:8099/pandacode/panda-doc.git
git add .
git commit -m &quot;Initial commit&quot;
git push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="推送现有的-git-仓库" tabindex="-1"><a class="header-anchor" href="#推送现有的-git-仓库" aria-hidden="true">#</a> 推送现有的 Git 仓库</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd existing_repo
git remote rename origin old-origin
git remote add origin http://8.141.66.12:8099/pandacode/panda-doc.git
git push -u origin --all
git push -u origin --tags
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,37),u={href:"https://blog.csdn.net/u014540717/article/details/54314126",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.jianshu.com/p/8189ed4edf98",target:"_blank",rel:"noopener noreferrer"};function m(p,h){const a=d("ExternalLinkIcon");return t(),l("div",null,[o,n("ul",null,[n("li",null,[n("a",u,[e("git命令－切换分支"),i(a)])]),n("li",null,[n("a",v,[e("Git | 利用 git 命令行提交代码步骤"),i(a)])])])])}const g=s(c,[["render",m],["__file","01.git-command.html.vue"]]);export{g as default};

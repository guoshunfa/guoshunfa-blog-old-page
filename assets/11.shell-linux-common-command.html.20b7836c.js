import{_ as l,r,o as n,c as a,a as t,b as d,d as i,e as o}from"./app.4659d0e0.js";const s={},h=t("h1",{id:"shell-linux-常用命令",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#shell-linux-常用命令","aria-hidden":"true"},"#"),d(" Shell - Linux 常用命令")],-1),c=t("p",null,"这里只记录平时用到的命令。",-1),f={href:"http://linux.51yip.com/",target:"_blank",rel:"noopener noreferrer"},x=o('<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><table><thead><tr><th style="text-align:left;">命令</th><th>命令直译</th><th>描述</th><th>实例</th></tr></thead><tbody><tr><td style="text-align:left;">grep</td><td></td><td>grep 在给定的文件中搜寻指定的字符串。grep -i “” 在搜寻时会忽略字符串的大小写，而grep -r “” 则会在当前工作目录的文件中递归搜寻指定的字符串。</td><td></td></tr><tr><td style="text-align:left;">find</td><td></td><td>这个命令会在给定位置搜寻与条件匹配的文件。你可以使用find -name 的-name选项来进行区分大小写的搜寻，find -iname 来进行不区分大小写的搜寻。</td><td><code>find -iname work.html</code></td></tr><tr><td style="text-align:left;">help</td><td></td><td>help会在终端列出所有可用的命令,可以使用任何命令的-h或-help选项来查看该命令的具体用法。图就省略啦，会有详细列表显示出来的。</td><td></td></tr><tr><td style="text-align:left;">whatis</td><td>What is this command</td><td>whatis 会用单行来描述给定的命令，就是解释当前命令。</td><td></td></tr><tr><td style="text-align:left;">exit</td><td></td><td>exit用于结束当前的终端会话。</td><td></td></tr><tr><td style="text-align:left;">ping</td><td></td><td>ping 通过发送数据包ping远程主机(服务器)，常用与检测网络连接和服务器状态。</td><td></td></tr><tr><td style="text-align:left;">who</td><td>Who Is logged in</td><td>who能列出当前登录的用户名。</td><td></td></tr><tr><td style="text-align:left;">su</td><td>Switch User</td><td>su 用于切换不同的用户。即使没有使用密码，超级用户也能切换到其它用户。</td><td></td></tr><tr><td style="text-align:left;">uname</td><td></td><td>uname会显示出关于系统的重要信息，如内核名称、主机名、内核版本、处理机类型等等，使用uname -a可以查看所有信息。</td><td></td></tr><tr><td style="text-align:left;">df</td><td>Disk space Free</td><td>df查看文件系统中磁盘的使用情况–硬盘已用和可用的存储空间以及其它存储设备。你可以使用df -h将结果以人类可读的方式显示。</td><td></td></tr><tr><td style="text-align:left;"></td><td></td><td></td><td></td></tr><tr><td style="text-align:left;"></td><td></td><td></td><td></td></tr><tr><td style="text-align:left;"></td><td></td><td></td><td></td></tr><tr><td style="text-align:left;"></td><td></td><td></td><td></td></tr></tbody></table><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td></td><td></td></tr><tr><td><code>lsof -i:端口号</code></td><td>查看端口号使用情况</td></tr><tr><td>`netstat -nltp</td><td>grep 端口号`</td></tr><tr><td>`ps -ef</td><td>grep mongo`</td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr></tbody></table>',3);function g(m,p){const e=r("ExternalLinkIcon");return n(),a("div",null,[h,t("blockquote",null,[c,t("p",null,[d("一些复杂的操作可以去"),t("a",f,[d("线上Linux命令查询平台"),i(e)]),d("去查询。")])]),x])}const u=l(s,[["render",g],["__file","11.shell-linux-common-command.html.vue"]]);export{u as default};

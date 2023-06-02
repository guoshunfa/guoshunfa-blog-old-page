import{_ as e,o as i,c as s,e as a}from"./app.4659d0e0.js";const n={},l=a(`<h1 id="gitlab-默认密码查看和重制密码" tabindex="-1"><a class="header-anchor" href="#gitlab-默认密码查看和重制密码" aria-hidden="true">#</a> Gitlab - 默认密码查看和重制密码</h1><p>转发自：https://blog.csdn.net/timonium/article/details/119451755</p><h2 id="_1-gitlab默认密码" tabindex="-1"><a class="header-anchor" href="#_1-gitlab默认密码" aria-hidden="true">#</a> 1. GitLab默认密码</h2><ul><li>初次安装Gitlab时，密码放在了一个临时文件中了</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/gitlab/initial_root_password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>这个文件将在首次执行reconfigure后24小时自动删除</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Notes:
Default admin account has been configured with following details:
Username: root
Password: You didn&#39;t opt-in to print initial root password to STDOUT.
Password stored to /etc/gitlab/initial_root_password. This file will be cleaned up in first reconfigure run after 24 hours.

NOTE: Because these credentials might be present in your log files in plain text, it is highly recommended to reset the password following https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

gitlab Reconfigured!
[root@c7-192 src]# cat /etc/gitlab/initial_root_password

# WARNING: This value is valid only in the following conditions

#          1. If provided manually (either via \`GITLAB_ROOT_PASSWORD\` environment variable or via \`gitlab_rails[&#39;initial_root_password&#39;]\` setting in \`gitlab.rb\`, it was provided before database was seeded for the first time (usually, the first reconfigure run).

#          2. Password hasn&#39;t been changed manually, either via UI or via command line.

#

#          If the password shown here doesn&#39;t work, you must reset the admin password following https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: thAXLJhVoo6V9sRvRH5HrLrD5rg88C7gccEGZDT4Lq0=

# NOTE: This file will be automatically deleted in the first reconfigure run after 24 hours.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-登录并修改密码" tabindex="-1"><a class="header-anchor" href="#_2-登录并修改密码" aria-hidden="true">#</a> 2. 登录并修改密码</h2><ul><li>拿到这个密码后需要尽快登录web界面进行密码修改</li></ul><p><img src="https://file.pandacode.cn/blog/202204241642571.png" alt="image-20220424164214291"></p><ul><li>进去修改密码</li></ul><p><img src="https://file.pandacode.cn/blog/202204241642877.png" alt="image-20220424164250033"></p><ul><li>重置密码</li></ul><p><img src="https://file.pandacode.cn/blog/202204241643193.png" alt="image-20220424164311299"></p>`,14),r=[l];function t(d,o){return i(),s("div",null,r)}const u=e(n,[["render",t],["__file","02.gitlab-password.html.vue"]]);export{u as default};

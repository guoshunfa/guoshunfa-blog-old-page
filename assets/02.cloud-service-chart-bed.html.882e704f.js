import{_ as o,r as i,o as r,c as a,a as e,d as t,b as n,e as s}from"./app.4659d0e0.js";const c={},d=e("h1",{id:"云服务-搭建图床",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#云服务-搭建图床","aria-hidden":"true"},"#"),n(" 云服务 - 搭建图床")],-1),u={href:"https://xugaoyi.com/pages/a5f73af5185fdf0a/#%E5%89%8D%E8%A8%80",target:"_blank",rel:"noopener noreferrer"},_=e("strong",null,"Q：为什么要使用图床呢？什么是图床？",-1),h=e("p",null,[n("A：写博客文章时，图片的上传和存放是一个问题，有的朋友可能会把图片放到和博客同一个仓库当中，使用相对路径来引用，这样后期维护起来会比较麻烦。还有的朋友会在不同的平台发布同一篇文章，这样一来每个平台都要上传图片，为了解决这些问题，比较推荐的做法是把图片统一上传到一个在线的第三方静态资源库中，我们把这个资源库称为图床，其返回一个图片的URL，使用"),e("code",null,"markdown+图片url"),n("的方式写作文章，一次编写，到处使用~")],-1),p=e("p",null,[e("strong",null,"Q：搭建图床的方式")],-1),m=e("code",null,"jsDelivr",-1),v=e("code",null,"jsDelivr",-1),g={href:"http://www.jsdelivr.com/",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"B：Gitee+PicX。",-1),f=e("p",null,"B：OSS存储，特点是稳定、容量大，缺点就是存储付费+流量付费（大），可以使用ECS内网访问躲避流量费用。",-1),k=e("p",null,"Q：如何统一管理",-1),x=e("p",null,"A：使用域名进行解析。",-1),S=e("h2",{id:"方案一-github-jsdelivr-picgo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#方案一-github-jsdelivr-picgo","aria-hidden":"true"},"#"),n(" 方案一：GitHub + jsDelivr + PicGo")],-1),C={href:"https://xugaoyi.com/pages/a5f73af5185fdf0a/",target:"_blank",rel:"noopener noreferrer"},E=e("li",null,[n("新建GitHub仓库，注意仓库要设置成"),e("strong",null,"公开"),n("。")],-1),w={href:"https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/Molunerfinn/picgo/releases",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"图床设置",-1),j=e("code",null,"GitHub图床",-1),N=s("<ul><li>仓库名：前面新建的仓库，格式：<code>&lt;用户名&gt;/&lt;仓库名&gt;</code></li><li>分支名：填写主分支<code>master</code>即可</li><li>Token：前面生成的token密钥</li><li>存储路径：按你自己的需求填写</li><li>自定义域名：图片上传后，PicGo 会按照 <code>自定义域名+上传的图片名</code> 的方式生成访问链接，此处我们填写<code>jsDelivr</code>的CDN加速地址，格式：<code>https://cdn.jsdelivr.net/gh/&lt;用户名&gt;/&lt;仓库名&gt;</code></li></ul>",1),D=e("p",null,[e("img",{src:"https://file.pandacode.cn//blog/202109121328260.png",alt:"image-20210912132734188"})],-1),G=e("h2",{id:"方案二-oss-ecs-picgo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#方案二-oss-ecs-picgo","aria-hidden":"true"},"#"),n(" 方案二：OSS + ECS +PicGo")],-1),O={href:"https://www.aliyun.com/price/product?spm=a2c4g.11186623.0.0.6eb32845s433Ab#/oss/detail/ossbag",target:"_blank",rel:"noopener noreferrer"},A=s(`<p><img src="https://file.pandacode.cn//blog/202109121325802.png" alt="image-20210912132509318"></p><ol start="2"><li>ECS云服务器使用nginx做转发。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
listen 80 default_server;
listen [::]:80 default_server;
server_name 47.**.**.43; 
root /usr/share/nginx/html;


# Load configuration files for the default server block.
include /etc/nginx/default.d/*.conf;


location / {
proxy_pass https://bucketname.oss-cn-beijing-internal.aliyuncs.com; 
proxy_set_header Host $host; 
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),H=e("li",null,[e("p",null,[e("strong",null,"server_name"),n("：对外提供反向代理服务的IP，即ECS实例的外网地址。")])],-1),P=e("p",null,"proxy_pass",-1),L=e("p",null,"：填写跳转的域名。",-1),V={href:"https://help.aliyun.com/document_detail/31834.htm#concept-hh2-4tv-tdb",target:"_blank",rel:"noopener noreferrer"},I=e("li",null,"当ECS实例与Bucket不在同一地域时，填写目标Bucket的外网访问域名。",-1),Q={href:"https://help.aliyun.com/document_detail/31902.htm#concept-ozw-m2r-5fb",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,"proxy_set_header Host $host",-1),M=e("p",null,"：添加此项时，Nginx会在向OSS请求的时候，将host替换为ECS的访问地址。遇到以下情况时，您需要添加此项。",-1),T=e("li",null,"遇到签名错误问题。",-1),$=e("strong",null,"proxy_pass",-1),q={href:"https://help.aliyun.com/document_detail/31902.htm#concept-ozw-m2r-5fb",target:"_blank",rel:"noopener noreferrer"},R=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-t</span> <span class="token comment"># 验证配置文件是否正确</span>
<span class="token function">service</span> nginx restart <span class="token comment"># 重启nginx服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function U(X,F){const l=i("ExternalLinkIcon");return r(),a("div",null,[d,e("p",null,[e("a",u,[_,t(l)])]),h,p,e("p",null,[n("A：推荐使用GitHub作为图床，特点是免费、稳定，有一个小缺点是国内访问速度慢，不过没关系，可以使用"),m,n("免费CDN加速。"),v,n("是国外的一家优秀的公共 CDN 服务提供商，该平台是首个「打通中国大陆与海外的免费CDN服务」，无须担心中国防火墙问题而影响使用。官网："),e("a",g,[n("http://www.jsdelivr.com/(opens new window)"),t(l)]),n(",")]),b,f,k,x,S,e("blockquote",null,[e("p",null,[e("a",C,[n("Evan's blog"),t(l)])])]),e("ol",null,[E,e("li",null,[n("参照 "),e("a",w,[n("官方文档 "),t(l)]),n("生成一个token密钥。")]),e("li",null,[n("在 "),e("a",B,[n("这里 "),t(l)]),n("下载PicGo，安装完成后打开，"),y,n(" 选 "),j,n("，并填写相应的信息 "),N])]),D,G,e("ol",null,[e("li",null,[n("手里有一个准备好的OSS，一般购买的都是只是存储，而外网访问会产生流量，"),e("a",O,[n("流量费用"),t(l)]),n("见下图。内网访问免费，可以使用ECS云服务器做代理转发。")])]),A,e("ul",null,[H,e("li",null,[P,L,e("ul",null,[e("li",null,[n("当ECS实例与Bucket在同一地域时，填写目标Bucket的内网访问域名。访问域名介绍请参见"),e("a",V,[n("OSS访问域名使用规则"),t(l)]),n("。")]),I,e("li",null,[n("因OSS的安全设置，当使用默认域名通过浏览器访问OSS中的图片或网页文件时，会直接下载。所以，若您的用户需通过浏览器预览Bucket中的图片或网页文件，需为Bucket绑定自定义域名，并在此项中添加已绑定的域名。绑定自定义域名操作请参见"),e("a",Q,[n("绑定自定义域名"),t(l)]),n("。")])])]),e("li",null,[z,M,e("ul",null,[T,e("li",null,[n("如果您的域名已解析到ECS实例的外网上，且您的用户需要通过浏览器预览Bucket中的图片或网页文件。您可以将您的域名绑定到ECS实例代理的Bucket上，不配置CNAME。这种情况下，"),$,n("项可直接配置Bucket的内网或外网访问地址。绑定自定义域名操作请参见"),e("a",q,[n("绑定自定义域名"),t(l)]),n("。")])])])]),R])}const K=o(c,[["render",U],["__file","02.cloud-service-chart-bed.html.vue"]]);export{K as default};
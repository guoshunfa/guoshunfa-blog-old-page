import{_ as i,r as d,o as l,c as t,a as e,b as n,d as a,e as v}from"./app.4659d0e0.js";const r={},o=e("h1",{id:"mongdb-存储过程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mongdb-存储过程","aria-hidden":"true"},"#"),n(" MongDB - 存储过程")],-1),c={href:"http://www.cnblogs.com/greenteaone/",target:"_blank",rel:"noopener noreferrer"},u=v(`<p>MongoDB支持存储过程的使用，它的存储过程是用javascript实现的，被存在于system.js表中，可以接收和输出参数，返回执行存储过程的状态值，也可以嵌套调用。</p><p><strong>所以我理解的MongoDB的存储过程就是</strong>：</p><p>把javascript变量，存储到MongoDB的数据库的特殊集合:system.js表中,然后这些变量可以在何MongoDB的javascript上下文中调用,包括&quot;$where&quot;子句,db.eval调用,MapReduce作业。</p><h2 id="_1-添加存储过程" tabindex="-1"><a class="header-anchor" href="#_1-添加存储过程" aria-hidden="true">#</a> 1. 添加存储过程</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  db.system.js.save({_id:存储过程名称,value:存储过程体})  //添加一个新的存储过程或者更新一个已经存在的存储过程

  或者
  db.system.js.insert({_id:存储过程名称,value:存储过程体}) //添加一个新的存储过程
 其中：_id和value属性是必须的，如果没有_id这个属性，会导致无法调用。也可以增加其他的属性来描述这个存储过程。比如：
  db.system.js.insert({_id:存储过程名称,value:存储过程体，discrption：&quot;这是存储过程&quot;})
2.修改存储过程
  db.system.js.update({_id:存储过程名称},{value:存储过程体})
3.执行存储过程
  db.eval(&#39;存储过程名称(参数)&#39;)
4.查找存储过程   
  db.system.js.find();

以上命令都可以在mongodb shell命令窗口下执行，也可以写在javascript文件里执行。
下面的示例写在javascript文件里。
连接数据库有两种方法，如下，示例里面用的方法1
方法1：
db = connect(&quot;localhost:port/myDatabase&quot;);

方法2：
new Mongo() 或者 new Mongo(&lt;host&gt;) 或者 new Mongo(&lt;host:port&gt;)
conn = new Mongo();
db = conn.getDB(&quot;myDatabase&quot;);
新建test.js，代码如下： 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var db = connect( &#39;school&#39; ); //连接的数据库名字为：school
db.courses.save({name:&quot;英语&quot;,time:&#39;周二 上午 8:00-9:50&#39;});
db.courses.save({name:&quot;数学&quot;,time:&#39;周二 上午 10:00-12:00&#39;});
db.courses.save({name:&quot;语文&quot;,time:&#39;周二 下午午 2:00-4:00&#39;});
db.people.save({name:&#39;刘湘&#39;,type:&#39;teacher&#39;,age:28});
db.people.save({name:&#39;王莎莎&#39;,type:&#39;student&#39;,age:12});

//1.添加存储过程
   //db.system.js.save({_id:存储过程名称,value:存储过程体})
db.system.js.save({_id:&quot;getCoursesCount&quot;,value:function(){return db.courses.count();},description:&#39;获取课程数&#39;});

   //db.system.js.insert({_id:存储过程名称,value:存储过程体})
db.system.js.insert({
    _id:&quot;getPeople&quot;,
    value:function(type){
      return type;
    },
    description:&#39;显示根据类型显示人员&#39;
 });

//2.修改存储过程
  //db.system.js.update({_id:存储过程名称},{value:存储过程体})
db.system.js.update({
    _id:&quot;getPeople&quot;},{
    value:function(type){
        if(type==null){
            return db.people.find().toArray();
        }else {
            return db.people.find({type:type}).toArray();
        }
    }
});

//3.执行存储过程
  //db.eval(&#39;存储过程名称(参数)&#39;)
var obj=db.eval(&quot;getPeople()&quot;);
print(JSON.stringify(obj));
var obj1=db.eval(&quot;getPeople(&#39;student&#39;)&quot;);
print(JSON.stringify(obj1));
print(db.eval(&quot;getCoursesCount()&quot;));

//4.查找存储过程
  //db.system.js.find();
var obj2= db.system.js.find();
print(JSON.stringify(obj2.toArray()));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找到test.js的文件位置，我的文件位置如下图，然后按住shift键，点击鼠标右键弹出一个菜单，选择 【在此处打开命令窗口（W）】</p><p><img src="https://images2015.cnblogs.com/blog/137142/201602/137142-20160202142109007-1521588429.png" alt="img"></p><p>弹出命令窗口，接下来运行test.js,会有两种方法</p><p>方法1：</p><p>在命令窗口输入mongo test.js，按回车键，test.js就会被运行，如下图</p><p><img src="https://images2015.cnblogs.com/blog/137142/201602/137142-20160202142715085-2117616175.png" alt="img"></p><p>方法2：在命令窗口输入 mongo 按回车键，然后输入load(&#39;test.js&#39;),这样test.js也会被运行，如下图：</p><p><img src="https://images2015.cnblogs.com/blog/137142/201602/137142-20160202143047882-1790410887.png" alt="img"></p>`,14);function b(m,p){const s=d("ExternalLinkIcon");return l(),t("div",null,[o,e("blockquote",null,[e("p",null,[n("作者："),e("a",c,[n("绿茶叶"),a(s)]),n(" 出处：http://www.cnblogs.com/greenteaone/ 本文版权归作者和博客园共有，欢迎转载，但未经作者同意必须保留此段声明，且在文章页面明显位置给出原文连接，否则保留追究法律责任的权利。")])]),u])}const _=i(r,[["render",b],["__file","04.mongodb-stored-procedure.html.vue"]]);export{_ as default};

import{_ as t,r as a,o as r,c as s,a as e,b as n,d as c,e as p}from"./app.4659d0e0.js";const d={},i=p(`<h1 id="kafka-命令记录" tabindex="-1"><a class="header-anchor" href="#kafka-命令记录" aria-hidden="true">#</a> Kafka - 命令记录</h1><h2 id="_1-服务管理" tabindex="-1"><a class="header-anchor" href="#_1-服务管理" aria-hidden="true">#</a> 1. 服务管理</h2><p>前台启动broker</p><p><code>bin/kafka-server-start.sh &lt;path&gt;/server.properties</code> Ctrl + C 关闭</p><p>后台启动broker</p><p><code>bin/kafka-server-start.sh -daemon &lt;path&gt;/server.properties</code></p><p>关闭broker</p><p><code>bin/kafka-server-stop.sh</code></p><h2 id="_2-topic管理" tabindex="-1"><a class="header-anchor" href="#_2-topic管理" aria-hidden="true">#</a> 2. Topic管理</h2><p>创建topic</p><p><code>bin/kafka-topics.sh --create --zookeeper localhost:2181 --partitions 3 --replication-factor 3 --topic topicname</code></p><p>删除topic</p><p><code>bin/kafka-topics.sh --delete --zookeeper localhost:2181 --topic topicname</code></p><p>查询topic列表</p><p><code>bin/kafka-topics.sh --zookeeper localhost:2181 --list</code></p><p>查询topic详情</p><p><code>bin/kafka-topics.sh --zookeeper localhost:2181 --describe --topic topicname</code></p><p>修改topic</p><p><code>bin/kafka-topics.sh --alter --zookeeper localhost:2181 --partitions 6 --topic topicname</code></p><p>相关可选参数</p><table><thead><tr><th>参数</th><th>描述</th><th>例子</th></tr></thead><tbody><tr><td><code>--bootstrap-server</code>指定kafka服务</td><td>指定连接到的kafka服务; 如果有这个参数,则<code>--zookeeper</code>可以不需要</td><td>--bootstrap-server localhost:9092</td></tr><tr><td><code>--zookeeper</code></td><td>弃用, 通过zk的连接方式连接到kafka集群;</td><td>--zookeeper localhost:2181 或者localhost:2181/kafka</td></tr><tr><td><code>--replication-factor</code></td><td>副本数量,注意不能大于broker数量;如果不提供,则会用集群中默认配置</td><td>--replication-factor 3</td></tr><tr><td><code>--partitions</code></td><td>分区数量,当创建或者修改topic的时候,用这个来指定分区数;如果创建的时候没有提供参数,则用集群中默认值; 注意如果是修改的时候,分区比之前小会有问题</td><td>--partitions 3</td></tr><tr><td><code>--replica-assignment</code></td><td>副本分区分配方式;创建topic的时候可以自己指定副本分配情况;</td><td><code>--replica-assignment</code>BrokerId-0:BrokerId-1:BrokerId-2,BrokerId-1:BrokerId-2:BrokerId-0,BrokerId-2:BrokerId-1:BrokerId-0 ; 这个意思是有三个分区和三个副本,对应分配的Broker; 逗号隔开标识分区;冒号隔开表示副本</td></tr><tr><td><code>--config</code>&lt;String: name=value&gt;</td><td>用来设置topic级别的配置以覆盖默认配置;<strong>只在--create 和--bootstrap-server 同时使用时候生效</strong> ; 可以配置的参数列表请看文末附件</td><td>例如覆盖两个配置<code>--config retention.bytes=123455 --config retention.ms=600001</code></td></tr><tr><td><code>--command-config</code>&lt;String: command 文件路径&gt;</td><td>用来配置客户端Admin Client启动配置,<strong>只在--bootstrap-server 同时使用时候生效</strong> ;</td><td>例如:设置请求的超时时间<code>--command-config config/producer.proterties</code>; 然后在文件中配置 request.timeout.ms=300000</td></tr></tbody></table><h2 id="_3-consumer-groups管理" tabindex="-1"><a class="header-anchor" href="#_3-consumer-groups管理" aria-hidden="true">#</a> 3. Consumer-Groups管理</h2><p><strong>查询消费者组</strong></p><p><code>bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --list</code></p><p><strong>查询消费者组详情</strong></p><p><code>bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group groupname</code></p><p><strong>重设消费者组位移</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 最早处</span>
bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 <span class="token parameter variable">--group</span> groupname --reset-offsets --all-topics --to-earliest <span class="token parameter variable">--execute</span>
<span class="token comment"># 最新处</span>
bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 <span class="token parameter variable">--group</span> groupname --reset-offsets --all-topics --to-latest <span class="token parameter variable">--execute</span>
<span class="token comment"># 某个位置</span>
bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 <span class="token parameter variable">--group</span> groupname --reset-offsets --all-topics --to-offset <span class="token number">2000</span> <span class="token parameter variable">--execute</span>
<span class="token comment"># 调整到某个时间之后得最早位移</span>
bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 <span class="token parameter variable">--group</span> groupname --reset-offsets --all-topics --to-datetime <span class="token number">2019</span>-09-15T00:00:00.000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除消费者组</strong></p><p><code>bin/kafka-consumer-groups.sh --zookeeper localhost:2181 --delete --group groupname</code></p><h2 id="_4-消息管理" tabindex="-1"><a class="header-anchor" href="#_4-消息管理" aria-hidden="true">#</a> 4. 消息管理</h2><p><strong>实时接收消息</strong></p><p><code>bin/kafka-console-consumer.sh --topic topin --bootstrap-server ip:port</code></p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,34),l={href:"https://www.cnblogs.com/tree1123/p/11525610.html",target:"_blank",rel:"noopener noreferrer"};function k(h,m){const o=a("ExternalLinkIcon");return r(),s("div",null,[i,e("ul",null,[e("li",null,[e("a",l,[n("Kafka运维命令大全"),c(o)])])])])}const b=t(d,[["render",k],["__file","02.kafka-command.html.vue"]]);export{b as default};
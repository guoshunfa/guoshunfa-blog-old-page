import{_ as r,r as o,o as i,c as p,a,b as e,d as n,e as s}from"./app.4659d0e0.js";const c={},l=a("h1",{id:"kafka-介绍",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#kafka-介绍","aria-hidden":"true"},"#"),e(" Kafka - 介绍")],-1),d={href:"https://www.cnblogs.com/qingyunzong/p/9004509.html",target:"_blank",rel:"noopener noreferrer"},k=s(`<h2 id="_1-kafka-服务准备" tabindex="-1"><a class="header-anchor" href="#_1-kafka-服务准备" aria-hidden="true">#</a> 1. Kafka 服务准备</h2><h3 id="_1-1-kafka-服务下载安装" tabindex="-1"><a class="header-anchor" href="#_1-1-kafka-服务下载安装" aria-hidden="true">#</a> 1.1. Kafka 服务下载安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载kafka服务包</span>
<span class="token function">wget</span> https://archive.apache.org/dist/kafka/0.10.2.1/kafka_2.10-0.10.2.1.tgz
<span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> kafka_2.10-0.10.2.1.tgz
<span class="token comment"># 进入kafka目录</span>
<span class="token builtin class-name">cd</span> kafka_2.10-0.10.2.1
<span class="token comment"># 修改配置文件server.properties</span>
<span class="token function">vi</span> config/server.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>server.properties demo</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">broker.id</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token comment"># ip可以是公网ip</span>
<span class="token key attr-name">advertised.listeners</span><span class="token punctuation">=</span><span class="token value attr-value">PLAINTEXT://ip:9092</span>
<span class="token comment"># ip最好使用内网ip，否则会出现错误：Socket server failed to bind to ip:9092: 无法指定被请求的地址</span>
<span class="token key attr-name">listeners</span><span class="token punctuation">=</span><span class="token value attr-value">PLAINTEXT://ip:9092</span>
<span class="token key attr-name">num.network.threads</span><span class="token punctuation">=</span><span class="token value attr-value">3</span>
<span class="token key attr-name">num.io.threads</span><span class="token punctuation">=</span><span class="token value attr-value">8</span>
<span class="token key attr-name">socket.send.buffer.bytes</span><span class="token punctuation">=</span><span class="token value attr-value">102400</span>
<span class="token key attr-name">socket.receive.buffer.bytes</span><span class="token punctuation">=</span><span class="token value attr-value">102400</span>
<span class="token key attr-name">socket.request.max.bytes</span><span class="token punctuation">=</span><span class="token value attr-value">104857600</span>
<span class="token key attr-name">log.dirs</span><span class="token punctuation">=</span><span class="token value attr-value">/pandas/service/log/kafka</span>
<span class="token key attr-name">num.partitions</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">num.recovery.threads.per.data.dir</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">log.retention.hours</span><span class="token punctuation">=</span><span class="token value attr-value">168</span>
<span class="token key attr-name">log.segment.bytes</span><span class="token punctuation">=</span><span class="token value attr-value">1073741824</span>
<span class="token key attr-name">log.retention.check.interval.ms</span><span class="token punctuation">=</span><span class="token value attr-value">300000</span>

<span class="token comment">############################# Zookeeper #############################</span>
<span class="token comment"># 最好使用内网ip，否则会出现错误：Socket server failed to bind to ip:9092: 无法指定被请求的地址</span>
<span class="token key attr-name">zookeeper.connect</span><span class="token punctuation">=</span><span class="token value attr-value">ip:2181</span>
<span class="token key attr-name">zookeeper.connection.timeout.ms</span><span class="token punctuation">=</span><span class="token value attr-value">6000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-kafka服务启动与关闭" tabindex="-1"><a class="header-anchor" href="#_1-2-kafka服务启动与关闭" aria-hidden="true">#</a> 1.2. Kafka服务启动与关闭</h3><p><strong>Kafka服务启动</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#启动zookeeper</span>
/<span class="token operator">&lt;</span>kafka目录<span class="token operator">&gt;</span>/bin/zookeeper-server-start.sh /<span class="token operator">&lt;</span>kafka目录<span class="token operator">&gt;</span>/config/zookeeper.properties <span class="token operator">&amp;</span>
<span class="token comment">#等3秒后执行</span>
<span class="token function">sleep</span> <span class="token number">3</span> 
<span class="token comment">#启动kafka</span>
/<span class="token operator">&lt;</span>kafka目录<span class="token operator">&gt;</span>/bin/kafka-server-start.sh /<span class="token operator">&lt;</span>kafka目录<span class="token operator">&gt;</span>/config/server.properties <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Kafka服务关闭</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#关闭zookeeper</span>
/<span class="token operator">&lt;</span>kafka目录<span class="token operator">&gt;</span>/bin/zookeeper-server-stop.sh /<span class="token operator">&lt;</span>kafka目录<span class="token operator">&gt;</span>/config/zookeeper.properties <span class="token operator">&amp;</span>
<span class="token comment">#等3秒后执行</span>
<span class="token function">sleep</span> <span class="token number">3</span> 
<span class="token comment">#关闭kafka</span>
/<span class="token operator">&lt;</span>kafka目录<span class="token operator">&gt;</span>/bin/kafka-server-stop.sh /<span class="token operator">&lt;</span>kafka目录<span class="token operator">&gt;</span>/config/server.properties <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-kafka-基本术语描述" tabindex="-1"><a class="header-anchor" href="#_2-kafka-基本术语描述" aria-hidden="true">#</a> 2. Kafka 基本术语描述</h2><table><thead><tr><th>术语</th><th>说明</th></tr></thead><tbody><tr><td>Topic</td><td>主题，用于划分消息类型，类似于分类标签，是个逻辑概念</td></tr><tr><td>Partition</td><td>分区，topic中的消息被分割为一个或多个partition，是一个物理概念，对应到系统上的是一个或者多个目录</td></tr><tr><td>Segment</td><td>段，将partition进一步细分为若干个段，每个segment文件的最大大小相等</td></tr><tr><td>Broker</td><td>Kafka集群包含一个或多个服务器，每个服务器节点称为一个Broker，一个topic中设置partition的数量是broker的整数倍</td></tr><tr><td>Producer</td><td>生产者，即消息发送者，会将消息发送到相应的partition中</td></tr><tr><td>Consumer Group</td><td>消费组，一个partition中的消息只能被同一个消费组中的一个消费者进行消费；而一个消费组内的消费者只会消费一个或者几个特定的partition</td></tr><tr><td>Replication of partition</td><td>分区副本，副本是一个分区的备份，是为了防止消息丢失而创建的分区备份</td></tr><tr><td>Partition Leader</td><td>每个partition有多个副本，其中有且仅有一个作为Leader，Leader是当前负责读写的partition，即所有读写操作只能发生于Leader分区上</td></tr><tr><td>Partition Follower</td><td>所有Follower都要从Leader上同步消息，Follower与Leader始终保持消息同步；partition leader与partition follower之间是主备关系而非主从关系</td></tr><tr><td>ISR</td><td>ISR：In-Sync Replicas，是指副本同步列表；AR：Assiged Replicas，指所有副本；OSR：Outof-Sync Replicas；AR=ISR+OSR</td></tr><tr><td>offset</td><td>偏移量，每个消息都有一个当前Partition下唯一的64字节的offset，他是相当于当前分区第一条消息的偏移量</td></tr><tr><td>offset commit</td><td>当consumer从partition中消费了消息后，consumer会将其消费消息的offset提交给broker，表示当前partition已经消费到了该offset所标识的消息。</td></tr><tr><td>Rebalance</td><td>当消费者组中消费者数量发生变化或者topic中partition数量发生变化，partition的所有权会在消费者间转移，即partition会重新分配。</td></tr><tr><td>__commit_offsets</td><td>消费者提交的offset被封装为了一种特殊的消息被写入到一个由系统创建的、名称为__commit_offstes的特殊topic的partition中，该topic默认包含50个partition，这些offset的默认有效期为一天</td></tr><tr><td>Broker Controller</td><td>Kafka集群的多个broker中，会有一个被选举为controller，负责管理集群中partition和副本replicas的状态。</td></tr><tr><td>Zookeeper</td><td>负责维护和协调Broker，负责Broker Controller的选举；这里要说明一下，Broker Controller是由Zookeeper选举出来的，而Partition Leader是由Broker Controller选举出来的。</td></tr><tr><td>Group Coordinator</td><td>group coordinator是运行在broker上的线程，主要用于consumer group中各个成员的offset位移管理和Rebalance；Group Coordinator同时管理着当前broker的所有消费者组。当Consumer需要消费数据时，并不是直接中__comsumer_offset的partition中获取的，而是从当前broker的Coordinator的缓存中获取的。而缓存中的数据是在consumer消费完提交offset时，同时提交到coordinator的缓存以及__consumer_offset的partition中的。</td></tr></tbody></table><h3 id="_2-1-topic、partition、segment、broker的关系" tabindex="-1"><a class="header-anchor" href="#_2-1-topic、partition、segment、broker的关系" aria-hidden="true">#</a> 2.1. topic、partition、segment、broker的关系</h3><p>topic是一个主题，是一个逻辑概念，而partition是一个一个先进先出的队列，而消息信息就存在partition队列中，但是由于一个topic对应的partition中消息内容太大，因此将其分为多个segment用于存储。segment文件的最大大小是一致的。</p><p>举个例子，如果一个segment的最大大小为10个字节，当写够10个字节后，就会重新再生成一个segment，segment对应的就是实际的内容文件，而内容文件又分为后缀名为log的具体消息文件和后缀名为index的消息索引文件。</p><p>切换到kafka的日至目录文件，查看即可：</p><img src="https://file.pandacode.cn/blog/2022112164543.png"><p>这里因为是我自己的测试，没有那么大的数据量，所以文件都是0，文件的命名方式是以上一个文件的结尾偏移量得来的，第一个文件前面没有文件，所以偏移量为0。</p><p>而broker是kafka的服务器，假设某topic中有N个partiton，集群中有M个broker，则partiton与broker的关系为：</p><p>若N&gt;M，且N%M =0 ，则每个broker会平均存储该topic的多个partiton</p><p>若N&gt;M，且N%M!=0，则每个broker中的partion数量不是不平均的。应尽量避免这种情况，容易导致Kafka 集群消息不均衡，各个 broker 的任务压⼒不均衡。</p><p>若N&lt;M，则会有N个broker中都存放了⼀个partition，⽽有M-N个broker是没有partition的。</p><img src="https://file.pandacode.cn/blog/2022112164606.png">`,23),u=s(`<p><strong>总而言之一句话：⼀个 Topic 的消息可以被存放到多个 Broker 中，⼀个 Broker 中可以存放⼀个 Topic 的多 个Partition，⽽⼀个 Partition 中可以存放很多的 Segment，⼀个 Segment 中可以存放很多的消息。</strong></p><h3 id="_2-2-consumer、consumer-group与partition的关系" tabindex="-1"><a class="header-anchor" href="#_2-2-consumer、consumer-group与partition的关系" aria-hidden="true">#</a> 2.2. consumer、consumer group与partition的关系</h3><p>consumer是消费者，一个消费者可以订阅多个topic消息，也可以订阅同一个topic中多个partition的消息。</p><p>consumer group是消费者组，每一条消息只能被组内一个实例进行消费，不同的消费组可以消费同一条消息。</p><p>consumer与partition的关系：一个consumer可以消费一个或多个partition的消息，但是一个partition的消息不能被多个消费者消费，其主要目有两个，一个是为了正确的回写消费进度，另一个是为了保证同一个partition的消息顺序写、顺序读；但是这样就会造成一个问题，就是如果消费者的数量多于partition的数量的时候，就一定有消费者是处于空闲。而如果partition不是消费者的整数倍，那么也会存在有的消费者消费的partition比其他消费者多的情况，因此一般情况下，都会将partition的数量设置为消费者的整数倍，这样所有的消费者消费的partition数量一致，不会产生压力不均的问题。</p><h3 id="_2-3-replicas-of-partition、partition-leader、partition-follower" tabindex="-1"><a class="header-anchor" href="#_2-3-replicas-of-partition、partition-leader、partition-follower" aria-hidden="true">#</a> 2.3. Replicas of partition、Partition Leader、Partition Follower</h3><p>Replicas of partition就是partition的副本数量，主要是为了解决单点问题导致的broker宕机后partition不可用，如果副本为3，那么看有几个broker，如果有一个，那么在当前的broker上会有相同的三个partition，如果有两个broker，那么会存在一个broker上有一个partition另外一个broker上有两个partition的情况，如果有三个broker，那么每一个broker上都会有一个partition。</p><img src="https://file.pandacode.cn/blog/2022112164724.png"><p>而Partition是存在Partition Leader和Partition Follower的，每一个partition在创建的时候，都会使用Zookeeper的临时节点来确定哪一个partition是Leader，那么其余的Partition则都是Follower，只有Leader会处理客户端的读写请求，而Follower只会将Leader中的数据同步到自己的日志中，而不向外部客户端提供任何服务，它的作用就是当Leader所在的broker宕机后，其所链接的Zookeeper就是重新选举一个Leader，这是其中一个Follower会被选举为Leader，其同步的数据也就派上了用场。</p><p>创建一个topic的命令如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bin/kafka-topics.sh <span class="token parameter variable">--create</span> --bootstrap-server localhost:9092 --replicationfactor <span class="token number">1</span> <span class="token parameter variable">--partitions</span> <span class="token number">1</span> <span class="token parameter variable">--topic</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中partition表示该topic下面有多少个partition，factor是复制因子，表示每个partition需要复制几份进行保存，这里的复制因子数量不能超过broker的数量，因为超过了，一个broker中存在同一个partition的数量就大于一，没有任何意义，返回会增加数据同步和数据存储的压力。</p><h3 id="_2-4-offset、offset-commit、-consumer-offsets" tabindex="-1"><a class="header-anchor" href="#_2-4-offset、offset-commit、-consumer-offsets" aria-hidden="true">#</a> 2.4. offset、offset commit、_consumer offsets</h3><p>offset就是偏移量，consumer消费消息时，是通过指定的offset来定位下一条要读取消息的位置，offset的维护是由consumer进行维护的。 在kafka0.8之后，offset保存在kafka集群上，在0.8版本之前，是保存在zookeeper上的。在新版本中，consumer的offset其实是作为一条普通的消息发送到kafka的，消息的默认主题是_consumer_offsets，其默认有50个partition。</p><p>当consumer消费完消息后，会将消费消息的offset提交给broker，表示这些消息已经被消费。</p><p>consumer提交消费offset的方式有自动提交、手动异步提交、手动同步提交、手动同步异步混合提交这几种方案：</p><p>自动提交：自动提交只需要设置使用时只需要设置enable.auto.commit为true即可。其优点就是比较简单，但是缺点是会产生重复消息。因为自动提交默认的是5秒提交一次，提交的内容是上一次被消费的数据，那么如果在第三秒的时候出现了Rebalance，在Rebalance后，consumer需要重新从上一次确认过的offset处消费，就会造成之前三秒的数据再一次被消费。</p><p>手动提交：手动同步提交需要使用commitSync()，而手动异步提交需要使用commitAsync()，同步提交的优点是比较灵活，但缺点也很明显，就是会阻塞；而异步提交的优点就是相对于同步来说，不会阻塞；那么一般我们会使用同步和异步组合使用，就是进行异步提交offset，但是需要监听broker的响应结果，如果相应结果是提交失败，则再以同步的方式进行提交。</p><p>还有一种更为精致的提交方式，commitSync(Map&lt;TopicPartition, OffsetAndMetadata&gt;)和commitAsync(Map&lt;TopicPartition, OffsetAndMetadata&gt;)。它们的参数是⼀个 Map 对象，键就是 TopicPartition，即消费的分区，⽽值是⼀个</p><p>OffsetAndMetadata 对象，保存的主要是位移数据。</p><p>上面提到的_consumer_offsets，该topic的partition默认为50个，使用哪个partition使用的是consumer groupID的hash值与partition数量取模处理，该topic中数据的有效期为1天，其key=groupid+topic+分区号，value就是当前offset的值。写⼊到__consumer_offsets主题的partition中的offset消息格式为：[Group, Topic, Partition]::[OffsetMetadata[Offset, Metadata], CommitTime, ExpirationTime]。当 Kafka 集群中的第⼀个 Consumer 程序启动时，Kafka 会⾃动创建位移主题。</p><img src="https://file.pandacode.cn/blog/2022112164845.png"><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,23),m={href:"https://www.cnblogs.com/liconglong/p/14560681.html",target:"_blank",rel:"noopener noreferrer"};function f(v,b){const t=o("ExternalLinkIcon");return i(),p("div",null,[l,a("blockquote",null,[a("p",null,[a("a",d,[e("Kafka 简介"),n(t)])])]),k,e("　 "),u,a("ul",null,[a("li",null,[a("a",m,[e("Kafka基本术语及描述"),n(t)])])])])}const g=r(c,[["render",f],["__file","01.kafka-introduce.html.vue"]]);export{g as default};

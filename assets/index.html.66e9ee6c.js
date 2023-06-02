import{_ as n,o as i,c as e,e as d}from"./app.4659d0e0.js";const s={},l=d(`<h1 id="web组件库-js组件方法记录" tabindex="-1"><a class="header-anchor" href="#web组件库-js组件方法记录" aria-hidden="true">#</a> Web组件库 - JS组件方法记录</h1><blockquote><p>以折叠面板的形式进行组件描述，点击对应的面板会展示对应信息。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
        * @description 将扁平化数据 转换成 树状结构
        * @param {Array} arrayList 扁平化的数据
        * @param {String} pidStr parentId的key名
        * @param {String} idStr id的key名
        * @param {String} childrenStr children的key名
        */
       function fommat({arrayList, pidStr = &#39;pid&#39;, idStr = &#39;id&#39;, childrenStr = &#39;children&#39;}) {
           let listOjb = {}; // 用来储存{key: obj}格式的对象
           let treeList = []; // 用来储存最终树形结构数据的数组
           // 将数据变换成{key: obj}格式，方便下面处理数据
           for (let i = 0; i &lt; arrayList.length; i++) {
               listOjb[arrayList[i][idStr]] = arrayList[i]
           }
           // 根据pid来将数据进行格式化
           for (let j = 0; j &lt; arrayList.length; j++) {
               // 判断父级是否存在
               let haveParent = listOjb[arrayList[j][pidStr]] 
               if (haveParent) {
                   // 如果有没有父级children字段，就创建一个children字段
                   !haveParent[childrenStr] &amp;&amp; (haveParent[childrenStr] = [])
                   // 在父级里插入子项
                   haveParent[childrenStr].push(arrayList[j])
               } else {
                   // 如果没有父级直接插入到最外层
                   treeList.push(arrayList[j])
               }
           }
           return treeList
       }
            

        // 测试数据
        var menu_list = [{
          id: &#39;1&#39;,
          menu_name: &#39;设置&#39;,
          menu_url: &#39;setting&#39;,
          parent_id: 0
        }, {
          id: &#39;1-1&#39;,
          menu_name: &#39;权限设置&#39;,
          menu_url: &#39;setting.permission&#39;,
          parent_id: &#39;1&#39;
        }, {
          id: &#39;1-1-1&#39;,
          menu_name: &#39;用户管理列表&#39;,
          menu_url: &#39;setting.permission.user_list&#39;,
          parent_id: &#39;1-1&#39;
        }, {
          id: &#39;1-1-2&#39;,
          menu_name: &#39;用户管理新增&#39;,
          menu_url: &#39;setting.permission.user_add&#39;,
          parent_id: &#39;1-1&#39;
        }, {
          id: &#39;1-1-3&#39;,
          menu_name: &#39;角色管理列表&#39;,
          menu_url: &#39;setting.permission.role_list&#39;,
          parent_id: &#39;1-1&#39;
        }, {
          id: &#39;1-2&#39;,
          menu_name: &#39;菜单设置&#39;,
          menu_url: &#39;setting.menu&#39;,
          parent_id: &#39;1&#39;
        }, {
          id: &#39;1-2-1&#39;,
          menu_name: &#39;菜单列表&#39;,
          menu_url: &#39;setting.menu.menu_list&#39;,
          parent_id: &#39;1-2&#39;
        }, {
          id: &#39;1-2-2&#39;,
          menu_name: &#39;菜单添加&#39;,
          menu_url: &#39;setting.menu.menu_add&#39;,
          parent_id: &#39;1-2&#39;
        }, {
          id: &#39;2&#39;,
          menu_name: &#39;订单&#39;,
          menu_url: &#39;order&#39;,
          parent_id: 0
        }, {
          id: &#39;2-1&#39;,
          menu_name: &#39;报单审核&#39;,
          menu_url: &#39;order.orderreview&#39;,
          parent_id: &#39;2&#39;
        }, {
          id: &#39;2-2&#39;,
          menu_name: &#39;退款管理&#39;,
          menu_url: &#39;order.refundmanagement&#39;,
          parent_id: &#39;2&#39;
        }, {
          id: &#39;2-2-1&#39;,
          menu_name: &#39;退款管理2-1&#39;,
          menu_url: &#39;order.refundmanagement&#39;,
          parent_id: &#39;2-2&#39;
        }
    ]
    
    // 输出
    console.log(
           fommat({
               arrayList: menu_list,
               pidStr: &#39;parent_id&#39;
           })
       )

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=[l];function v(a,m){return i(),e("div",null,r)}const c=n(s,[["render",v],["__file","index.html.vue"]]);export{c as default};

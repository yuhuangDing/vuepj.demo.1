#第一个Vue项目尝试
使用工具：Webpack、Vue、MUI、Mint-UI

##git使用步骤
###·创建.gitignore文件忽略需要上传打包的文件
###·添加README.md说明文件
###·加入开源协议文件
###·使用git init初始化
###·添加跟踪，git add .   ----git status可以查看跟踪文件列表
###·提交git commit -m "init myproject"
###·创建远端仓库，使用git remote add origin   ssh@
###·使用git push -u origin master提交




##改造tarbar为路由，设置路由高亮
##创建各个组件，点击路由连接展示对应的路由组件

###改造主页9宫格
###改造新闻资讯列表
######    绘制界面，使用vue-resource获取数据，渲染真是数据
列表中的每一项改为router-link，跳转的时候提供唯一表示符，创建新闻详情页面，再路由模块中将新闻详情的路由地址和组件页面对应
######新闻详情页面布局和数据渲染



###引入组件
在父组件中import引入，在components中注册，使用对应标签


###点击加载更多按钮
1.为按钮绑定事件，事件中去请求下一页数据，
2.点击加载更多按钮，pageIndex自增重新请求获取数据，
3.防止新数据覆盖老数据的情况，在点击加载更多时候，每当获取到新数据，应该调用数据的concat方法拼接上新数组



##发表评论功能
1.文本框双向数据绑定 2.为发表按钮绑定事件 3.校验内容是否为空，空则提示用户，
4.通过vue-resouce发生请求，把评论内容发送到服务器
5.当发表评论后从小刷新列表，查看最新的评论，
    +调用getcomments方法刷新列表的话，只能得到最后一页的评论，前几页评论获取不到，因为PageIndex刷新了
    +换个思路：评论成功后，直接本地调用unshift把最新评论追加到data中comments的开头，无需刷新评论列表
    
    
##图片列表组件
1.顶部滑动条，注意取消mui的全屏类mui-fullscrean  2.中间图片列表
2.滑动条无法正常滑动，需要导入js组件，并初始化,导入mui.js的包webpack可能启用严格模式打包的bundle.js和它发生冲突报错 
    +解决方案：1.mui.js中的非严格模式的代码改掉，但是不现实  
    +         2.关闭webpack打包的严格模式禁用了,https://www.npmjs.com/package/babel-plugin-transform-remove-strict-mode
    +         3.滑动错误 ，在photolist加入  *{touch-action: pan-y}
3.bug：滑动条第一次进入不能滑动， ，在生命周期函数mounted中加入滑动条初始化（DOM已经渲染好并放到页面的时候会执行）   
        +滑动成功了tarbar路由失效    修改app中tarbar 的类mui-tab-item 为mui-tab-item1，然后重新定于类  


###在手机调试页面
1.和电脑处于通过网络，
2.在package.json文件在dev脚本中添加一个--host指令，把当前电脑的wifi ip地址设置为--host的指令值
    +cmd中运行ipconfig   查看无线网络的ip 
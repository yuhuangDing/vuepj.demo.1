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

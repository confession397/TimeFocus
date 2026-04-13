# TimeFocus 运行使用指南

本指南将一步步教你如何在本机运行TimeFocus微信小程序项目。

---

## 一、运行前准备

### 1.1 系统要求

**支持的操作系统**：
- Windows 7/8/10/11
- macOS 10.13+
- Linux（推荐Ubuntu 18.04+）

**推荐配置**：
- 内存：4GB以上
- 磁盘空间：500MB以上
- 网络：稳定的互联网连接

### 1.2 注册微信小程序账号

1. **访问微信公众平台**：https://mp.weixin.qq.com/
2. 点击右上角 **"立即注册"**
3. 选择 **"小程序"** → **"注册"**
4. 填写账号信息：
   - 邮箱：使用未注册过微信的邮箱
   - 密码：设置一个安全的密码
   - 确认密码：再次输入密码
5. 点击 **"注册"**
6. 登录邮箱，点击验证链接激活账号
7. 登录微信公众平台，完成账号信息填写
8. 进入 **"设置"** → **"开发设置"**，获取 **AppID**（格式如：wx1234567890abcdef）

> ⚠️ **注意**：如果暂时不想注册账号，可以使用 **"测试号"** 来运行项目，无需AppID。

---

## 二、下载项目代码

### 2.1 方式一：从GitHub克隆（推荐）

**如果你有Git**：
```bash
# 打开终端/命令行，进入你想保存项目的目录
cd Desktop

# 克隆项目
git clone https://github.com/confession397/TimeFocus.git

# 进入项目目录
cd TimeFocus
```

**如果没有Git**：
1. 访问：https://github.com/confession397/TimeFocus
2. 点击绿色按钮 **"Code"**
3. 选择 **"Download ZIP"**
4. 解压下载的ZIP文件到任意位置

### 2.2 方式二：直接使用当前项目

如果你当前已经在项目目录中，可以直接使用，无需下载。

**项目路径**：
```
c:/Users/lenovo/OneDrive/桌面/WXminiprogram-Focus-clock-master
```

---

## 三、安装微信开发者工具

### 3.1 下载微信开发者工具

**Windows用户**：
1. 访问：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
2. 选择 **"Windows 64"** 或 **"Windows 32"**（根据系统选择）
3. 点击下载
4. 运行安装程序，按默认设置安装

**macOS用户**：
1. 访问：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
2. 选择 **"macOS"**
3. 下载.dmg文件
4. 打开并拖拽到Applications文件夹

### 3.2 验证安装

1. 打开 **微信开发者工具**
2. 如果是首次使用，需要扫码登录（使用微信扫码）
3. 登录成功后进入工具首页

---

## 四、配置项目

### 4.1 使用正式AppID（推荐）

1. **打开项目**：
   - 点击微信开发者工具首页的 **"+"** 号
   - 或选择 **"项目"** → **"导入项目"**

2. **填写项目信息**：
   ```
   项目名称：TimeFocus
   目录：选择项目根目录（包含app.json的文件夹）
   AppID：wx1234567890abcdef（你从微信公众平台获取的AppID）
   开发模式：小程序
   后端服务：不使用云服务
   ```

3. **点击"导入"**：
   - 等待项目加载
   - 首次加载可能需要几分钟

### 4.2 使用测试号（无需AppID）

1. **获取测试号**：
   - 访问：https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login
   - 使用微信扫码登录
   - 页面会显示 **"测试号信息"**，其中包含 **"appID"**

2. **打开项目**：
   - 打开微信开发者工具
   - 点击 **"+"** 或 **"导入项目"**
   - 填写项目信息：
     ```
     项目名称：TimeFocus（测试）
     目录：选择项目根目录
     AppID：使用测试号的appID
     开发模式：小程序
     ```

### 4.3 配置project.config.json

**如果AppID为空，需要手动配置**：

1. 找到项目根目录的 `project.config.json` 文件
2. 用文本编辑器（如VSCode、记事本）打开
3. 找到 `appid` 字段：
   ```json
   {
     "appid": "",
     "projectname": "TimeFocus",
     ...
   }
   ```
4. 将 `appid` 填入你的AppID或测试号appID：
   ```json
   {
     "appid": "wx1234567890abcdef",
     "projectname": "TimeFocus",
     ...
   }
   ```
5. 保存文件

---

## 五、编译运行项目

### 5.1 首次编译

1. **自动编译**：
   - 项目导入后，微信开发者工具会自动编译
   - 编译成功后，右侧会显示小程序预览界面

2. **查看编译结果**：
   - 查看底部的 **"编译信息"** 标签
   - 如果显示 **"编译成功"**，说明项目正常运行

### 5.2 运行项目

**模拟器运行**：
- 右侧预览界面就是小程序的运行效果
- 可以在模拟器中操作各个功能

**真机调试**：
1. 点击工具栏的 **"预览"** 按钮
2. 使用微信扫描二维码
3. 在微信中打开小程序
4. 可以在真机上测试和调试

### 5.3 项目功能介绍

**4个主要Tab页**：

1. **专注**（主页）
   - 专注计时功能
   - 可以自定义任务名称
   - 工作模式（默认30分钟）
   - 休息模式（默认5分钟）
   - 环形进度条显示

2. **待办**
   - 添加待办任务
   - 勾选完成任务
   - 删除任务
   - 全选/清除已完成

3. **记录**
   - 查看专注历史
   - 环形图表统计
   - 工作时间/休息时间统计

4. **设置**
   - 设置工作时间（1-60分钟）
   - 设置休息时间（1-30分钟）
   - 开启/关闭震动提醒
   - 选择白噪声背景音
   - 查看关于信息

---

## 六、常见问题解决

### 6.1 编译失败

**问题**：提示"编译失败"

**解决方法**：
1. 检查基础库版本
   - 点击工具栏 **"详情"** → **"本地设置"**
   - 确保 **"调试基础库"** 版本 ≥ 2.21.0
   
2. 清除缓存重新编译
   - 点击工具栏 **"工具"** → **"构建npm"**
   - 点击工具栏 **"工具"** → **"清除缓存"**
   - 重新编译

3. 检查文件完整性
   - 确保所有文件都已下载
   - 特别是 `image/` 目录下的图片文件

### 6.2 提示"AppID无效"

**问题**：提示"AppID格式不正确"或"AppID无效"

**解决方法**：
1. 确认AppID格式正确：`wx` 开头，16位字母数字
2. 使用测试号AppID：https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login
3. 重新填写 `project.config.json` 中的 `appid`

### 6.3 图片无法显示

**问题**：界面上的图标或图片显示空白

**解决方法**：
1. 检查 `image/` 目录是否存在
2. 确认图片文件完整（共32个图片文件）
3. 检查图片路径是否正确
4. 尝试清除缓存后重新编译

### 6.4 音乐无法播放

**问题**：白噪声背景音无法播放

**解决方法**：
1. 检查网络连接
2. 当前音乐URL是占位符，需要替换为实际音频地址：
   - 打开 `pages/setting/setting.js`
   - 找到 `musicUrl` 数组
   - 替换为你自己的音频URL（支持mp3格式）
   - 例如：
     ```javascript
     musicUrl: [
       'https://your-cdn.com/forest.mp3',
       'https://your-cdn.com/rain.mp3',
       'https://your-cdn.com/field.mp3'
     ]
     ```

### 6.5 真机调试失败

**问题**：扫码后无法在微信中打开

**解决方法**：
1. 确保微信版本 >= 6.7.0
2. 检查网络连接
3. 清除微信缓存
4. 重新编译后再次预览

### 6.6 提示"页面不存在"

**问题**：点击某个Tab页提示"页面不存在"

**解决方法**：
1. 检查 `app.json` 中的 `pages` 配置
2. 确认页面文件存在：
   - `.js`
   - `.wxml`
   - `.json`
   - `.wxss`
3. 重新导入项目

---

## 七、开发调试技巧

### 7.1 调试工具

**Console面板**：
- 查看日志输出
- `console.log()` 输出的内容会显示在这里
- 查看错误信息

**Network面板**：
- 查看网络请求
- 检查API调用
- 查看响应数据

**Storage面板**：
- 查看本地存储数据
- 可以手动清除存储

**AppData面板**：
- 查看当前页面数据
- 实时更新数据状态

### 7.2 调试快捷键

**Windows**：
- `F5`：编译
- `Ctrl+S`：保存
- `Ctrl+B`：编译
- `F12`：打开调试工具

**macOS**：
- `Cmd+S`：保存
- `Cmd+B`：编译

### 7.3 断点调试

1. 打开JS文件（如 `pages/index/index.js`）
2. 在代码行号左侧点击，设置断点（红色圆点）
3. 运行到断点时，代码会暂停
4. 查看变量值和调用栈
5. 使用调试工具栏的按钮：
   - **Continue**：继续执行
   - **Step Over**：单步执行
   - **Step Into**：进入函数
   - **Step Out**：跳出函数

---

## 八、项目定制修改

### 8.1 修改项目名称

**修改应用名称**：
- 打开 `app.json`
- 修改 `navigationBarTitleText`：
  ```json
  {
    "window": {
      "navigationBarTitleText": "你的应用名称"
    }
  }
  ```

### 8.2 修改配色方案

**修改导航栏颜色**：
- 打开 `app.json`
- 修改 `navigationBarBackgroundColor`：
  ```json
  {
    "window": {
      "navigationBarBackgroundColor": "#4A90E2"
    }
  }
  ```

**修改TabBar颜色**：
- 打开 `app.json`
- 修改 `tabBar` 配置：
  ```json
  {
    "tabBar": {
      "color": "#999999",
      "selectedColor": "#4A90E2"
    }
  }
  ```

### 8.3 修改默认时间

**修改默认工作时间**：
- 打开 `app.js`
- 修改 `defaultWorkTime`：
  ```javascript
  const defaultTime = {
    defaultWorkTime: 30,  // 改为你想要的时间（分钟）
    defaultRestTime: 5    // 改为你想要的时间（分钟）
  }
  ```

### 8.4 替换图片资源

**准备你的图片**：
- 格式：PNG或JPG
- 尺寸：根据原图尺寸准备

**替换步骤**：
1. 找到 `image/` 目录
2. 用你的图片替换同名文件
3. 重新编译项目

**替换Logo**（TabBar图标）：
- `yu.png` / `yu2.png`（专注）
- `todo.png` / `todo2.png`（待办）
- `jilu.png` / `jilu2.png`（记录）
- `shezhi.png` / `shezhi2.png`（设置）

### 8.5 添加新功能

**创建新页面**：
1. 在 `pages/` 目录下创建新文件夹
2. 创建4个文件：`.js`、`.wxml`、`.json`、`.wxss`
3. 在 `app.json` 的 `pages` 数组中注册页面：
   ```json
   {
     "pages": [
       "pages/index/index",
       "pages/yourpage/yourpage"
     ]
   }
   ```
4. 在 `app.json` 的 `tabBar` 中添加Tab：
   ```json
   {
     "tabBar": {
       "list": [
         {
           "pagePath": "pages/yourpage/yourpage",
           "text": "新页面"
         }
       ]
     }
   }
   ```

---

## 九、发布上线

### 9.1 代码检查

1. **查看错误和警告**：
   - 点击工具栏 **"详情"** → **"本地设置"**
   - 查看是否有错误提示
   - 修复所有错误

2. **测试功能**：
   - 在模拟器中测试所有功能
   - 在真机上测试
   - 确保功能正常

### 9.2 上传代码

1. **上传到微信后台**：
   - 点击工具栏 **"上传"**
   - 填写版本号（如：1.0.0）
   - 填写项目备注（如：TimeFocus初始版本）
   - 点击 **"上传"**

2. **登录微信公众平台**：
   - 访问：https://mp.weixin.qq.com/
   - 登录你的小程序账号
   - 进入 **"版本管理"**

3. **提交审核**：
   - 找到刚上传的版本
   - 点击 **"提交审核"**
   - 填写审核信息
   - 等待审核通过（通常1-7个工作日）

### 9.3 发布上线

1. **审核通过后**：
   - 回到 **"版本管理"**
   - 点击 **"发布"**
   - 确认发布

2. **查看线上版本**：
   - 发布后，所有用户都可以使用你的小程序
   - 可以在微信中搜索你的小程序名称

---

## 十、进阶开发

### 10.1 使用云开发

**开通云开发**：
1. 在微信开发者工具中，点击 **"云开发"**
2. 点击 **"开通"**
3. 选择免费版（基础版1）
4. 创建云环境

**云功能开发**：
- 云函数：后端逻辑
- 云数据库：数据存储
- 云存储：文件存储
- 云托管：静态网站

### 10.2 接入第三方API

**使用HTTPS接口**：
1. 在微信公众平台配置服务器域名白名单
2. 使用 `wx.request()` 调用API：
   ```javascript
   wx.request({
     url: 'https://api.example.com/data',
     method: 'GET',
     success: (res) => {
       console.log(res.data)
     }
   })
   ```

### 10.3 使用组件库

**安装组件库**：
- 项目已使用WEUI组件库
- 可以继续使用或更换为其他库（如Vant Weapp）

---

## 十一、学习资源

### 官方文档
- **微信小程序官方文档**：https://developers.weixin.qq.com/miniprogram/dev/framework/
- **组件文档**：https://developers.weixin.qq.com/miniprogram/dev/component/
- **API文档**：https://developers.weixin.qq.com/miniprogram/dev/api/

### 开发工具
- **微信开发者工具下载**：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
- **VSCode编辑器**：https://code.visualstudio.com/

### 学习教程
- **微信小程序官方教程**：https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/
- **掘金小程序教程**：https://juejin.cn/tag/微信小程序
- **知乎小程序话题**：https://www.zhihu.com/topic/19553501/hot

---

## 十二、快速参考

### 项目目录结构
```
TimeFocus/
├── app.js              # 应用入口
├── app.json            # 全局配置
├── app.wxss            # 全局样式
├── project.config.json # 项目配置
├── package.json        # 依赖配置
├── image/              # 图片资源
├── pages/              # 页面文件
│   ├── index/          # 专注页面
│   ├── todos/          # 待办页面
│   ├── logs/           # 记录页面
│   └── setting/        # 设置页面
└── utils/              # 工具函数
```

### 常用命令
```bash
# 查看Git状态
git status

# 提交更改
git add .
git commit -m "update"

# 推送到GitHub
git push origin main
```

### 文件修改后重新编译
1. 保存修改的文件
2. 微信开发者工具会自动重新编译
3. 查看右侧预览效果

---

## 十三、常见错误代码

| 错误代码 | 说明 | 解决方法 |
|---------|------|---------|
| 401 | AppID无效 | 检查AppID格式 |
| 403 | 权限不足 | 使用正确的AppID |
| 500 | 服务器错误 | 稍后重试 |
| 1001 | 网络错误 | 检查网络连接 |
| 1002 | 文件不存在 | 检查文件路径 |

---

## 结语

恭喜你成功运行TimeFocus项目！

如果在使用过程中遇到问题，可以：
1. 查看本文档的"常见问题解决"部分
2. 查看微信小程序官方文档
3. 在GitHub提交Issue：https://github.com/confession397/TimeFocus/issues

祝你开发顺利！🎉

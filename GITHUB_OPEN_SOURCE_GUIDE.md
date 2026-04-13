# GitHub开源部署指南

本指南将带你一步步将TimeFocus项目上传到GitHub并完成开源配置。

---

## 一、准备工作

### 1.1 安装Git工具

#### Windows系统
1. 下载Git：https://git-scm.com/download/win
2. 运行安装程序，按默认设置安装
3. 安装完成后，打开"Git Bash"或使用PowerShell

#### macOS系统
```bash
brew install git
```

#### 验证安装
```bash
git --version
```

### 1.2 注册GitHub账号

1. 访问：https://github.com/
2. 点击"Sign up"注册账号
3. 填写邮箱、密码和用户名
4. 验证邮箱

### 1.2 生成SSH密钥（推荐）

#### 生成密钥
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
按回车使用默认路径，可设置密码或直接按回车

#### 查看公钥
```bash
cat ~/.ssh/id_rsa.pub
```

#### 添加到GitHub
1. 登录GitHub，点击右上角头像 → Settings
2. 左侧菜单选择"SSH and GPG keys"
3. 点击"New SSH key"
4. 粘贴公钥内容，点击"Add SSH key"

---

## 二、项目本地配置

### 2.1 创建.gitignore文件

在项目根目录创建`.gitignore`文件，忽略不必要的文件：

```gitignore
# 微信小程序
node_modules/
.miniprogram_npm/
unpackage/
.DS_Store

# 编辑器
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# 日志
logs
*.log

# 临时文件
*.tmp
*.temp
*.cache

# 操作系统
Thumbs.db
.DS_Store

# 其他
*.zip
*.rar
*.7z
```

### 2.2 初始化Git仓库

打开终端（Git Bash或PowerShell），进入项目目录：

```bash
cd "c:/Users/lenovo/OneDrive/桌面/WXminiprogram-Focus-clock-master"
```

初始化Git仓库：

```bash
git init
```

### 2.3 添加文件到暂存区

```bash
git add .
```

### 2.4 首次提交

```bash
git commit -m "Initial commit: TimeFocus专注时钟定制开源版"
```

---

## 三、在GitHub创建仓库

### 3.1 创建新仓库

1. 登录GitHub，点击右上角"+" → "New repository"
2. 填写仓库信息：
   - **Repository name**：`TimeFocus`（或你喜欢的名字）
   - **Description**：`TimeFocus专注时钟 - 基于微信小程序的时间管理工具`
   - **Public/Private**：选择"Public"（公开）
   - **Add .gitignore**：选择"None"（已创建）
   - **Add a license**：选择"MIT License"
   - **Initialize this repository with**：不勾选（已初始化）

3. 点击"Create repository"

### 3.2 获取仓库地址

创建后会显示仓库地址，有两种方式：

#### HTTPS方式（适合初学者）
```
https://github.com/yourusername/TimeFocus.git
```

#### SSH方式（推荐）
```
git@github.com:yourusername/TimeFocus.git
```

---

## 四、推送代码到GitHub

### 4.1 关联远程仓库（HTTPS方式）

```bash
git remote add origin https://github.com/yourusername/TimeFocus.git
```

### 4.2 关联远程仓库（SSH方式）

```bash
git remote add origin git@github.com:yourusername/TimeFocus.git
```

### 4.3 推送到GitHub

首次推送需要指定分支：

```bash
git branch -M main
git push -u origin main
```

### 4.4 认证操作

#### HTTPS方式认证
1. 执行push命令时会提示输入用户名和密码
2. 用户名：GitHub用户名
3. 密码：使用Personal Access Token（推荐）

##### 生成Personal Access Token
1. GitHub → Settings → Developer settings → Personal access tokens
2. 点击"Generate new token (classic)"
3. 设置：
   - Note：`TimeFocus Token`
   - Expiration：选择有效期
   - 勾选"repo"权限
4. 点击"Generate token"
5. 复制token（只显示一次！）
6. 在密码输入框粘贴token

#### SSH方式认证
如果已配置SSH密钥，无需额外认证。

---

## 五、完善GitHub仓库

### 5.1 验证仓库内容

访问：https://github.com/yourusername/TimeFocus

确认文件已成功上传：
- README.md ✓
- CUSTOMIZATION_SUMMARY.md ✓
- app.js, app.json, app.wxss ✓
- pages/ 目录 ✓
- image/ 目录 ✓
- utils/ 目录 ✓

### 5.2 优化README.md（可选）

GitHub会自动渲染README.md，确保包含：

```markdown
# TimeFocus 专注时钟

[![GitHub stars](https://img.shields.io/github/stars/yourusername/TimeFocus)](https://github.com/yourusername/TimeFocus)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/TimeFocus)](https://github.com/yourusername/TimeFocus)
[![License](https://img.shields.io/github/license/yourusername/TimeFocus)](https://github.com/yourusername/TimeFocus)

> TimeFocus是一个基于微信小程序的时间管理工具，采用番茄工作法理念，帮助用户提高专注力和工作效率。

## 功能特性

- 专注计时（番茄工作法）
- 待办清单管理
- 数据记录与图表统计
- 白噪声背景音效
- 用户个性化设置

## 快速开始

...

## 技术栈

- 微信小程序原生开发
- WEUI + VanUI组件库
- wxcharts.js图表库

## 开源许可

MIT License

## 贡献指南

欢迎提交Issue和Pull Request！

```

### 5.3 添加Contributing指南（可选）

创建`CONTRIBUTING.md`：

```markdown
# 贡献指南

感谢你对TimeFocus的兴趣！

## 如何贡献

1. Fork这个仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个Pull Request

## 代码规范

- 遵循现有代码风格
- 添加必要的注释
- 确保不包含敏感信息
- 通过微信开发者工具测试

## 行为准则

保持友好、包容和专业的交流环境。
```

### 5.4 添加License文件（如果创建时未添加）

在项目根目录创建`LICENSE`文件：

```
MIT License

Copyright (c) 2024 TimeFocus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 六、GitHub仓库美化

### 6.1 设置仓库主题

1. 访问仓库页面
2. 点击右上角"Settings"
3. 滚动到"Features" → "Themes"
4. 选择主题颜色
5. 点击"Save"

### 6.2 添加仓库标签（Topics）

1. 在仓库首页，点击"About"右侧的"Add topics"
2. 添加相关标签：
   - `wechat-miniprogram`
   - `time-management`
   - `pomodoro-timer`
   - `weapp`
   - `focus-timer`
3. 点击"Save topics"

### 6.3 设置社交预览（Social Preview）

1. 仓库Settings → "Social preview"
2. 填写：
   - Short description：`TimeFocus专注时钟`
   - Website（可选）：你的博客或个人网站
3. 点击"Save"

---

## 七、常见Git操作命令

### 7.1 查看状态
```bash
git status
```

### 7.2 查看提交历史
```bash
git log --oneline
```

### 7.3 创建新分支
```bash
git checkout -b feature/new-feature
```

### 7.4 切换分支
```bash
git checkout main
```

### 7.5 合并分支
```bash
git merge feature/new-feature
```

### 7.6 拉取最新代码
```bash
git pull origin main
```

### 7.7 查看远程仓库
```bash
git remote -v
```

---

## 八、日常更新流程

### 8.1 修改代码后提交

```bash
# 1. 查看修改状态
git status

# 2. 添加修改的文件
git add .

# 3. 提交（使用有意义的提交信息）
git commit -m "feat: 添加夜间模式支持"

# 4. 推送到GitHub
git push origin main
```

### 8.2 提交信息规范

建议使用Conventional Commits规范：

```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 重构代码
perf: 性能优化
test: 测试相关
chore: 构建/工具相关
```

示例：
```bash
git commit -m "feat: 添加任务提醒功能"
git commit -m "fix: 修复计时器停止bug"
git commit -m "docs: 更新README部署指南"
```

---

## 九、处理常见问题

### 9.1 推送时提示"Updates were rejected"

**原因**：远程仓库有本地没有的新提交

**解决方法**：
```bash
git pull origin main --rebase
git push origin main
```

### 9.2 提示"fatal: remote origin already exists"

**原因**：已经关联过远程仓库

**解决方法**：
```bash
# 查看当前远程仓库
git remote -v

# 删除旧的关联
git remote remove origin

# 重新关联
git remote add origin https://github.com/yourusername/TimeFocus.git
```

### 9.3 提示"failed to push some refs"

**原因**：远程仓库有新提交

**解决方法**：
```bash
git pull origin main
# 解决冲突后再push
git push origin main
```

### 9.4 大文件上传失败

**原因**：GitHub限制单个文件不超过100MB

**解决方法**：
1. 将大文件移至.gitignore
2. 使用Git LFS（Large File Storage）
3. 或使用外部CDN存储

### 9.5 .gitignore不生效

**原因**：文件已被Git跟踪

**解决方法**：
```bash
# 清除缓存
git rm -r --cached .
git add .
git commit -m "chore: 更新gitignore"
```

---

## 十、GitHub进阶功能

### 10.1 创建GitHub Pages

1. 仓库Settings → "Pages"
2. 选择Branch：`main` → `/ (root)`
3. 点击"Save"
4. 访问：`https://yourusername.github.io/TimeFocus/`

### 10.2 设置GitHub Actions（自动化）

创建`.github/workflows/CI.yml`：

```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: echo "Running tests..."
```

### 10.3 创建Releases

1. 仓库右侧点击"Releases"
2. 点击"Create a new release"
3. 填写：
   - Tag version：`v1.0.0`
   - Release title：`TimeFocus v1.0.0`
   - Description：版本更新内容
4. 点击"Publish release"

### 10.4 添加Issues模板

创建`.github/ISSUE_TEMPLATE/bug_report.md`：

```markdown
---
name: Bug report
about: 报告一个问题
title: '[BUG] '
labels: bug
assignees: ''
---

**问题描述**
简要描述问题是什么

**复现步骤**
1. 进入'...'
2. 点击'....'
3. 滚动到'....'
4. 看到错误

**期望行为**
简要描述你期望发生的事情

**截图**
如有必要，添加截图来帮助解释问题

**环境信息**
- 微信开发者工具版本：[例如 1.06.2309020]
- 基础库版本：[例如 2.21.3]
- 设备型号：[例如 iPhone 12]
```

---

## 十一、推广你的开源项目

### 11.1 完善项目资料

- [x] 清晰的项目名称和描述
- [x] 详细的README文档
- [x] 适当的标签（Topics）
- [x] 开源许可证
- [x] 示例截图或演示
- [x] 贡献指南

### 11.2 分享到社区

1. **中文社区**：
   - 掘金：https://juejin.cn/
   - 知乎：https://www.zhihu.com/
   - V2EX：https://www.v2ex.com/

2. **国际社区**：
   - Reddit r/weapp：https://reddit.com/r/weapp/
   - Dev.to：https://dev.to/

3. **社交媒体**：
   - 微博
   - Twitter
   - 朋友圈

### 11.3 持续维护

- 及时回复Issue
- 审查和合并PR
- 定期更新代码
- 发布新版本Release
- 记录开发日志

---

## 十二、安全建议

### 12.1 保护敏感信息

**不要提交的内容**：
- ✗ 个人AppID（已移除）
- ✗ 第三方API密钥（已移除）
- ✗ 真实用户数据（已移除）
- ✗ 环境配置文件
- ✗ 临时文件和日志

**使用.gitignore**：
```gitignore
# 环境变量
.env
.env.local

# 配置文件（包含密钥）
config/secrets.js

# 日志
*.log
logs/
```

### 12.2 使用环境变量

```javascript
// config.js
module.exports = {
  appId: process.env.MINIPROGRAM_APP_ID || '',
  apiKey: process.env.API_KEY || ''
}
```

### 12.3 定期更新依赖

```bash
# 查看过时的依赖
npm outdated

# 更新依赖
npm update
```

---

## 十三、快速参考清单

### 13.1 首次上传检查清单

- [ ] Git已安装并配置
- [ ] GitHub账号已注册
- [ ] SSH密钥已配置（推荐）
- [ ] .gitignore文件已创建
- [ ] 所有敏感信息已移除
- [ ] README.md已完善
- [ ] License文件已添加
- [ ] 仓库已在GitHub创建
- [ ] 远程仓库已关联
- [ ] 代码已成功推送

### 13.2 日常维护检查清单

- [ ] 定期拉取最新代码
- [ ] 及时回复Issues
- [ ] 审查Pull Requests
- [ ] 更新文档
- [ ] 发布新版本
- [ ] 优化代码性能

---

## 十四、获取帮助

### 14.1 官方文档

- GitHub文档：https://docs.github.com/
- Git文档：https://git-scm.com/doc
- 微信小程序文档：https://developers.weixin.qq.com/miniprogram/dev/framework/

### 14.2 社区支持

- GitHub Community：https://github.community/
- Stack Overflow：https://stackoverflow.com/questions/tagged/github
- 微信社区：https://developers.weixin.qq.com/community/

### 14.3 常用命令速查表

```bash
# 初始化仓库
git init

# 克隆仓库
git clone https://github.com/user/repo.git

# 添加文件
git add .
git add filename

# 提交
git commit -m "message"

# 推送
git push origin main

# 拉取
git pull origin main

# 查看状态
git status

# 查看日志
git log --oneline

# 查看分支
git branch

# 创建分支
git checkout -b branch-name

# 切换分支
git checkout branch-name

# 合并分支
git merge branch-name

# 删除分支
git branch -d branch-name
```

---

## 结语

恭喜你完成TimeFocus项目的开源！🎉

现在你的项目已经公开在GitHub上，全球开发者都可以访问和贡献代码。记得定期维护项目，与社区互动，让它变得更好！

**你的项目地址**：https://github.com/yourusername/TimeFocus

**祝你开源顺利！** 🚀

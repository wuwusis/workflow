# Duoan 毛绒玩具官网

根据 [Figma 设计稿](https://www.figma.com/design/Zxd14XFYgQoU4d6zg88cX5/%E7%BD%91%E9%A1%B5?node-id=11-126) 实现的静态落地页，支持 **GitHub Pages** 免费托管。

## 在线访问

推送并开启 Pages 后，地址一般为：

`https://<你的用户名>.github.io/<仓库名>/`

## 部署到 GitHub（推荐）

### 1. 在 GitHub 新建仓库

在 https://github.com/new 创建仓库（例如 `duoan-plush-web`），**不要**勾选 “Add a README”。

### 2. 本地推送

```bash
cd /Users/apple/Documents/cursor/111

git init
git add .
git commit -m "Initial commit: Duoan landing page"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

或用 GitHub CLI 一步创建并推送：

```bash
cd /Users/apple/Documents/cursor/111
git init && git add . && git commit -m "Initial commit: Duoan landing page"
gh repo create duoan-plush-web --public --source=. --remote=origin --push
```

### 3. 开启 GitHub Pages

1. 打开仓库 → **Settings** → **Pages**
2. **Build and deployment** → Source 选 **GitHub Actions**
3. 推送 `main` 分支后，Actions 会自动部署（见 `.github/workflows/deploy-pages.yml`）
4. 约 1–2 分钟后在 Pages 设置页看到站点 URL

## 本地预览

```bash
python3 -m http.server 8080
```

浏览器打开 http://localhost:8080

## 项目结构

```
├── index.html
├── styles.css
├── script.js
├── assets/          # 图片资源
└── .github/workflows/deploy-pages.yml
```

## git 代理

```sh
# 设置代理
git config http.proxy http://127.0.0.1:7890
git config https.proxy http://127.0.0.1:7890

# 还原
git config --unset http.proxy
git config --unset https.proxy
```

## pnpm workspace

新建 `pnpm-workspace.yaml` 文件
在需要共享的目录下 执行 `pnpm add [项目名]` 该项目就会被软链到该项目下

## npm workspace

在 `package.json` 中以下配置, 执行 `npm i`, packages 中的目录都会被软链到 `node_modules` 中

```json
{
  "workspaces": ["packages/*"]
}
```

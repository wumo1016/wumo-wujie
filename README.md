## git 代理

```sh
# 设置代理
git config http.proxy http://127.0.0.1:7890
git config https.proxy http://127.0.0.1:7890

# 还原
git config --unset http.proxy
git config --unset https.proxy
```

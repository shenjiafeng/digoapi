# 说明

后端自动生成api.json,前端只需digo api,即可自动生成可视化接口文档。
目的是为了方便前后端接口格式的对接，减少沟通上的成本，能够让后端更多的处理数据上的逻辑缜密，前端更多的处理交互上的优化。

## 安装

步骤一: 安装node环境 (可参考:https://nodejs.org/en/download/)

步骤二: 执行本地包安装命令 （复制以下命令在命令行中执行）
``` javascript
git clone git@github.com:shenjiafeng/digoapi.git
cd digoapi
npm install cnpm -g
cnpm install
cnpm install digo -g
digo
```
## 更新接口
只需替换一下根目录下api.json，执行命令
``` javascript
digo
```

## 目录结构
- digoapi/api.json (后端生成的文档json)
- digoapi/libs/api/index.html (接口文档浏览器预览)
- digoapi/mock/  (生成的静态mock)

## 常见问题

Q: $ digo 命令执行执行不了或者报错

A: 解决方案如下
- 1.查看digo 是否正确安装，检查方式 $ digo -v  
- 2.查看digo 是否全局安装了 （$ cnpm install digo -g）
- 3.重新安装一遍cnpm 在执行以上命令 （$ cnpm install cnpm ）

注意：windows系统 ``执行命令后若没有自动打开`` 浏览器输入 `http://localhost:9090/`打开 或自行前往libs/api/index.html 点击打开

## 备注
安装cnpm (可参考：https://npm.taobao.org/)

``` javascript
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
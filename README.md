<div align=center>
  <h1>图片Api接口 v3.0</h1>
</div>

> 图片来源：https://pan.vmail.dev/r1/%F0%9F%A5%B5%E5%B0%8F%E5%A7%90%E5%A7%90%E7%9A%84%E5%AE%B6
>
> 如果喜欢请给仓库点个 star：https://github.com/oiov/photosapi
>
> 注意：**个人接口，仅供学习，请勿商用。图片收集不易，请珍惜食用。**

## 用户使用须知

### 调用方法

地址：`https://bed.mydog.buzz`

方法：`GET`

| url | 参数 | 值  | 必须 |
| --- | ---- | --- | ---- |
| /pb | p    | AAA | 是   |

### ajax 请求示例

```js
async fetchPhotos() {
    const res = await this.$http.get('https://bed.mydog.buzz/p?p=3')
    console.log(res)
},
```

示例 url：`https://bed.mydog.buzz/p?p=3`

返回值：

```js
res:{
	"code": 200,
	"data": {
		"currentPage": "2",
		"photoNum": 100,
		"photoList": [
			"https://p.mydog.buzz/v2/2/01.jpg",
		],
		"info": "图片来源于网络，仅供个人娱乐。仓库地址：https://github.com/oiov/photosapi"
	},
	"msg": "请求成功"
}

```

下面是测试，其他线路请自行尝试
[线路 1](https://p.mydog.buzz/v2/1/01.jpg)
[线路 2](https://p.mydog.buzz/v2/2/01.jpg)
[线路 3](https://p.mydog.buzz/v2/3/01.jpg)
[线路 4](https://p.mydog.buzz/v2/4/01.jpg)
[线路 8](https://p.mydog.buzz/v2/8/01.jpg)
[线路 14](https://p.mydog.buzz/v2/14/01.jpg)

---

## 开发者须知

如果你想基于本项目开发，可以参考以下意见：

- 使用 **PicGo**+**Github**+**jsdelive**r(CDN) 存储你的图片
- 使用 **[vuEgg-jwt-template](https://github.com/yesmore/vue-egg-jwt-template)** 中的 **egg-server** 管理作为你的 <u>Api</u> 服务器
- 或者直接`fork`本项目进行二次开发

**关于 PicGo**：

访问这里 [了解]()。

**关于 vuEgg-jwt-template**：

vuEgg-jwt-template 是本人的另一个开源项目，基于 Vue、Eggjs、Jwt 实现的开箱即用的用户鉴权模板，使开发人员专注于核心逻辑编写，了解 [详情](https://github.com/yesmore/vue-egg-jwt-template)。

**关于 CDN 加速**：

访问了解 [详情](https://www.jsdelivr.com/?docs=gh)。

### 快速开始

开始之前，请确保你有以下环境：

- Nodejs
- Npm（Nodejs 自带）
- MySQL 5.7.x

#### Clone git repo

```bash
# git bash
$ git clone git@github.com:yesmore/photosapi.git
# or http
$ git clone https://github.com/yesmore/photosapi.git
```

#### Install & Start

```bash
$ pnpm i
$ npm i -g vercel
# Start
$ vercel
```

## License

MIT

---

最后，晚安我的马马们。

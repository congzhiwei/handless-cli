# headless-cli 

node 抓取网络图片


## Install

```console
npm install headless-cli-test -g
```

## Usage

```bash

headless -v|--version 查看版本
headless -h|--help 查看帮助
headless s|start 启动程序
headless c|clean 清空输出目录中的图片
headless p|imgMin 压缩目录中的图片

// 压缩图片说明
headless p --help 查看帮助
headless p -k|--key [key] tinypng官网申请的key，必填
headless p -p|--path [path] 自定义检索路径，请填写绝对路径，默认取当前命令行目录下的/images路径

```

## Related

- [commander](https://www.npmjs.com/package/commander)
- [inquirer](https://www.npmjs.com/package/inquirer)
- [puppeteer](https://www.npmjs.com/package/puppeteer)


PS：参考其它githu源码 进行个人练习, 非商业

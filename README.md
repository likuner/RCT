# React组件模版生成器
## 简介
以命令行形式快速创建`react`组件模版的工具，并提供多个自定义选项。
## 安装
```
npm i -g @likun./rct
yarn global add @likun./rct
```
## 指令
`rct`
## 参数
| **参数** | **说明** | **示例** |
| --- | --- | --- |
| -n / --name | 组件名称 | rct --name ProductList |
| -p / --path | 组件存放目录 | rct --path ./src |
| -y / --yes | 无需其他参数，快速生成组件，可配合--name与--path使用 | rct --yes |
| -h / --help | 显示帮助 | rct --help |
| -V / --version | 显示帮助 | rct -V |

## 其他选项

- 组件类型：function / class
- 是否需要样式文件：y / n
- 样式文件类型：less / scss
- 是否需要路由信息：y / n
- 是否以文件夹形式创建：y / n

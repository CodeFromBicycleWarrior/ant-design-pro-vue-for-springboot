# ant-design-pro-vue-for-springboot
使用springboot作为ant-design-pro-vue的后端服务

传送门 https://github.com/sendya/ant-design-pro-vue

## 一些环境
- Spring Boot 2.1.3.RELEASE
- Maven
- MySQL

## 项目结构
- front 前端项目（ant-design-pro-vue）
- server 后端项目（Spring Boot实现）

## 编译与运行
#### 前端
- 参考原项目，使用`yarn run build`进行编译
- build完成后前端项目路径下`dist`目录中的内容copy到后端资源目录static下覆盖
  说明: 后端已存在的项目为2019.02.19拉取的master版本（您可以替换成稳定的release版本）

#### 后端
- 导入maven项目到IDEA中，等待自动导入、编译完成，运行`AntdVueApplication`即可

#### 预览
- Spring Boot启动后，访问 http://localhost:8080

### TODO LIST

1. 初始化项目，使用Spring Boot作为后端接口（2019.02.20）
2. 数据库脚本、对象等，实现前端<->后端<->数据库的交互


## 更新记录及说明

- 2019.02.20 初始化项目，通过json提供mock数据（mock数据绑定参数待完善）

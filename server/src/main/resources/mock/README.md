# mock
- mock目录对应的是前端访问的接口URL
- 每个json文件对应一个请求
- 原理：利用AOP切面对controller下面的方法进行拦截，如果接口匹配到对应的mock文件，则直接返回json数据
- eg: 请求URL为`api/user/info`，对应返回的json文件为`api/user/info.json`

# TODO
- mock绑定输入参数、通过一些语法、关键字实现动态数据等（参考其他mock实现，有点难度）
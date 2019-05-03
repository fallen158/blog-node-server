# blog-node-server

Koa2 编写的 blog 后端

## mysql 数据库 和 Redis 配置文件

#### conf/db.js 是配置文件，格式如下

```
const env = process.env.NODE_ENV || 'dev'; // 获取环境变量

// 配置
let MYSQL_CONF;
let REDIS_CONF;

// 本地环境
if (env === 'dev') {
    MYSQL_CONF = {
    host: '服务器ip地址',
    user: '用户名',
    password: '密码',
    port: '端口',
    database: '数据库'
    };

    REDIS_CONF = {
    port: 端口,
    host: '服务器地址'
    };
}

// 线上环境
if (env === 'production') {
    MYSQL_CONF = {
    host: '服务器ip地址',
    user: '用户名',
    password: '密码',
    port: '端口',
    database: '数据库'
    };

    REDIS_CONF = {
    port: 端口,
    host: '服务器地址'
    };
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
};

```

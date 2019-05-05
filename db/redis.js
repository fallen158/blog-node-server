const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const { REDIS_CONF } = require('../conf/db')
const sessionConf = session({
  // 配置 cookie
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 7000
  },
  // 配置 redis
  store: redisStore({
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
})

module.exports = sessionConf

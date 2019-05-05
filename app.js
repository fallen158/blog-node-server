const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const sessionConf = require('./db/redis.js')
const users = require('./routes/users')
const blog = require('./routes/blog')

// error handler
onerror(app)

// middleware
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text']
  })
)
app.use(json())
app.use(logger())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.keys = ['APNG@#_8932jbhdjsa_!ds139821DKLSPCCNOP22705246122814837']
app.use(sessionConf)
// routes
app.use(users.routes(), users.allowedMethods())
app.use(blog.routes(), blog.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app

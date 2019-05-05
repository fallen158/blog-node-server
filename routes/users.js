const Router = require('koa-router')
const router = new Router({ prefix: '/api/user' })
const { register, login } = require('../controller/user')
const { ErrorModel } = require('../model/resModel')

router.post('/login', async ctx => {
  try {
    const { username, password } = ctx.request.body
    const data = await login(username, password)
    if (data.data) {
      ctx.session.username = data.data.username
      ctx.session.realname = data.data.realname
    }
    ctx.body = data
  } catch (error) {
    ctx.status = 500
    ctx.body = new ErrorModel('服务器错误')
  }
})

router.post('/register', async ctx => {
  try {
    const { username, password } = ctx.request.body
    const result = await register(username, password)
    ctx.body = result
  } catch (error) {
    ctx.status = 500
    ctx.body = new ErrorModel('服务器错误')
  }
})

module.exports = router

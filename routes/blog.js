const Router = require('koa-router')
const router = new Router({ prefix: '/api/blog' })

router.get('/list', async ctx => {
  // console.log(getClientIP(ctx.request));
  ctx.body = 'this is a users response!'
})

router.get('/new', async ctx => {
  // console.log(getClientIP(ctx.request));
  ctx.body = 'this is a users response!'
})

router.get('/del', async ctx => {
  // console.log(getClientIP(ctx.request));
  ctx.body = 'this is a users response!'
})

router.get('/update', async ctx => {
  // console.log(getClientIP(ctx.request));
  ctx.body = 'this is a users response!'
})

router.get('/detail', async ctx => {
  // console.log(getClientIP(ctx.request));
  ctx.body = 'this is a users response!'
})

module.exports = router

const Router = require('koa-router');
const router = new Router({ prefix: '/api/blog' });

router.get('/', async ctx => {
  // console.log(getClientIP(ctx.request));
  ctx.body = 'this is a users response!';
});

module.exports = router;

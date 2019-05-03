const Router = require('koa-router');
const router = new Router({ prefix: '/api/user' });
const { SussesMode, ErrorMode } = require('../model/resModel');
const { register, login } = require('../controller/user');

router.get('/', async (ctx, next) => {
  ctx.body = 'this is a users response!';
});

router.post('/login', async ctx => {
  const { username, password } = ctx.request.body;
  const data = await register(username, password);
  if (data) {
    ctx.body = new SussesMode('注册成功');
  }
});

router.post('/register', async ctx => {
  const { username, password } = ctx.request.body;
  const data = await register(username, password);
  if (data) {
    ctx.body = new SussesMode('注册成功');
    return;
  }
  ctx.body = new ErrorMode('注册失败');
});

module.exports = router;

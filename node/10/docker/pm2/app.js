const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  // 随机产生错误
  Math.random() > 0.9 ? aaa() : '2'
  ctx.body = `<h1>hello koa2</h1>`
})

app.listen(3000, () => {
  console.log('app listen at 3000')
})

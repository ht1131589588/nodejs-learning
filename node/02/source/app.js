const Koa = require('./Koa')

const app = new Koa()

// app.use((req, res) => {
//   res.writeHead(200)
//   res.end('hi kaikeba')
// })

app.use(ctx => {
  ctx.body = 'haha'
})

app.listen(3000, () => {
  console.log('server at 3000')
})

import * as Koa from 'koa'
import * as bodify from 'koa-body'
import * as serve from 'koa-static'
import * as timing from 'koa-xtime'
import { Sequelize } from 'sequelize-typescript'

const database = new Sequelize({
  port: 3306,
  database: 'test',
  username: 'hutao',
  password: 'hutao123',
  dialect: 'mysql',
  modelPaths: [`${__dirname}/model`]
})
database.sync({ force: true })

const app = new Koa()

app.use(timing())
app.use(serve(`${__dirname}/public`))
app.use(
  bodify({
    multipart: true,
    // 使用非严格模式，解析delete请求的请求体
    strict: false
  })
)

// app.use((ctx: Koa.Context) => {
//   ctx.body = 'hello '
// })
import { load } from './utils/route-decors'
import { resolve } from 'path'
const router = load(resolve(__dirname, './routes'))

app.use(router.routes())

app.listen(3000, () => {
  console.log('服务器启动成功')
})

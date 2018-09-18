const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const path = require('path');

let pageHome = '';

const indexPath = path.join(__dirname,'../client', 'index.html')
console.log(indexPath)
fs.readFile(indexPath, (err, data) => {
  if (err) {
    pageHome = '打开网页失败'
  } else {
    pageHome = data.toString();
  }
})

app.use(async (ctx) => {
  ctx.body = pageHome
})

app.listen(8078)
console.log('[demo] start-quick is starting at port 8078')
const fs = require('fs')
const cp = require('child_process')

cp.execFileSync('./clean.sh')

const ws = fs.createWriteStream('openssl.cnf')
const rs = fs.createReadStream('openssl.cnf.base')

const writeSANs = () => {
  let i = 2

  while (i < 128) {
    ws.write(
      `DNS.${i - 1} = ${
        '*'
        .repeat(i)
        .split('')
        .join('.')
      }\n`
    )
    i++
  }
}

rs.pipe(ws, { end: false })

rs.on('end', () => {
  writeSANs()

  ws.on('finish', () => {
    cp.execFileSync('./run-openssl.sh')
  })

  ws.end()
})

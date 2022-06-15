const path = require('path')
const fse = require('fs-extra')
const { exec } = require('child_process')

const rollup = exec('npm run rollup:dev')
const hugo = exec('npm run hugo')

fse.copySync(path.join(__dirname, 'assets'), path.join(__dirname, 'static'))

hugo.stdout.on('data', (data) => console.log(data))
rollup.stdout.on('data', (data) => console.log(data))
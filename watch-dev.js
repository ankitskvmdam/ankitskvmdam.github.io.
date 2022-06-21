const path = require("path")
const fse = require("fs-extra")
const { exec } = require("child_process")

const rollup = exec("npm run rollup:dev")
const hugo = exec("npm run hugo")

const assets = path.join(__dirname, "assets")
const staticDir = path.join(__dirname, "static")

if (fse.existsSync(assets)) {
    fse.copySync(assets, staticDir)
}

hugo.stdout.on("data", (data) => console.log(data))
rollup.stdout.on("data", (data) => console.log(data))

const path = require("path")
const fs = require("fs-extra")
const { execSync } = require("child_process")

// clone and process clean-jsdoc=theme
function cloneAndProcessCleanJSDocTheme() {
    const cleanJSDocPath = path.join("public", "clean-jsdoc-theme")

    const cloneCommand = [
        "git",
        "clone",
        "--depth",
        "1",
        "--single-branch",
        "-b",
        "production",
        "https://github.com/ankitskvmdam/clean-jsdoc-theme.git",
        cleanJSDocPath,
    ].join(" ")

    execSync(cloneCommand)

    // remove all dir other than output
    const dirs = fs.readdirSync(cleanJSDocPath)
    dirs.forEach(function (dir) {
        if (dir !== "output") {
            fs.rmSync(path.join(cleanJSDocPath, dir), { recursive: true })
        }
    })

    // move content of output out of it
    fs.copySync(path.join(cleanJSDocPath, "output"), cleanJSDocPath)

    // remove output folder
    fs.rmSync(path.join(cleanJSDocPath, "output"), { recursive: true })
}

// Build js and css
execSync("npm run rollup:build")

// Build site
execSync("hugo")

cloneAndProcessCleanJSDocTheme()

import fs from "fs-extra"

export default (dirs) => {
    for (const dir of dirs) {
        if (fs.existsSync(dir)) {
            fs.copySync(dir.src, dir.dest)
        }
    }
}

import fs from 'fs-extra'

export default (dirs) => {
    for (const dir of dirs) {
        fs.copySync(dir.src, dir.dest)
    }
}
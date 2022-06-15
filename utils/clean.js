import fs from 'fs'

export default (dirs) => {
    dirs.forEach((dir) => {
        fs.rmSync(dir, { recursive: true })
    })
}
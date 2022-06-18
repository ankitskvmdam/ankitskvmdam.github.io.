import fs from 'fs'

export default (dirs) => {
    dirs.forEach((dir) => {
        if(fs.existsSync(dir)) {
            fs.rmSync(dir, { recursive: true })
        }
    })
}
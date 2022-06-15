import path from 'path'
import fs from 'fs'

const root = path.join(__dirname, '..')
const dataDir = path.join(root, 'src', 'data')
const fileName = path.join(dataDir, 'url.json')

export default (js, css) => {
    const data = {
        "main.js": js,
        "style.css": css
    }

    fs.writeFileSync(fileName, JSON.stringify(data), 'utf8')
}

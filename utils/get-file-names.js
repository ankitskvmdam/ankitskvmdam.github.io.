import { randomUUID, createHash } from 'crypto'


export default (FILE_NAME) => {
    const hash = createHash('md5').update(randomUUID()).digest('hex').substring(0, 10)

    return {
        js: FILE_NAME.js('', hash),
        css: FILE_NAME.css('', hash)
    }
}

import path from 'path'
import scss from 'rollup-plugin-scss';
import { uglify } from "rollup-plugin-uglify";
import { randomUUID, createHash } from 'crypto'

import defaultConfig, { OPTIONS, FILE_NAME, staticDir } from "./default.config";
import writeUrl from '../utils/write-url';

const hash = createHash('md5').update(randomUUID()).digest('hex').substring(0, 10)

const jsFile = FILE_NAME.js('', hash)
const cssFile = FILE_NAME.css('', hash)

writeUrl(jsFile, cssFile)

export default {
    ...defaultConfig,
    output: {
        ...defaultConfig.output,
        file: path.join(staticDir, jsFile)
    },
    plugins: [uglify(), scss({
        ...OPTIONS.SCSS,
        outputStyle: 'compressed',
        output: path.join(staticDir, cssFile)
    })],
};

import path from 'path';
import fs from 'fs';
import scss from 'rollup-plugin-scss';
import { uglify } from "rollup-plugin-uglify";

import { OPTIONS, FILE_NAME, staticDir, assets } from "./constants";
import writeUrl from '../utils/write-url';
import getFileNames from '../utils/get-file-names'
import clean from '../utils/clean'
import copy from '../utils/copy'

if (fs.existsSync(staticDir)) {
    clean([staticDir])
}

fs.mkdirSync(staticDir)

copy([{ src: assets, dest: staticDir }])


const { js, css } = getFileNames(FILE_NAME)
writeUrl(js, css)


export default {
    input: OPTIONS.input,
    output: {
        format: OPTIONS.outputFormat,
        file: path.join(staticDir, js)
    },
    plugins: [uglify(), scss({
        ...OPTIONS.SCSS,
        outputStyle: 'compressed',
        output: path.join(staticDir, css)
    })],
};

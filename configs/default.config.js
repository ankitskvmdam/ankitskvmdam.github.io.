import path from 'path'
import fs from 'fs'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

import clean from '../utils/clean'
import copy from '../utils/copy'

export const root = path.join(__dirname, '..')
export const scripts = path.join(root, 'src', 'scripts')
export const styles = path.join(root, 'src', 'styles')
export const staticDir = path.join(root, 'src', 'static')
export const assets = path.join(root, 'src', 'assets')
export const entry = path.join(scripts, 'main.js')


clean([staticDir])
fs.mkdirSync(staticDir)
copy([{ src: assets, dest: staticDir }])

export const FILE_NAME = {
    css: (prefix = '', suffix = '') => prefix + 'style' + suffix + '.css',
    js: (prefix = '', suffix = '') => prefix + 'bundle' + suffix + '.js',
}

export const OPTIONS = {
    SCSS: {
        output: path.join(staticDir, FILE_NAME.css()),
        processor: () => postcss([autoprefixer()]),
    }
}

export default {
    input: entry,
    output: {
        file: path.join(staticDir, FILE_NAME.js()),
        format: 'umd'
    },
    plugins: [scss(OPTIONS.SCSS)]
};
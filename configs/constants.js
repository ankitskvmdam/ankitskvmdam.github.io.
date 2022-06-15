import path from 'path'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

export const root = path.join(__dirname, '..')
export const scripts = path.join(root, 'scripts')
export const styles = path.join(root, 'styles')
export const staticDir = path.join(root, 'static')
export const assets = path.join(root, 'assets')
export const entry = path.join(scripts, 'main.js')

export const FILE_NAME = {
    css: (prefix = '', suffix = '') => prefix + 'style' + suffix + '.css',
    js: (prefix = '', suffix = '') => prefix + 'bundle' + suffix + '.js',
}

export const OPTIONS = {
    SCSS: {
        processor: () => postcss([autoprefixer()]),
    },
    input: entry,
    outputFormat: 'umd'
}

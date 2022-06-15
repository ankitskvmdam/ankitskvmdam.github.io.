import scss from 'rollup-plugin-scss'
import writeUrl from '../utils/write-url';

import defaultConfig, { OPTIONS, styles, FILE_NAME, assets, staticDir } from './default.config'
import watch from '../utils/watch'

writeUrl(FILE_NAME.js(), FILE_NAME.css())
watch([{
    src: assets,
    dest: staticDir
}])

export default {
    ...defaultConfig,
    plugins: [
        scss({ ...OPTIONS.SCSS, watch: styles })
    ]
};
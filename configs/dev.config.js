import path from 'path'
import scss from 'rollup-plugin-scss';

import { OPTIONS, FILE_NAME, staticDir, styles, assets } from "./constants";
import writeUrl from '../utils/write-url';
import watch from '../utils/watch'


writeUrl(FILE_NAME.js(), FILE_NAME.css())

watch([{
    src: assets,
    dest: staticDir
}])

export default {
    input: OPTIONS.input,
    output: {
        file: path.join(staticDir, FILE_NAME.js()),
        format: OPTIONS.outputFormat
    },
    watch: true,
    plugins: [scss({
        ...OPTIONS.SCSS,
        output: path.join(staticDir, FILE_NAME.css()),
        watch: styles
    })],
};

import watch from 'node-watch';
import copy from './copy';


export default (dirs) => {
    for (const dir of dirs) {
        watch(dir.src, { recursive: true }, function (evt, name) {
            console.log('%s changed.', name);
            copy([dir])
        });
    }
}
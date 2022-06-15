(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    const world = (word) => {
        return 'world ' + word
    };

    function hello() {
        console.log(world('Hello'));
    }

    hello();

}));

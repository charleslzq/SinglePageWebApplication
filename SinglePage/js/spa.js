/**
 * Created by Charles on 2016/8/16.
 */

var spa = (function () {
    var initModule = function ($container) {
        $container.html(
            '<h1 style="display:inline-block; margin:25px;">'
            + 'hello world!'
            + '</h1>'
        );
    };

    return {initModule:initModule}
}())

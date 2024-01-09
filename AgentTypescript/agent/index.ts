import { log, cclog } from './logger.js';
import { StdString } from './common/StdString.js';
import { CustomNativeFunction } from './nativefunctions.js';

let firstRun = true;

Interceptor.attach(CustomNativeFunction.ccGLRenderScenePointer, {
    onEnter: function (args) {
        if (firstRun) {
            firstRun = false;
            var currentScene = args[0].readPointer();
            console.log(currentScene);
            var sprite = CustomNativeFunction.ccSpriteCreate(Memory.allocUtf8String("bgloading.jpg"));
            console.log(sprite);
            //CustomNativeFunction.ccNodeAddChild(currentScene, sprite, 100);
            
        }
    },
    onLeave: function (retval) {
    }
});

Interceptor.attach(CustomNativeFunction.ccSpriteCreatePointer, {
    onEnter: function (args) {
        log(new StdString(args[0]).getStdString() ?? '');
    },
    onLeave: function (retval) {
    }
});

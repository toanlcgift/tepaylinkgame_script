import { log, cclog } from './logger.js';
import { StdString } from './common/StdString.js';

let firstRun = true;

Interceptor.attach(Module.getExportByName('libMyGame.so', '_ZN7cocos2d6GLView11renderSceneEPNS_5SceneEPNS_8RendererE') ?? new NativePointer(0x00), {
    onEnter: function (args) {
        if (firstRun) {
            firstRun = true;
            var currentScene = args[0].readPointer();
            console.log(currentScene);
            var createSpriteFunc = Module.findExportByName('libMyGame.so', '_ZN7cocos2d6Sprite6createERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE') ?? new NativePointer(0x00);
            var createSpriteFunctionCall = new NativeFunction(createSpriteFunc, 'pointer', ['pointer']);
            var sprite = createSpriteFunctionCall((new StdString(Memory.allocUtf8String("bgloading.jpg")).bufAddr));
            console.log(sprite);
            var addChildFunc = Module.findExportByName('libMyGame.so', '_ZN7cocos2d4Node8addChildEPS0_i') ?? new NativePointer(0x00);
            var addChildFuncCall = new NativeFunction(addChildFunc, 'uint', ['pointer', 'pointer', 'int']);
            addChildFuncCall(currentScene, sprite, 100);
        }
    },
    onLeave: function (retval) {
    }
});

Interceptor.attach(Module.getExportByName('libMyGame.so', '_ZN7cocos2d6Sprite6createERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE') ?? new NativePointer(0x00), {
    onEnter: function (args) {
        log(new StdString(args[0]).getStdString() ?? '');
    },
    onLeave: function (retval) {
    }
});

const BUF_SIZE = 16;

class StdString {
    addr: NativePointer;
    constructor(addr: NativePointer) {
        this.addr = addr;
    }

    get bufAddr() {
        if (this.reservedSize.compare(16) > 0) {
            return this.addr.readPointer();
        } else {
            return this.addr;
        }
    }

    get size() {
        return this.addr.add(BUF_SIZE).readPointer();
    }

    get reservedSize() {
        return this.addr.add(BUF_SIZE).add(Process.pointerSize).readPointer();
    }

    toString() {
        const size = this.size;
        if (size.isNull()) {
            return "<EMPTY std::string>";
        }
        return this.bufAddr.readCString(size.toInt32());
    }
}


var i = 0;

 function getStdString(input: NativePointer): string | null {
    var isTiny = (input.readU8() & 1) === 0;
    if (isTiny) {
        return input.add(1).readUtf8String();
    }
    return input.add(2 * Process.pointerSize).readPointer().readUtf8String();
}

Interceptor.attach(Module.getExportByName('libMyGame.so', '_ZN7cocos2d6GLView11renderSceneEPNS_5SceneEPNS_8RendererE') ?? new NativePointer(0x00), {
    onEnter: function (args) {
        if (i++ == 0) {
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
        console.log(getStdString(args[0]));
    },
    onLeave: function (retval) {
    }
});

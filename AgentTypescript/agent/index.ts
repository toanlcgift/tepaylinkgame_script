var didHookApis = false;
Interceptor.attach(Module.findExportByName(null, 'dlopen') ?? new NativePointer(0x00), {
    onEnter: function (args) {
        console.log(args[0].readUtf8String());
        this.path = args[0].readUtf8String();
    },
    onLeave: function (retval) {
        if (!retval.isNull() && this.path.indexOf('libMyGame.so') !== -1 && !didHookApis) {
            didHookApis = true;
            console.log("File loaded hooking");
            hooknative2();
            // ...
        }
    }
});

function hooknative2() {
    console.log("hooknative2");
}
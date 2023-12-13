Java.perform(function () {
    const System = Java.use('java.lang.System');
    const Runtime = Java.use('java.lang.Runtime');
    const SystemLoad_2 = System.loadLibrary.overload('java.lang.String');
    const VMStack = Java.use('dalvik.system.VMStack');

    SystemLoad_2.implementation = function (library: any) {
        send("Loading dynamic library => " + library);
        try {
            const loaded = Runtime.getRuntime().loadLibrary0(VMStack.getCallingClassLoader(), library);
            if (library === 'MyGame') {
                console.log("found lib, but cannot get module address");
            }
            return loaded;
        } catch (ex) {
            console.log(ex);
        }
    };
});

var didHookApis = false;
Interceptor.attach(Module.getExportByName('libnb.so', 'NativeBridgeItf') ?? new NativePointer(0x00), {
    onEnter: function (args) {
        console.log("libnb");
        console.log(args[0].readUtf8String());
        this.path = args[0].readUtf8String();
    },
    onLeave: function (retval) {
    }
});

Process.enumerateModules().filter(x => x.name == 'libnb.so')[0].enumerateExports()

function hooknative2() {
    console.log("hooknative2");
}
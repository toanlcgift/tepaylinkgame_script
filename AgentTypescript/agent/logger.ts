export function log(message: string): void {
    console.log(message);
}

export function cclog(message: string): void {
    var logFunctionAddr = Module.findExportByName('libMyGame.so', '_ZN7cocos2d3logEPKcz') ?? new NativePointer(0x00);
    var logFunctionCall = new NativeFunction(logFunctionAddr, 'void', ['pointer']);
    var value = Memory.allocUtf8String(message);
    logFunctionCall(value);
}

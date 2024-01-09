

var getVersionFunctionAddr = Module.findExportByName('libMyGame.so', '_ZN7cocos2d14cocos2dVersionEv') ?? new NativePointer(0x00);
var getVersionFunctionCall = new NativeFunction(getVersionFunctionAddr, 'pointer', []);
console.log(getVersionFunctionCall().readUtf8String());

var directorGetInstance = Module.findExportByName('libMyGame.so', '_ZN7cocos2d8Director11getInstanceEv') ?? new NativePointer(0x00);
var directorGetInstanceCall = new NativeFunction(directorGetInstance, 'pointer', []);
var instancePtr = directorGetInstanceCall();
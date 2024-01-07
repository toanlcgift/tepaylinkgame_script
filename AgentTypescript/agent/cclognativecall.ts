var logFunctionAddr = Module.findExportByName('libMyGame.so', '_ZN7cocos2d3logEPKcz') ?? new NativePointer(0x00);
var logFunctionCall = new NativeFunction(logFunctionAddr, 'void', ['pointer']);
var value = Memory.allocUtf8String("cocos log function called!");
logFunctionCall(value);

var getVersionFunctionAddr = Module.findExportByName('libMyGame.so', '_ZN7cocos2d14cocos2dVersionEv') ?? new NativePointer(0x00);
var getVersionFunctionCall = new NativeFunction(getVersionFunctionAddr, 'pointer', []);
console.log(getVersionFunctionCall().readUtf8String());

var directorGetInstance = Module.findExportByName('libMyGame.so', '_ZN7cocos2d8Director11getInstanceEv') ?? new NativePointer(0x00);
var directorGetInstanceCall = new NativeFunction(directorGetInstance, 'pointer', []);
var instancePtr = directorGetInstanceCall();

//var pauseFunc = Module.findExportByName('libMyGame.so', '_ZN7cocos2d8Director8popSceneEv') ?? new NativePointer(0x00);
//var pauseFuncCall = new NativeFunction(pauseFunc, 'void', ['pointer']);
//pauseFuncCall(instancePtr);
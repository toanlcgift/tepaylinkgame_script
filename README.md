# tepaylinkgame_script

my research using frida to hook into game's lua engine

Target app was written in Cocos2dx

### hooking method:

Android:
- because this game is compatible with LDPlayer emulator, which using libhoudini - an ARM translation layer for android developed by Intel and Google to run ARM apps on x86 architecture, so my target is hooking on this lib first...
- frida is not officially support, tried --realm option but not working, no problem.
- I have tried cheat engine server, look likes not compatible also (CE hangs)

![image](https://github.com/toanlcgift/tepaylinkgame_script/assets/12400049/d706547d-4db1-4b90-98e8-0af6b8f80ae9)

  The big issue is that LDPlayer is based on x86_64 and this app only support arm64-v8a, armeabi-v7a. => when having a good solution, I'll PR for frida & ceserver
  
- solution: using frida-gadget-arm.so in embedded mode, libhoudini will load arm lib on x86_64 device. I use LIEF as injection tool. Cheat engine server would be loaded as well as frida-gadget.

### Native call

- call <b>cocos2d::log(char const*, ...)</b> function
``` javascript

var logFunctionAddr = Module.findExportByName('libMyGame.so', '_ZN7cocos2d3logEPKcz') ?? new NativePointer(0x00);
var logFunctionCall = new NativeFunction(logFunctionAddr, 'void', ['pointer']);
var value = Memory.allocUtf8String("cocos log function called!");
logFunctionCall(value);

```
the output:

![image](https://github.com/toanlcgift/tepaylinkgame_script/assets/12400049/f659208d-f3fe-41bb-916f-a6abe715f811)

- read cocos version, it's cocos2d-x-4.0
 
  ![image](https://github.com/toanlcgift/tepaylinkgame_script/assets/12400049/0d6361e9-4980-4f9f-8e5d-a97d90c0c868)

IOS:
- seem more easier, not implement yet. 

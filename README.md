# tepaylinkgame_script

my research using frida to hook into game's lua engine

Target app was written in Cocos2dx

### hooking method:

Android:
- because this game is compatible with LDPlayer emulator, which using libhoudini - an ARM translation layer for android developed by Intel and Google to run ARM apps on x86 architecture, so my target is hooking on this lib first...

IOS:
- seem more easier, not implement yet. 

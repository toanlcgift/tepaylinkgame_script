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

IOS:
- seem more easier, not implement yet. 

📦
1040 /agent/index.js
528 /agent/common/StdString.js
222 /agent/logger.js
✄
import{log as e}from"./logger.js";import{StdString as t}from"./common/StdString.js";let o=!0;Interceptor.attach(Module.getExportByName("libMyGame.so","_ZN7cocos2d6GLView11renderSceneEPNS_5SceneEPNS_8RendererE")??new NativePointer(0),{onEnter:function(e){if(o){o=!0;var n=e[0].readPointer();console.log(n);var r=Module.findExportByName("libMyGame.so","_ZN7cocos2d6Sprite6createERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE")??new NativePointer(0),i=new NativeFunction(r,"pointer",["pointer"])(new t(Memory.allocUtf8String("bgloading.jpg")).bufAddr);console.log(i);var a=Module.findExportByName("libMyGame.so","_ZN7cocos2d4Node8addChildEPS0_i")??new NativePointer(0);new NativeFunction(a,"uint",["pointer","pointer","int"])(n,i,100)}},onLeave:function(e){}}),Interceptor.attach(Module.getExportByName("libMyGame.so","_ZN7cocos2d6Sprite6createERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE")??new NativePointer(0),{onEnter:function(o){e(new t(o[0]).getStdString()??"")},onLeave:function(e){}});
✄
export class StdString{constructor(r){this.addr=r}get bufAddr(){return this.reservedSize.compare(16)>0?this.addr.readPointer():this.addr}get size(){return this.addr.add(16).readPointer()}get reservedSize(){return this.addr.add(16).add(Process.pointerSize).readPointer()}toString(){const r=this.size;return r.isNull()?"<EMPTY std::string>":this.bufAddr.readCString(r.toInt32())}getStdString(){return 0==(1&this.addr.readU8())?this.addr.add(1).readUtf8String():this.addr.add(2*Process.pointerSize).readPointer().readUtf8String()}}
✄
export function log(o){console.log(o)}export function cclog(o){var e=Module.findExportByName("libMyGame.so","_ZN7cocos2d3logEPKcz")??new NativePointer(0);new NativeFunction(e,"void",["pointer"])(Memory.allocUtf8String(o))}
📦
632 /agent/index.js.map
348 /agent/index.js
✄
{"version":3,"file":"index.js","names":["didHookApis","Interceptor","attach","Module","findExportByName","NativePointer","onEnter","args","console","log","readUtf8String","this","path","onLeave","retval","isNull","indexOf"],"sourceRoot":"C:/Repo/tepaylinkgame_script/AgentTypescript/agent/","sources":["index.ts"],"mappings":"AAAA,IAAIA,GAAc,EAClBC,YAAYC,OAAOC,OAAOC,iBAAiB,KAAM,WAAa,IAAIC,cAAc,GAAO,CACnFC,QAAS,SAAUC,GACfC,QAAQC,IAAIF,EAAK,GAAGG,kBACpBC,KAAKC,KAAOL,EAAK,GAAGG,iBACpBF,QAAQC,IAAIE,KAAKC,KACrB,EACAC,QAAS,SAAUC,GACVA,EAAOC,WAAmD,IAAvCJ,KAAKC,KAAKI,QAAQ,iBAA2BhB,IACjEA,GAAc,EACdQ,QAAQC,IAAI,uBAQpBD,QAAQC,IAAI,eAJZ"}
✄
var o=!1;Interceptor.attach(Module.findExportByName(null,"dlopen")??new NativePointer(0),{onEnter:function(o){console.log(o[0].readUtf8String()),this.path=o[0].readUtf8String(),console.log(this.path)},onLeave:function(e){e.isNull()||-1===this.path.indexOf("libMyGame.so")||o||(o=!0,console.log("File loaded hooking"),console.log("hooknative2"))}});
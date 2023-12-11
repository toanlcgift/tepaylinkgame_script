📦
645 /agent/index.js.map
348 /agent/index.js
214 /agent/logger.js.map
38 /agent/logger.js
✄
{"version":3,"file":"index.js","names":["log","Process","getModuleByName","enumerateExports","slice","forEach","exp","index","name","Interceptor","attach","Module","getExportByName","onEnter","args","path","readUtf8String","rpc","exports","logvaluefunc"],"sourceRoot":"C:/Repo/tepaylinkgame_script/AgentTypescript/agent/","sources":["index.ts"],"mappings":"cAASA,MAAW,cAEpBA,EAAI,WAMJC,QAAQC,gBAAgB,gBACnBC,mBACAC,MAAM,EAAG,IACTC,SAAQ,CAACC,EAAKC,KACXP,EAAI,UAAUO,MAAUD,EAAIE,OAAO,IAG3CC,YAAYC,OAAOC,OAAOC,gBAAgB,KAAM,QAAS,CACrD,OAAAC,CAAQC,GACJ,MAAMC,EAAOD,EAAK,GAAGE,iBACrBhB,EAAI,gBAAgBe,KACxB,IAGJE,IAAIC,QAAU,CACVC,aAnBJ,WACInB,EAAI,gBACR"}
✄
import{log as e}from"./logger.js";e("success"),Process.getModuleByName("libMyGame.so").enumerateExports().slice(0,16).forEach(((o,t)=>{e(`export ${t}: ${o.name}`)})),Interceptor.attach(Module.getExportByName(null,"open"),{onEnter(o){const t=o[0].readUtf8String();e(`open() path="${t}"`)}}),rpc.exports={logvaluefunc:function(){e("logvalue run!")}};
✄
{"version":3,"file":"logger.js","names":["log","message","console"],"sourceRoot":"C:/Repo/tepaylinkgame_script/AgentTypescript/agent/","sources":["logger.ts"],"mappings":"OAAM,SAAUA,IAAIC,GAChBC,QAAQF,IAAIC,EAChB"}
✄
export function log(o){console.log(o)}
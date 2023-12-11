import { log } from "./logger.js";

log("success");

function logvalue() {
    log("logvalue run!");
}

Process.getModuleByName("libMyGame.so")
    .enumerateExports()
    .slice(0, 16)
    .forEach((exp, index) => {
        log(`export ${index}: ${exp.name}`);
    });

Interceptor.attach(Module.getExportByName(null, "open"), {
    onEnter(args) {
        const path = args[0].readUtf8String();
        log(`open() path="${path}"`);
    }
});

rpc.exports = {
    logvaluefunc: logvalue
};

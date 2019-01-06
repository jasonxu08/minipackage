import * as log4js from "log4js";

let logger =  log4js.getLogger("minipackage");
logger.level = "debug";

log4js.configure({
    appenders: { 
        minipackage_logs: {type: 'file', filename: "minipackage_logs.log"},
        console: {type: "console"}
},
    categories: {default: { appenders: ["minipackage_logs", "console"], level: "debug"}}
});

export {logger};
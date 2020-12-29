const init = require("./src/events");

let command = undefined;
let args = process.argv;

if(args[0].includes("node")){
    args.shift();
}

if(args.length != 1){
    command = args.slice(1).join(" ");
}

(async () => {
    await init(command);
})();
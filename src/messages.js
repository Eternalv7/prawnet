const peers = require("./peers");
const exec = require('child_process').exec;

function handle(input) {
    let cmd = exec(input);

    cmd.stdout.on('data', function (data) {
        console.log(data.toString());
    });
    
    cmd.stderr.on('data', function (data) {
        console.log(data.toString());
    });
    
    cmd.on('exit', function (code) {
        console.log('program ended with code: ' + code);
    });
}

function send(input) {
    for (let pid in peers.p) {
        peers.p[pid].connection.write(input);
    }
}

module.exports.handle = handle;
module.exports.send = send;
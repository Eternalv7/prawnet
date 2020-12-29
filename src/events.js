const getPort = require('get-port');
const peers = require("./peers");
const { handle, send } = require("./messages");

require("dotenv").config();

async function init(inpt) {
    let port = await getPort();

    peers.listen(port);
    peers.port = port;
    console.log("Peer listening on "+port);

    peers.join(process.env.PRAWNET_CHANNEL);

    peers.on('connection', function (connection, info) {
        let cid = peers.cons;

        let pid = info.id.toString("hex");

        if (info.initiator) {
            try {
                connection.setKeepAlive(true, 600);
            } catch (err) {
                console.log(err);
            }
        }

        connection.on('data', function (data) {
            handle(data.toString());
        });

        connection.on('close', () => {
            if (peers.p[pid] && peers.p[pid].cid === cid) {
                delete peers.p[pid];
            }
        });

        if (!peers.p[pid]) {
            peers.p[pid] = {};
        }

        peers.p[pid].connection = connection;
        peers.p[pid].cid = cid;

        peers.cons++;

        if(inpt != undefined){
            send(inpt);
            setTimeout(process.exit,1000);
        }
    });
}

module.exports = init;
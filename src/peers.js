const Swarm = require('discovery-swarm');
const defaults = require('dat-swarm-defaults');
const crypto = require('crypto');

let id = crypto.randomBytes(64).toString("hex");

module.exports = Swarm(defaults({ id: id }));
module.exports.p = {};
module.exports.cons = 0;
module.exports.id = id;
module.exports.port = null;
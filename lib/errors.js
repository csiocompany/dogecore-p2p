'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on dogecore-p2p Module {0}'
};

module.exports = require('@csio.company/dogecore-lib').errors.extend(spec);

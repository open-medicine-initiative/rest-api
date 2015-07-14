/*

 The run configuration for awesome pm2. Currently not working when specified from command line.

 Instead run: pm2 start server.js --next-gen-js -i 0


 Tutorials
 =================
 https://keymetrics.io/2015/05/06/microservices-architecture-applications-via-pm2/
 https://www.npmjs.com/package/pm2-web
 https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#json-app-declaration
 https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps



 Load balancing
 ============
 https://www.npmjs.com/package/loadtest
 https://github.com/SocketCluster/loadbalancer
 https://mazira.com/blog/introduction-load-balancing-nodejs
 */

var pm2 = require('pm2');
pm2.connect(function() {
  pm2.start(require('./pm2.dev.json'), function(err, apps) {
    pm2.disconnect();
  });
});
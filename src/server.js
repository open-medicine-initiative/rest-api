import koa from 'koa';
import router from 'koa-router';
import { SymptomController } from './controllers/controllers.symptom';


/**
 * http://apidocjs.com/
 * https://sendgrid.com/blog/json-web-tokens-koa-js/
 * http://stackoverflow.com/questions/28782656/how-to-run-node-js-app-with-es6-features-enabled
 * https://github.com/tj/co
 *
 *
 * http://russmatney.com/techsposure/basic-koa-api-gulp-supertest/
 */
export class ApiServer{

  constructor (port = 8080){
    this._controllers = [];
    console.log (`Starting up new API Server on port: ${port}`);
    this.server = koa(); // create koa instance
    this._controllers.push(new SymptomController());
    this.loadRoutes();
    this.server.listen(port);
  }


  loadRoutes(){
    let medlangroutes = router();
    for(var controller of this._controllers){
       controller.initialize(medlangroutes);
    }
    this.server.use(medlangroutes.routes());
    this.server.use(medlangroutes.allowedMethods());
  }

}


new ApiServer();
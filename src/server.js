import koa from 'koa';
import router from 'koa-router';
import { SymptomController } from './controllers/controllers.symptom';


/**
 * http://apidocjs.com/
 * https://sendgrid.com/blog/json-web-tokens-koa-js/
 * http://stackoverflow.com/questions/28782656/how-to-run-node-js-app-with-es6-features-enabled
 */
export class ApiServer{

  constructor (port = 8080){
    console.log ('Creating new API Server');
    this.server = koa(); // create koa instance

    this.loadRoutes();

    this.server.listen(port);
  }


  loadRoutes(){
    let medlangroutes = router();
    new SymptomController(medlangroutes);
    this.server.use(medlangroutes.routes());
    this.server.use(medlangroutes.allowedMethods());
  }

}


new ApiServer();
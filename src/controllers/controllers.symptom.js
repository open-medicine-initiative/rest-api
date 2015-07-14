import router from 'koa-router';
import { SymptomResource } from '../resource/resource.symptom';
import Database from 'arangojs';

export class SymptomController{

  constructor(router){
    let arangodb = new Database({
      url: 'http://localhost:8529',
      agentOptions: {maxSockets: 5},
      databaseName: 'medlang',
      user:'oma',
      password:'ddsf'
    });

    for (var route of SymptomResource.routes()){
      router.get(route.alias, route.url, function *(next){
        this.db =  yield arangodb.collection('symptoms');
        console.log(this.request);
        yield next;
      }, route.generator );
    }
  }

}





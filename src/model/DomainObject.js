import uuid from 'uuid';


class Identifiable{

  constructor(id = uuid.v1()){
    this.uuid = id;
  }

}

export class DomainObject extends Identifiable {

    constructor(){ super();}
}
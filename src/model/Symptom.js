import { DomainObject } from './DomainObject';

export class Symptom extends DomainObject{

  constructor({name, description}){
    super();
    this.name = name;
    this.description = description;
  }
}
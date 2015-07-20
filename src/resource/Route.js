//http://raganwald.com/2015/06/26/decorators-in-es7.html
import {Invocable} from './Invocable';

@Invocable
export class Route{

    constructor({type, alias, url}){
        this.type = type;
        this.alias = alias;
        this.url = url;
        this.parameters = [];
    }


    param({name, validation}){
        // TODO: add
        this.parameters.push();
        return this;
    }



}

export class GET extends Route{

    constructor({alias, url}){
        super({type: "GET", alias, url})
    }

}
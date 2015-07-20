
export class Metadata {

    constructor(){
        this._meta = {}

    }
    metadata({key,value}){
        this._meta[key] = value;
        return this;
    }

};

export function context(attr){
    return (ctx, value) => ctx[attr] = value;
}
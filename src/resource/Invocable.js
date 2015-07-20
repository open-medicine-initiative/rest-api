
export class Invocable {

    constructor(){
        this._before = [];
        this._after= [];
    }

    before(func){
        this._before.push(func);
        return this;
    }

    after(func){
        this._after.push(func);
        return this;
    }
}
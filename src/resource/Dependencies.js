
import {mixin} from '../util/mixin'
export const Dependencies = mixin({

    _bdeps: [],
    depends({id,target}){
        this._before.push(func);
        return this;
    },

});

export function context(attr){
    return (ctx, value) => ctx[attr] = value;
}
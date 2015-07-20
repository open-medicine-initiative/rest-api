
import {mixin} from '../util/mixin'
export const Invocable = mixin({

    _before: [],
    _after: [],
    before(func){
        this._before.push(func);
        return this;
    },

    after(func){
        this._after.push(func);
        return this;
    }
});
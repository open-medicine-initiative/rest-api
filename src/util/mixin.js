
//http://raganwald.com/2015/06/26/decorators-in-es7.html
//https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841
//https://github.com/mako-taco/DecorateThis
export function mixin (behaviour, sharedBehaviour = {}) {
    const instanceKeys = Reflect.ownKeys(behaviour);
    const sharedKeys = Reflect.ownKeys(sharedBehaviour);
    const typeTag = Symbol('isa');

    function _mixin (clazz) {
        for (let property of instanceKeys)
            Object.defineProperty(clazz.prototype, property, { value: behaviour[property] });
        Object.defineProperty(clazz.prototype, typeTag, { value: true });
        return clazz;
    }
    for (let property of sharedKeys)
        Object.defineProperty(_mixin, property, {
            value: sharedBehaviour[property],
            enumerable: sharedBehaviour.propertyIsEnumerable(property)
        });
    Object.defineProperty(_mixin, Symbol.hasInstance, {
        value: (i) => !!i[typeTag]
    });
    return _mixin;
}

//http://elmasse.github.io/js/decorators-bindings-es7.html
export function Mixins(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list)
    }
}
let worker = {
    someMethod(){
        return 1;
    },

    slow(x) {
        console.log(`slow(${x})을/를 호출함`);
        return x * this.someMethod();
    }
};

function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if(cache.has(x)) {
            return cache.get(x);
        }
        let result = func(x);
        cache.set(x, result);
        return result;
    };
}

console.log(worker.slow(1));

worker.slow = cachingDecorator(worker.slow);

console.log(worker.slow(2));

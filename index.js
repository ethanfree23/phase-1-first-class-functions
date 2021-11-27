

function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction(){
    return function fn(){};
};


function returnsAnAnonymousFunction(){
    return function () {
        return "Hi";
    }
}

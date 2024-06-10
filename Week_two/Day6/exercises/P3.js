var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var empInitialState = { name: "john", age: "30" };
var copy = __assign({}, empInitialState);
console.log("before");
console.log(empInitialState);
console.log(copy);
console.log("After");
empInitialState.name = "Accenture";
console.log(empInitialState);
console.log(copy);

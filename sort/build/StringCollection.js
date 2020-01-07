"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringCollection = /** @class */ (function () {
    function StringCollection(data) {
        this.data = data;
    }
    Object.defineProperty(StringCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    StringCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    StringCollection.prototype.swap = function () { };
    return StringCollection;
}());
exports.StringCollection = StringCollection;

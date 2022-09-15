"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Iterator {
    constructor(collection) {
        this.collection = [];
        this.position = 0;
        this.collection = collection;
    }
    next() {
        if (this.position < this.collection.length) {
            const result = this.collection[this.position];
            this.position += 1;
            return {
                done: false,
                value: result
            };
        }
        return { done: true, value: undefined };
    }
    [Symbol.iterator]() {
        return this;
    }
}
exports.default = Iterator;

export default class Iterator<T> implements Iterable<T> {
    private collection: T[] = [];
    private position: number = 0;

    constructor(collection: T[]) {
        this.collection = collection;
    }
    
    public next(): IteratorResult<T> {
        if (this.position < this.collection.length) {
            const result = this.collection[this.position];
            this.position += 1;
            return {
                done: false,
                value: result
            }
        } 
        return { done: true, value:undefined }
    }
    
    [Symbol.iterator](): Iterator<T> {
        return this
    }
    
}
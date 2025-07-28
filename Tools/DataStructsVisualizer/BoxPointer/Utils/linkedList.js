import { Pair } from './pair.js'

class LinkedList extends Pair {
    constructor(arr) {
        if (arr.length <= 0) {
            super(null, null);
            return;
        }
        let pairs = [];
        for (let i = 0; i < arr.length; i++) {
            if (i == arr.length) {
                break;
            } else {
                pairs.push(new Pair(arr[i], null))
            }
            // console.log(pairs[i].stringify());
        }

        for (let i = 0; i < arr.length - 1; i++) {
            pairs[i].setCdr(pairs[i+1]);
        }
        super(pairs[0].getCar(), pairs[0].getCdr());
    }
}

export { LinkedList };
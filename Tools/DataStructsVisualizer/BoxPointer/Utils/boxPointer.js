import { Pair } from "./pair.js"
import { LinkedList } from "./linkedList.js"
import { ListInputParser } from "./listInputParser.tsx";

let t1 = new Pair(5, 3);
let t2 = new Pair(1, 4);
let t3 = new Pair(3, null);

let arr = [1, 2, 3, 4]

function boxPointer() {
    t2.setCdr(t3);
    t1.setCdr(t2);
    //t1.print();
    let ll = new LinkedList(arr);
    let lip = new ListInputParser();
}

function parseListInput(input) {
    console.log(input);
    return input;
}

export { parseListInput, boxPointer };
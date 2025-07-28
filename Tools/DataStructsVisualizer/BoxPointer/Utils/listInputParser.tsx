import { LinkedList } from "./linkedList.js";
import { Pair } from "./pair.js";
import { Stack } from "./stack.tsx";

class ListInputParser {
  linkedList: LinkedList;

  constructor(str: string) {
    this.linkedList = new LinkedList([]);
    let str2 = "(4 5 (6 7) (5 . 6) (3 4 5) 6)";
    let list = this.parseStringToList(str2);
    // let linkedList = this.convertListToLinkedList(list);
  }

  private getIndecesOf(arr: string[], str: string) {
    let indeces: number[] = [];
    let index = arr.indexOf(str);
    while (index >= 0) {
      indeces.push(index);
      index = arr.indexOf(str, index + 1);
    }
  }

  private tokenizeString(str: string): string[] {
    let tokens = str.split("").filter((char) => char !== " ");
    return tokens;
  }

  private tokensToList(tks: string[]) {
    let finalArray = [];
    for (let i = 1; i < tks.length; i++) {
      if (tks[i] == "(") {
        let subArrayTerminalIndex = tks.indexOf(")", i);
        // let nex
      }
    }
  }

  private parseStringToList(str: string) {
    // Split the string into tokens and initialize variables
    let strArray = this.tokenizeString(str);

    let stack = new Stack();
    stack.push("3");
    stack.push("5");
    stack.push("6");
    console.log(stack.pop());
    console.log(strArray);
    // Iterate over the tokens
    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i] == "(") {
        strArray[i] = "[";
      } else if (strArray[i] == ")") {
        strArray[i] = "]";
      } else if (strArray[i] == ".") {
        strArray[i] = "~";
      }
    }
    //console.log(strArray);

    // for (let i = 0; i < strArray.length - 1; i++) {
    //   let a = strArray[i];
    //   if (a != "[") {
    //     !(strArray[i + 1] == "]") ? (strArray[i] += ", ") : (strArray[i] += "");
    //   }
    // }
    // console.log(strArray);

    // let reString = "";
    // strArray.forEach((a) => {
    //   reString += a;
    // });

    // console.log(reString);
    // console.log(eval(reString));
    // If token is ".", create a Pair
    // Otherwise, add the token to the current list
    // Return the top-level list
  }

  private convertListToLinkedList(list: LinkedList) {
    // Initialize a new LinkedList
    // Iterate over the elements of the list
    // If element is a list, recursively convert it to a LinkedList
    // If element is a Pair, add it to the LinkedList
    // Otherwise, add the element to the LinkedList
    // Return the LinkedList
  }
}

export { ListInputParser };

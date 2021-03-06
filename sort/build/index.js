"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// Sort array of numbers
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
// Sort characters of a string
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
var sorter2 = new Sorter_1.Sorter(charactersCollection);
sorter2.sort();
console.log(sorter2.collection);
// Sort linked list
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
var sorter3 = new Sorter_1.Sorter(linkedList);
sorter3.sort();
linkedList.print();

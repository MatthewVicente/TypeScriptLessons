"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
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

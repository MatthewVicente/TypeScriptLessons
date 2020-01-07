import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// Sort array of numbers
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);

// Sort characters of a string
const charactersCollection  = new CharactersCollection('Xaayb');
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(sorter2.collection);

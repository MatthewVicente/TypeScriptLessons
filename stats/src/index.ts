import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader("football.csv");
reader.read();
const matches = reader.data;

// enum - enumaration
enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
};

let manUnitedWins = 0;

for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man Uniteds won ${manUnitedWins} games`)

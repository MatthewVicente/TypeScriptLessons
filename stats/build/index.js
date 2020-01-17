"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResults_1 = require("./MatchResults");
var MatchReader_1 = require("./MatchReader");
var reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
var matches = reader.data;
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === MatchResults_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResults_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man Uniteds won " + manUnitedWins + " games");

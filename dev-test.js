
// Import
const Block = require("./block");

// console.log("Hello, world!");

/***  Test der Block-Funktionalität  */
const block = new Block("aktuelle zeit","hash1","hash2","Blockdaten");
console.log(block.toString());

console.log(Block.genesis().toString());

const testBlock = Block.mineBlock(Block.genesis(),"testDaten")
console.log(testBlock.toString());
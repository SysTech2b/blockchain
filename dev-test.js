// Import
const Block = require("./block");
const Blockchain = require("./blockchain");

// console.log("Hello, world!");

/***  Test der Block-Funktionalität  */
// const block = new Block("aktuelle zeit","hash1","hash2","Blockdaten");
// console.log(block.toString());

// console.log(Block.genesis().toString());

// const testBlock = Block.mineBlock(Block.genesis(),"testDaten")
// console.log(testBlock.toString());'

/***  Test der Block-Funktionalität  */
const chain = new Blockchain();
console.log(chain);
chain.addBlock("daten von Block 1");
console.log(chain);

chain.addBlock("daten von Block 2");
chain.addBlock("daten von Block 3");
chain.addBlock("daten von Block 4");

console.log(chain);
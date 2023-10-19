const SHA256 = require("crypto-js/sha256");


class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, "01/01/2020", "Genesis block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  createBlock(data) {
    const latestBlock = this.getLatestBlock();
    const newBlock = new Block(latestBlock.index + 1, Date.now(), data, latestBlock.hash);
    this.chain.push(newBlock);
    return newBlock;
  }
}

const myChain = new Blockchain();

console.log(myChain.createBlock("First block"));
console.log(myChain.createBlock("Second block"));
console.log(myChain.createBlock("Third block"));
console.log(myChain);
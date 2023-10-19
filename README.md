Here is an example of how you can create a simple blockchain application using JavaScript:

- Start by creating a new project directory and initialize it as a Node.js project by running `npm init`.
- Next, you'll need to install a blockchain library for JavaScript. There are several options available such as `crypto-js`, `elliptic`, and `web3.js`. In this example, we'll use `crypto-js`.
```javascript
npm install crypto-js
```

- Create a new file called blockchain.js and import the crypto-js library.
```javascript
const SHA256 = require("crypto-js/sha256");
```

- Create a Block class that will define the structure of each block in the chain. Each block will have an index, a timestamp, data, and the hash of the previous block.
```javascript
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
```

- Create a Blockchain class that will manage the chain of blocks. This class will have a chain property that will hold the blocks, and a createBlock method that can be used to add new blocks to the chain.
```javascript
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
```

- Finally, create an instance of the Blockchain class and use the createBlock method to add new blocks to the chain.
```javascript
const myChain = new Blockchain();
console.log(myChain.createBlock("First block"));
console.log(myChain.createBlock("Second block"));
console.log(myChain.createBlock("Third block"));
console.log(myChain);
```
```javascript
//output of First block
Block {
  index: 1,
  timestamp: 1674293127385,
  data: 'First block',
  previousHash: '37fdbf3027570c6daca59c93c646bb19bae477f5c070abfe74d9170b313ba0df',
  hash: '6395cf4b7634b587e6fb3e7eb4eab12aff0a6a5a7d798b1122ae75186bcff476'
}
```

Please note that this is just a basic example and is not suitable for production use. In a real-world application, you would need to add more features such as validation of new blocks, consensus mechanism and more.

Also, there are multiple frameworks and libraries built on top of javascript that makes blockchain development more easier such as `Ethereum.js`, `NEM2-SDK`, `Chainpoint `etc.

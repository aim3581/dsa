class Superblock {
    constructor(totalBlocks, blockSize) {
      this.totalBlocks = totalBlocks;
      this.blockSize = blockSize;
      this.freeBlockList = Array.from({ length: totalBlocks }, (_, index) => index);
    }
  
    allocateBlock() {
      if (this.freeBlockList.length > 0) {
        return this.freeBlockList.pop();
      } else {
        throw new Error('No free blocks available.');
      }
    }
  
    deallocateBlock(blockNumber) {
      this.freeBlockList.push(blockNumber);
    }
  }
  
  class Inode {
    constructor(permissions) {
      this.permissions = permissions;
      this.size = 0;
      this.dataBlocks = [];
    }
  
    addDataBlock(blockNumber) {
      this.dataBlocks.push(blockNumber);
    }
  
    removeDataBlock(blockNumber) {
      const index = this.dataBlocks.indexOf(blockNumber);
      if (index !== -1) {
        this.dataBlocks.splice(index, 1);
      }
    }
  }
  
  class FileSystem {
    constructor(totalBlocks, blockSize) {
      this.superblock = new Superblock(totalBlocks, blockSize);
      this.inodes = {};
      this.dataBlocks = Array.from({ length: totalBlocks }, () => '');
    }
  
    createFile(permissions) {
      const inode = new Inode(permissions);
      const inodeIndex = Object.keys(this.inodes).length + 1;
      this.inodes[inodeIndex] = inode;
      return inodeIndex;
    }
  
    writeToFile(fileId, content) {
      if (this.inodes[fileId]) {
        const inode = this.inodes[fileId];
        const blockNumber = this.superblock.allocateBlock();
        this.dataBlocks[blockNumber] = content;
        inode.addDataBlock(blockNumber);
        inode.size += content.length;
      } else {
        throw new Error('File not found.');
      }
    }
  
    readFromFile(fileId) {
      if (this.inodes[fileId]) {
        const inode = this.inodes[fileId];
        let content = '';
        for (const blockNumber of inode.dataBlocks) {
          content += this.dataBlocks[blockNumber];
        }
        return content;
      } else {
        throw new Error('File not found.');
      }
    }
  
    deleteFile(fileId) {
      if (this.inodes[fileId]) {
        const inode = this.inodes[fileId];
        for (const blockNumber of inode.dataBlocks) {
          this.superblock.deallocateBlock(blockNumber);
          this.dataBlocks[blockNumber] = '';
        }
        delete this.inodes[fileId];
      } else {
        throw new Error('File not found.');
      }
    }
  }
  
  // Create a file system with 100 blocks of size 4096 bytes each
  const fileSystem = new FileSystem(100, 4096);
  
  // Create a file
  const fileId = fileSystem.createFile('rw-r--r--');
  
  // Write to the file
  fileSystem.writeToFile(fileId, 'Hello, World!\nThis is a test file.\n');
  
  // Read from the file
  const content = fileSystem.readFromFile(fileId);
  console.log(content);
  
  // Delete the file
  fileSystem.deleteFile(fileId);
  
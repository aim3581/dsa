#FileSystem CLI

```javascript
const fs = require('fs');
const path = require('path');
const readline = require('readline');

class FileSystemCLI {
  constructor() {
    this.currentDirectory = process.cwd();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  run() {
    console.log('Welcome to FileSystem CLI!');
    this.listenForCommands();
  }

  listenForCommands() {
    this.rl.question('> ', (input) => {
      this.executeCommand(input.trim());
      this.listenForCommands();
    });
  }

  executeCommand(command) {
    const [cmd, ...args] = command.split(' ');

    switch (cmd) {
      case 'mkdir':
        this.createDirectory(args[0]);
        break;
      case 'touch':
        this.createFile(args[0]);
        break;
      case 'cd':
        this.changeDirectory(args[0]);
        break;
      case 'cd..':
        this.moveUpDirectory();
        break;
      case 'ls':
        this.listContents();
        break;
      default:
        console.log('Invalid command. Available commands: mkdir, touch, cd, cd.., ls');
    }
  }

  createDirectory(dirName) {
    const newDirPath = path.join(this.currentDirectory, dirName);
    fs.mkdirSync(newDirPath);
    console.log(`Directory '${dirName}' created.`);
  }

  createFile(fileName) {
    const newFilePath = path.join(this.currentDirectory, fileName);
    fs.writeFileSync(newFilePath, '');
    console.log(`File '${fileName}' created.`);
  }

  changeDirectory(dirName) {
    const newDirPath = path.join(this.currentDirectory, dirName);
    if (fs.existsSync(newDirPath)) {
      this.currentDirectory = newDirPath;
      console.log(`Current directory changed to: ${newDirPath}`);
    } else {
      console.log(`Directory '${dirName}' not found.`);
    }
  }

  moveUpDirectory() {
    const parentDir = path.dirname(this.currentDirectory);
    if (parentDir !== this.currentDirectory) {
      this.currentDirectory = parentDir;
      console.log(`Moved up to directory: ${parentDir}`);
    }
  }

  listContents() {
    const contents = fs.readdirSync(this.currentDirectory);
    contents.forEach((item) => {
      console.log(item);
    });
  }

  close() {
    this.rl.close();
    console.log('FileSystem CLI closed.');
  }
}

// Example usage
const fileSystemCLI = new FileSystemCLI();
fileSystemCLI.run();
```

In this version:

- We've encapsulated the behavior into the `FileSystemCLI` class.
- The `rl` instance of `readline` is now a property of the class.
- The `listenForCommands` method now listens for user input recursively.
- We've added a `close` method to gracefully close the CLI.

Using classes improves code organization and readability while aligning with OOP concepts.
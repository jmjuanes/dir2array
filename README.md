# dir2array
Get an array with all files in a directory (including files in subdirectories).

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]


## Install

You can install **dir2array** using NPM:

```
npm install dir2array
```

## Usage

**dir2array** is very easy to use. You only need to call the `Scan` method with your desired path, and you will get an array with all the content of your path (including files, subdirectories and files in subdirectories).

```javascript
//Import dir2array
var dir2array = require('dir2array');

//Get an array with all the files and subdirectories
var mydir = dir2array.Scan('path/to/your/dir');

```

## Other useful methods

### IsDir(path)

Returns true if path is a directory, false if others.

```javascript
dir2array.IsDir('my/dir/'); //Returns true (if my/dir/ exists!)

dir2array.IsDir('dir/file.txt'); //Returns false
```

### DirExists(path)

Returns true if paht exists and it is a directory.

```javascript
dir2array.DirExists('dir/file.txt'); //Returns false because file.txt is not a directory
```

## License

**dir2array** is under the [MIT](LICENSE) license.



[npm-image]: https://img.shields.io/npm/v/dir2array.svg
[npm-url]: https://npmjs.org/package/dir2array
[downloads-image]: https://img.shields.io/npm/dm/dir2array.svg
[downloads-url]: https://npmjs.org/package/dir2array
# spark-messages [![Build Status](https://img.shields.io/travis/brh55/spark-messages.svg?style=flat-square)](https://travis-ci.org/brh55/spark-messages) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)

> A collection of helpers to ensure consistent formatting of Cisco spark messages.


## Install

```
$ npm install --save spark-messages
```


## Usage

```js
const sm = require('spark-messages');

sparkMessages('unicorns');
//=> 'unicorns & rainbows'
```

#### Advance Usages
```js
const sm = require('spark-messages');

const linksData = [
	'http://google.com',
	'http://facebook.com',
	'http://instagram.com'
];

sparkMessages('unicorns');
//=> 'unicorns & rainbows'

```
## API

### sparkMessages(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## License

MIT © [Brandon Him](https://github.com/brh55)

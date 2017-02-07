# spark-messages [![Build Status](https://img.shields.io/travis/brh55/spark-messages.svg?style=flat-square)](https://travis-ci.org/brh55/spark-messages) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)

> A collection of helpers to ensure consistent formatting of Cisco spark messages.


## Install

```
$ npm install --save spark-messages
```


## Usage

```js
const sm = require('spark-messages');

const message = `
${sm.h1('🦄 Unicorn Town')}
${sm.hr()}
For more info, click ${sm.link('http://unicornland.com', 'here')}!`
//=>
# 🦄 Unicorn Town
___
For more info, click [here](http://unicornland.com)!

```

#### Advance Usages
Mass editing a set of links
```js
const sm = require('spark-messages');

const links = [
	'http://google.com',
	'http://facebook.com',
	'http://instagram.com'
];

const mdLinks = links.map(sm.link);
const boldLinks = mdLinks.map(sm.bold);
const mdLinkList = sm.ol(boldLinks);

// SHORT-HAND: sm.ol(links.map(raw => sm.link(sm.bold(raw))))
// =>
//   1. **<http://google.com>**
//   2. **<http://facebook.com>**
//   3. **<http://instagram.com>**
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

# spark-messages [![Build Status](https://img.shields.io/travis/brh55/spark-messages.svg?style=flat-square)](https://travis-ci.org/brh55/spark-messages) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)

> A collection of helpers to ensure consistent formatting of Cisco spark messages.

`spark-messages` may be redudant in some regards, but there are some side-benefits:

- Any changes to markdown interpretation is corrected outside of repositories
- Ensure the usage of only a supported set of supported markdown
- HTML-like methods
- Consistency and programmability

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
## Elements
### h*{n}*(text)
> h1(text), h2(text), h3(text), h4(text), h5(text), h6(text)

#### Text

Type: `string`

Text to be a header.

### unorderedList(items)
> *Alias:* ul(items)

#### items

Type: `array`

List of items to be individually transformed to unordered list items.

### orderedList(items)
> *Alias:* ol(items)

#### items

Type: `array`

List of items to be individually transformed to unordered list items.

#### Text

Type: `string`

Text to be a header.

### unorderedList(items)
> **Alias:** ul(items)

#### items

Type: `array`

List of items to be individually transformed to ordered list items.

## Font Style

### bold(text)
> **Alias:** b()

#### Text

Type: `string`

Text to be bolded.

### italic(text)
> **Alias:** i(text), em(text), emphasis(text)

#### Text

Type: `string`

Text to be italicize.

### code(text)
> **Alias:**: c(text)

#### Text

Type: `string`

Text to be transformed into a code style.

### codeBlock(text)
> **Alias:**: cb(text)

#### Text

Type: `string`

Text to be transformed into a code block style.

## Visual Elements
### horizontalRule()
> **Alias**: hr()

*Returns a markdown horziontal rule (___).*

### lineBreak()
> **Alias**: br()

*Returns a linebreak.*

## License

MIT © [Brandon Him](https://github.com/brh55)

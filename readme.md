# spark-messages [![Build Status](https://img.shields.io/travis/brh55/spark-messages.svg?style=flat-square)](https://travis-ci.org/brh55/spark-messages) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)

> A collection of helpers to ensure consistent formatting of Cisco spark messages.

`spark-messages` may be redudant in some regards, but there are some side-benefits:

- Any changes to markdown interpretation is corrected outside of source code
- Ensure the usage of only a supported set of markdown -- no need to "guess and check"
- `HTML/CSS`-like methods for easier referencing and implicit behavior
- Programmability

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

<img src="https://cloud.githubusercontent.com/assets/6020066/22878113/44fb2754-f18d-11e6-90f6-c28fd20aae9a.png" width="650">

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

<img src="https://cloud.githubusercontent.com/assets/6020066/22878373/75f5423a-f18e-11e6-8e58-e583ef4e2011.png" width="690">

## API

Preview the [Spark Messages Wiki](https://github.com/brh55/spark-messages/wiki) for visual reference of Spark output and examples.

## Elements
### h*{n}*(text)
> h1(text), h2(text), h3(text), h4(text), h5(text), h6(text)

#### Text

Type: `string`

Text to be a header.

<br>

### link(href, title)
> **Alias:** a(), anchor()

#### href

Type: `string`

Url for the link

#### title

Type: `string`

Mask for the link.

<br>

### email(emailAddress, title)

#### emailAddress

Type: `string`

Email address to create an link email. HTML equivalent = `<a href="mailto:emailaddress">emailAddress</a>`

#### title

Type: `string`

Mask for the email.

<br>

### telephone(telephoneNumber, title)
> **Alias:** tel()

#### telephoneNumber

Type: `string`

Telephone number to be an `tel:`.

#### title

Type: `string`

Mask for the telephone number.

<br>

### unorderedList(items)
> **Alias:** ul(items)

#### items

Type: `array`

List of items to be individually transformed to unordered list items.

<br>

### orderedList(items)
> **Alias:** ol(items)

#### items

Type: `array`

List of items to be individually transformed to unordered list items.

<br>

### unorderedList(items)
> **Alias:** ul(items)

#### items

Type: `array`

List of items to be individually transformed to ordered list items.

## Font Style

### bold(text)
> **Alias:** b(), heavy()

#### Text

Type: `string`

Text to be bolded.

<br>

### italic(text)
> **Alias:**  i(text),  em(text),  emphasis(text)

#### Text

Type: `string`

Text to be italicize.

<br>

### code(text)
> **Alias:** c(text)

#### Text

Type: `string`

Text to be transformed into a code style.

<br>

### codeBlock(text)
> **Alias:** cb(text)

#### Text

Type: `string`

Text to be transformed into a code block style.

## Visual Elements
### horizontalRule()
> **Alias**:  hr()

*Returns a markdown horziontal rule (___).*

<br>

### lineBreak()
> **Alias**:  br()

*Returns a linebreak.*

## License

MIT © [Brandon Him](https://github.com/brh55)

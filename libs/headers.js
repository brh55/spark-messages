'use strict';
const br = require('line-break').br;

module.exports = {
	// @TODO: Find a way to make this less redudant
	h1: text => prependHash(text, 1),
	h2: text => prependHash(text, 2),
	h3: text => prependHash(text, 3),
	h4: text => prependHash(text, 4),
	h5: text => prependHash(text, 5),
	h6: text => prependHash(text, 6)
};

function prependHash(text, numHash) {
	text = text || '';
	numHash = numHash || 0;
	let hashs = '';
	for (var i = 0; i < numHash; i++) {
		hashs += '#';
	}
	if (typeof text === 'string' && text !== '') {
		return `${hashs} ${text}${br()}`;
	}
	return '';
}

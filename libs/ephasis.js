'use strict';
module.exports = {
	emphasis,
	em: emphasis,
	italic: emphasis,
	i: emphasis
};

function emphasis(text) {
	text = text || '';
	if (typeof text === 'string' && text !== '') {
		return `*${text}*`;
	}
	return '';
}

'use strict';
module.exports = {
	italic,
	em: italic,
	emphasis: italic,
	i: italic
};

function italic(text) {
	text = text || '';
	if (typeof text === 'string' && text !== '') {
		return `*${text}*`;
	}
	return '';
}

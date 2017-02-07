'use strict';
module.exports = {
	bold,
	b: bold,
	em: bold
};

function bold(text) {
	text = text || '';
	return `**${text}**`;
}

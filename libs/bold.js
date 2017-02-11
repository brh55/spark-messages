'use strict';
module.exports = {
	bold,
	b: bold
};

function bold(text) {
	text = text || '';
	return `**${text}**`;
}

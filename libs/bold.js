'use strict';
module.exports = {
	bold,
	b: bold,
	heavy: bold
};

function bold(text) {
	text = text || '';
	return `**${text}**`;
}

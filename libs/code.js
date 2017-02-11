'use strict';
module.exports = {
	code,
	c: code,
	codeBlock,
	cb: codeBlock,
};

function code(text) {
	text = text || '';
	if (typeof text === 'string' && text !== '') {
		return `\`\`${text}\`\``;
	}
	return '';
}

function codeBlock(text) {
	text = text || '';
	if (typeof text === 'string' && text !== '') {
		return `
		\`\`\`
		${text}
		\`\`\`
		`;
	}
	return '';
}

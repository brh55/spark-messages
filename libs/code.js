'use strict';
module.exports = {
	code
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
				\`\`\``;
	}
	return '';
}

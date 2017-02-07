'use strict';
module.exports = {
	link,
	anchor: link,
	a: link
};

function link(source, title) {
	title = title || '';
	source = source || '';
	if ((typeof source === 'string' && typeof title == 'string') &&
		(source !== '' && title !== ''))  {
		return `[${title}](${source})`;
	}
	return source;
}

function email(emailAddress) {
	emailAddress = emailAddress || '';
	if (typeof emailAddress === 'string' || emailAddress !== '') {
		return `<${emailAddress}>`;
	}
	return emailAddress;
}

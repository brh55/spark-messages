'use strict';
module.exports = {
	link,
	anchor: link,
	a: link,
	email,
	telephone
};

function link(source, title) {
	title = title || '';
	source = source || '';
	if ((typeof source === 'string' && typeof title === 'string') &&
		(source !== '' && title !== '')) {
		return `[${title}](${source})`;
	}
	return `<${source}>`;
}

function email(emailAddress) {
	return link(`mailto:${emailAddress}`, emailAddress);
}

function telephone(phoneNumber) {
	return link(`tel:${phoneNumber}`, phoneNumber);
}

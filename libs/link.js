'use strict';
module.exports = {
	link,
	anchor: link,
	a: link,
	email,
	telephone
};

function link(href, title) {
	title = title || '';
	href = href || '';
	if ((typeof href === 'string' && typeof title === 'string') &&
		(href !== '' && title !== '')) {
		return `[${title}](${href})`;
	}
	return `[${href}](${href})`;
}

function email(emailAddress, title) {
	if (!title) {
		return link(`mail:${emailAddress}`, emailAddress);
	}
	return link(`mail:${emailAddress}`, title);
}

function telephone(phoneNumber, title) {
	if (!title) {
		return link(`tel:+${phoneNumber}`, phoneNumber);
	}
	return link(`tel:+${phoneNumber}`, title);
}

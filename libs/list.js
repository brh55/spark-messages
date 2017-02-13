'use strict';
const br = require('./line-break').br;

module.exports = {
	unorderedList,
	ul: unorderedList,
	orderedList,
	ol: orderedList
};

function buildList(items, prepender) {
	if (Array.isArray(items) && items.length > 0) {
		const list = items.map((item, index) => {
			if (prepender === 'count') {
				return `${index + 1}. ${item}`;
			}
			return `${prepender} ${item}`;
		}).toString().replace(/,/g, `${br()}`);

		return `${br()}${list}${br()}`;
	}
	return '';
}

function unorderedList(items) {
	return buildList(items, '-');
}

function orderedList(items) {
	return buildList(items, 'count');
}

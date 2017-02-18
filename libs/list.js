'use strict';
const br = require('./line-break').br;

module.exports = {
	unorderedList,
	ul: unorderedList,
	orderedList,
	ol: orderedList
};

function buildList(items, prepender, indenter) {
	indenter = indenter || '';
	if (Array.isArray(items) && items.length > 0) {
		const list = items.map((item, index) => {
			if (Array.isArray(item)) {
				return buildList(item, prepender, '    ');
			}

			if (prepender === 'count') {
				return `${indenter}${index + 1}. ${item}`;
			}
			return `${indenter}${prepender} ${item}`;
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

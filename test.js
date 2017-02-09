import test from 'ava';
import sm from '.';

test('Headers', t => {
	t.is(sm.h1('Header'), '# Header');
	t.is(sm.h2('Header'), '## Header');
	t.is(sm.h3('Header'), '### Header');
	t.is(sm.h4('Header'), '#### Header');
	t.is(sm.h5('Header'), '##### Header');
	t.is(sm.h6('Header'), '###### Header');
	// Return a non-object recieve an empty string
	t.is(sm.h1({}), '');
});

test('Links', t => {
	t.is(sm.link('http://google.com'), '<http://google.com>');
	t.is(sm.link('http://google.com', 'Google'), '[Google](http://google.com)');
});

test('Combined usage', t => {
	const links = [
		'http://google.com',
		'http://facebook.com',
		'http://instagram.com'
	];

	const mdLinks = sm.ol(links.map(raw => sm.bold(sm.link(raw))))
	t.is(mdLinks, '1. **<http://google.com>**\n2. **<http://facebook.com>**\n3. **<http://instagram.com>**');
});

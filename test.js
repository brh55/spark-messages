import test from 'ava';
import sm from '.';

test('Headers', t => {
	t.is(sm.h1('Header'), '# Header\n');
	t.is(sm.h2('Header'), '## Header\n');
	t.is(sm.h3('Header'), '### Header\n');
	t.is(sm.h4('Header'), '#### Header\n');
	t.is(sm.h5('Header'), '##### Header\n');
	t.is(sm.h6('Header'), '###### Header\n');
	// Return a non-object recieve an empty string
	t.is(sm.h1({}), '');
});

test('Links', t => {
	t.is(sm.link('http://google.com'), '<http://google.com>');
	t.is(sm.link('http://google.com', 'Google'), '[Google](http://google.com)');
	t.is(sm.email('link@gmail.com'), '[link@gmail.com](mailto:link@gmail.com)');
	t.is(sm.telephone('17303982999'), '[17303982999](tel:17303982999)');
});

test('Code', t => {
	t.is(sm.c('<h1>Hello World</h1>'), '`<h1>Hello World</h1>`');
	t.is(sm.cb(`
<html>
	<body>
		<h1>Hello World</h1>
	</body>
</html>`), '\n```\n\n<html>\n\t<body>\n\t\t<h1>Hello World</h1>\n\t</body>\n</html>\n```\n');
});

test('Horizontal Rule', t => {
	t.is(`## Hi
${sm.hr()}`, `## Hi
___`);
});

test('Italics', t => {
	t.is(sm.italic('hello unicorn'), '*hello unicorn*');
	t.is(sm.em('hello unicorn'), '*hello unicorn*');
	t.is(sm.i('hello unicorn'), '*hello unicorn*');
	t.is(sm.emphasis('hello unicorn'), '*hello unicorn*');
});

test('Bold', t => {
	t.is(sm.b('hello unicorn'), '**hello unicorn**');
	t.is(sm.bold('hello unicorn'), '**hello unicorn**');
	t.is(sm.heavy('hello unicorn'), '**hello unicorn**');
});

test('Line break', t => {
	t.is(sm.br(), '\n');
});

const links = [
	'http://google.com',
	'http://facebook.com',
	'http://instagram.com'
];

test('Unordered list', t => {
	t.is(sm.ul(links), '\n- http://google.com\n- http://facebook.com\n- http://instagram.com\n');
});

test('Ordered list', t => {
	t.is(sm.ol(links), '\n1. http://google.com\n2. http://facebook.com\n3. http://instagram.com\n');
});

test('Combined usage', t => {
	const mdLinks = sm.ol(links.map(raw => sm.bold(sm.link(raw))));
	t.is(mdLinks, '\n1. **<http://google.com>**\n2. **<http://facebook.com>**\n3. **<http://instagram.com>**\n');
});

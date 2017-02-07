import test from 'ava';
import sm from '.';

test('Headers', t => {
	t.is(sm.h1('Header'), '# Header');
	t.is(sm.h2('Header'), '## Header');
	t.is(sm.h3('Header'), '### Header');
	t.is(sm.h4('Header'), '#### Header');
	t.is(sm.h5('Header'), '##### Header');
	t.is(sm.h6('Header'), '###### Header');

	t.is(sm.h1({}, ''));
});

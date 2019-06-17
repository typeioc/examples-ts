const tap = require('tap')
import result from '.'

tap.test('should return proper name', (test) => {
	test.equals(result, 'B : A B : A - Substitute 1 B : A - Substitute 2')
	test.done()
})

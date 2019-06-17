const tap = require('tap')
import result from '.'

tap.test('should return proper name', (test) => {
	test.equals(result, 'A B C A B C')
	test.done()
})

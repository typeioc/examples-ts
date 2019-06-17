const tap = require('tap')
import result from '.'

tap.test('should return proper name', (test) => {
	test.equals(result, 'Test initialized disposed')
	test.done()
})

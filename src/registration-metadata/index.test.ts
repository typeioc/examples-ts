const tap = require('tap')
import result from '.'

tap.test('should return proper value', (test) => {
	test.equals(result, 'initialized disposed')
	test.done()
})

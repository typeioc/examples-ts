const tap = require('tap')
import result from '.'

tap.test('should return proper value', (test) => {
	test.equals(result, 'A: 2 - instances; B: 1 - instances')
	test.done()
})

const tap = require('tap')
import result from '.'

tap.test('should return proper name', (test) => {

	test.equals('A: 4 - instances; B: 2 - instances', result)
	test.done()
})

const tap = require('tap')
import result from '.'

tap.test('returns all cases', (test) => {

	test.equals(result.length, 2)
	test.done()
})

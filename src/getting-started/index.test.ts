const tap = require('tap')
import result from '.'

tap.test('should return proper name', (test) => {

	test.equals('Simple : Not So Simple', result)
	test.done()
})

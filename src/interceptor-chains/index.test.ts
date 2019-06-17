const tap = require('tap')
import result from '.'

tap.test('should return proper value', (test) => {
	test.equals(result, 'math.pow(2, 3) is "5 1 2 3"; math.round(5.777) is "5.777 2 3"')
	test.done()
})

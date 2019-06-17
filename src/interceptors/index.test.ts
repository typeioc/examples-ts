const tap = require('tap')
import result from '.'

tap.test('should return proper value', (test) => {
	test.equals(result, 'Original: 5; Intercepted: 8')
	test.done()
})

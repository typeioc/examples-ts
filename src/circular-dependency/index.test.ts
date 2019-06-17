const tap = require('tap')
import result from '.'

tap.test('should return proper name', (test) => {
	test.equals(result, 'Circular dependency for service: Service A')
	test.done()
})

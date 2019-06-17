const tap = require('tap')
import result from '.'

tap.test('should return proper name', (test) => {
	test.ok(result.startsWith('Circular dependency for service: class A{constructor'))
	test.done()
})

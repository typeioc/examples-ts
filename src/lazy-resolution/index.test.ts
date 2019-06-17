const tap = require('tap')
import { factoryResult, decoratorResult } from '.'

tap.test('should return proper value', (test) => {
	test.equals(factoryResult, '0, 1, 1, 2, 3, 5, 8, 13, 21, 34')
	test.equals(decoratorResult, '0, 1, 1, 2, 3, 5, 8, 13, 21, 34')
	test.done()
})

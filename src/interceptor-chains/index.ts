import * as Addons from 'typeioc/addons';
import Interceptors = Addons.Interceptors;

const interceptor = Interceptors.create();

const math = interceptor.intercept(Math, [{
    wrapper : (callInfo) => callInfo.next(`${callInfo.result} 2`)
    }, {
        method: 'pow',
        type: Interceptors.CallInfoType.Method,
        wrapper : (callInfo) => callInfo.next(callInfo.args[0] + callInfo.args[1])
    }, {
        type: Interceptors.CallInfoType.Method,
        wrapper : (callInfo) => `${callInfo.result} 3`
    }, {
        method: 'pow',
        wrapper : (callInfo) => callInfo.next(`${callInfo.result} 1`)
    }, {
        method: 'round',
        wrapper : (callInfo) => callInfo.next(callInfo.args[0])
}]);

const result = `math.pow(2, 3) is "${math.pow(2, 3)}"; math.round(5.777) is "${math.round(5.777)}"`

export default result

import {
  interceptor as createInterceptor,
  builder as createBuilder,
  callInfo
} from 'typeioc';

class CalcAdd {
    private _a: number;
    private _b: number;

    public get a(): number {
        return this._a;
    }

    public set a(value: number) {
        this._a = value;;
    }

    public get b(): number {
        return this._b;
    }

    public set b(value: number) {
        this._b = value;
    }

    public add() {
        return this.a + this.b;
    }
}

const interceptor = createInterceptor()

const calcAddIntercepted = interceptor
.intercept(new CalcAdd(), [{
  method: 'a',

  // intercept 'a' getter
  type: callInfo.getter,

  wrapper: (info) => info.get() + (info.source as CalcAdd).b
}, {
  method: 'add',

  // invoke original method
  wrapper: (callInfo) => callInfo.invoke()
}]);

const builder = createBuilder();

builder.register(CalcAdd)
.as(() => calcAddIntercepted);

builder.register(CalcAdd)
.as(() => new CalcAdd())
.named('original');

const container = builder.build();

const calcAddOriginal =
  container.resolveNamed<CalcAdd>(CalcAdd, 'original');
calcAddOriginal.a = 2;
calcAddOriginal.b = 3;

const calcAdd = container.resolve<CalcAdd>(CalcAdd);
calcAdd.a = 2;
calcAdd.b = 3;

const result = `Original: ${calcAddOriginal.add()}; Intercepted: ${calcAdd.add()}`;

export default result

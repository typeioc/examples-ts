import * as typeioc from 'typeioc';

const decorator = typeioc.decorator();

interface IFib {
    value: number;
    next: IFib;
}

@decorator
.provide<F>(F)
.lazy()
.register()
class F {
    constructor(@decorator.by(F).resolve() private f) {
    }

    public next(h, n): IFib {

        const value = h;
        const that = this;

        return {
            value,
            get next() {
                return (that.f() as F).next(n, h+n);
            }
        }
    }
}

const container = decorator.build();

const f = container.resolve<() => F>(F)();
const lazy = f.next(0, 1);

const data = [...Array(10).keys()].reduce((acc) => {
    acc.result.push(acc.lazy.value);
    acc.lazy = acc.lazy.next;
    return acc;
}, { lazy, result: [] });

export default data.result.join(', ')    

import * as typeioc from 'typeioc';

const builder = typeioc.createBuilder();
const decorator = typeioc.createDecorator();

interface IFib {
    value: number;
    next: IFib;
}

builder.register('F')
.as((c: Typeioc.IContainer, h, n) => {
    const a = c.resolve<() => IFib>('F', n, h + n);

    return {
        value: h,
        get next() {
            return a();
        }
   };
})
.lazy();

@decorator
.provide<F>(F)
.lazy()
.register()
class F {
    constructor(@decorator.by(F).resolve() private f) {
    }

    public next(h, n) {

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

function resolveFactoryFunction(container: Typeioc.IContainer) {
    const lazy = container.resolve<() => IFib>('F', 0, 1)();

    const data = [...Array(10).keys()].reduce((acc) => {
        acc.result.push(acc.lazy.value);
        acc.lazy = acc.lazy.next;
        return acc;
    }, { lazy, result: [] });

    return data.result;
}

function resolveDecorator(container: Typeioc.IContainer) {
    const f = container.resolve<() => F>(F)();
    const lazy = f.next(0, 1);

    const data = [...Array(10).keys()].reduce((acc) => {
        acc.result.push(acc.lazy.value);
        acc.lazy = acc.lazy.next;
        return acc;
    }, { lazy, result: [] });

    return data.result;
}

const container1 = builder.build();
const factoryResult = resolveFactoryFunction(container1).join(', ');

const container2 = decorator.build();
const decoratorResult = resolveDecorator(container2).join(', ');

export {
    factoryResult,
    decoratorResult
}

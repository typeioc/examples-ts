import * as typeioc from 'typeioc';

const builder = typeioc.createBuilder();

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

const container = builder.build();
const lazy = container.resolve<() => IFib>('F', 0, 1)();

const data = [...Array(10).keys()].reduce((acc) => {
    acc.result.push(acc.lazy.value);
    acc.lazy = acc.lazy.next;
    return acc;
}, { lazy, result: [] });

export default data.result.join(', ');
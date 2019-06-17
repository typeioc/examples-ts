import * as typeioc from 'typeioc';

const create = (data: string) => ({
    get value() {
        return data;
    }
});

const builder = typeioc.createBuilder();
builder.register(1).asValue('A');
builder.register(2).asValue('B');
builder.register('service')
.as((c) => {
    const a = create(c.resolve<string>(1)).value;
    const b = create(c.resolve<string>(2)).value;
    return `${a} ${b}`;
});

const container = builder.build();
const service = container.resolve('service');

export default service;

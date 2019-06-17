import * as typeioc from 'typeioc';

const builder = typeioc.createBuilder();

class A {
    constructor(private b){}
}

class B {
    constructor(private a){}
}

builder.register('Service A')
.as((c) => {
    const b = c.resolve('Service B');
    return new A(b);
});

builder.register('Service B')
.as((c) => {
    const a = c.resolve('Service A');
    return new B(a);
});

const container = builder.build();

const result = () => {
    try {
        container.resolve('Service A');
    } catch (error) {
        return error.message
    }
}

export default result()

import * as typeioc from 'typeioc';

const builder = typeioc.createBuilder();

class A {
    constructor(private b){}
}

class B {
    constructor(private a){}
}

builder.register(A)
.as((c) => {
    const b = c.resolve(B);
    return new A(b);
});

builder.register(B)
.as((c) => {
    const a = c.resolve(A);
    return new B(a);
});

const container = builder.build();

const result = () => {
    try {
        container.resolve(A);
    } catch (error) {
        return error.message.replace('\n', ' ');
    }
}

export default result()

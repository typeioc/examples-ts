import * as typeioc from 'typeioc';

class A {
    public get name(): string {
        return 'A';
    }
}

class B {

    constructor(private a: A) {
    }

    public get name(): string {
        return `${this.a.name} B`;
    }
}

const builder = typeioc.createBuilder();
builder.register(A).asSelf();
builder.register(B).asSelf(A);

const container = builder.build();
const result = container.resolve<B>(B);

export default result.name;

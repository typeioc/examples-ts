import * as typeioc from 'typeioc';

abstract class ABase {
    public get name(): string {
        return null;
    }
}

class A extends ABase {
    public get name(): string {
        return 'A';
    }
}

class B {

    public get name(): string {
        return 'B';
    }
}

function C(a:A, b:B) {
    this._name = 'C';
    this._a = a;
    this._b = b;
}

C.prototype.name = function(): string {
    return `${this._a.name} ${this._b.name} ${this._name}`;
}

const builder = typeioc.builder();
builder.register(ABase).asType(A);
builder.register('B').asType(B);
builder.register(C).asType(C, ABase, 'B');


const container = builder.build();
const c = container.resolve<{name:() => string}>(C);

export default c.name();

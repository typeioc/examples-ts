import * as typeioc from 'typeioc';

abstract class ABase {
    name: string;
}

class A extends ABase {
    public get name() {
        return 'A';
    }
}

class B {
    constructor(private d: ABase) {
    }

    public get name() {
        return `B : ${this.d.name}`;
    }
}

const substitute = (value: string) => ({
    name: value
});

const builder = typeioc.builder();
builder.register(ABase).asType(A);
builder.register('B1').asType(B, ABase);
builder.register('B2').as((c) => new B(c.resolve(ABase)));

const container = builder.build();

const b1 = container.resolve<B>('B1');
const b2 = container.resolveWithDependencies<B>('B1', [{
    service: ABase,
    factory: () => substitute('A - Substitute 1')
}]);

const b3 = container.resolveWithDependencies<B>('B2', [{
    service: ABase,
    factory: () => substitute('A - Substitute 2')
}]);

const result = `${b1.name} ${b2.name} ${b3.name}`

export default result

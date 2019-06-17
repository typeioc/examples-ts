import * as typeioc from 'typeioc';

const state = {
    data: {},
    add: (value) => {
        const bucket = state.data[value] || 0;
        state.data[value] = bucket + 1;
    }
};

class A {
    constructor() {
        state.add('A');
    }
}

const create = () => {
    state.add('B');

    return { };
};

const builder = typeioc.createBuilder();
builder.register('create')
.as(() => create())
.singleton();

builder.register('A')
.asType(A).singleton();
builder.register(A)
.asSelf().singleton();

const container = builder.build();
const childScope = container.createChild();

const scopes = [ container, container, childScope ];

scopes.forEach((scope) => {
    scope.resolve<A>('A');
    scope.resolve<A>(A);
    scope.resolve('create');
});

const message = Object.keys(state.data)
    .map((key) => `${key}: ${state.data[key]} - instances`)
    .join('; ');

export default message

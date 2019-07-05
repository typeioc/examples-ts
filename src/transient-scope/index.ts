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

const builder = typeioc.builder();
builder.register('create')
.as(() => create());

builder.register('A').asType(A);
builder.register(A).asSelf();

const container = builder.build();
const childScope = container.createChild();

const scopes = [ container, container, childScope ];

scopes.forEach((scope) => {
    scope.resolve<A>('A');
    scope.resolve<A>(A);
    scope.resolve('create');
});

const message = Object.keys(state.data)
    .map((key) => `${key}: ${state.data[key]}`)
    .join('; ');

export default message;

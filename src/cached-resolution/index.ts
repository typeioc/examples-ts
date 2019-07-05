import * as typeioc from 'typeioc';

class A {
    public get name() { return 'A'; }
}

class B {
    public get name() { return 'B'; }
}

const builder = typeioc.builder();
builder.register('A')
    .as(()=> new A());
builder.register('B')
    .as(() => new B())
    .named('b1');

const c = { name: 'C' };

builder.register(c).asValue(c);

const container = builder.build();
const a1 = container
    .resolveWith<A>('A')
    .cache('a1')
    .exec();

const b1 = container
    .resolveWith<B>('B')
    .name('b1')
    .cache()
    .exec();

const c1 = container
    .resolveWith<{name: string}>(c)
    .cache()
    .exec();

const a2 = <A>container.cache.instance.a1;
const b2 = <B>container.cache.instance.b1;
const c2 = container.cache.resolve<{name: string}>('C');

const result = `${a1.name} ${b1.name} ${c1.name} ${a2.name} ${b2.name} ${c2.name}`

export default result

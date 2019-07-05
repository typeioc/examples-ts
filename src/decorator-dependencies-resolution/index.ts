import * as typeioc from 'typeioc';

const decorator = typeioc.decorator();

@decorator
.provide('A')
.register()
class A {
    public get name() { return 'A'; }
}

@decorator
.provide('B')
.named('B1')
.register()
class B {
    public get name() { return 'B'; }
}

class C {
    public get name() { return 'C'; }
}

interface IDependency {
  name: string;
}

@decorator
.provide('D')
.register()
class D {
  constructor(
    @decorator.by('A').resolve()
    private a: IDependency,
    @decorator.by('B').name('B1').resolve()
    private b: IDependency,
    @decorator.resolveValue(new C())
    private c: IDependency) {

  }

  get name() : string {
    return `${this.a.name} ${this.b.name} ${this.c.name}`;
  }
}

const container = decorator.build();
const result = container.resolve<D>('D');

export default result.name

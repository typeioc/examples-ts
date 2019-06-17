import * as typeioc from 'typeioc';

const decorator = typeioc.createDecorator();

abstract class TestBase {
    get name() { return null; }
}

@decorator
.provide<Test>(TestBase)
.initializeBy((c, item) => { item.init(); return item; })
.dispose((item) => item.dispose())
.named('TestClass')
.register()
class Test extends TestBase {
    private _name = 'Test';

    constructor() {
        super();
    }

    get name() { return this._name; }

    public init() {
      this._name += ' initialized';
    }

    public dispose() {
      this._name += ' disposed';
    }
}

const container = decorator.build();
const actual = container.resolveNamed<TestBase>(TestBase, 'TestClass');

container.dispose();

export default actual.name

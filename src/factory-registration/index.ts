import * as typeioc from 'typeioc';

class AClass {

    get name() {
        return 'A';
    }
}

class BClass {

    constructor(private aClass: AClass){}

    public get name() {
        return `${this.aClass.name} B`;
    }
}

abstract class CClassBase {
    public get name() { return null; }
}

class CClass extends CClassBase {

    constructor(
        private p1: string,
        private p2: string,
        private p3: string){
          super();
        }
        // these parameters will be passed as part of factory resolution

    public get name() {
        return `C ${this.p1} ${this.p2} ${this.p3}`;
    }
}

const builder = typeioc.builder();
builder.register('A Class')
    .as(() => new AClass());

builder.register('B Class')
    .as((c) => {
        const a = c.resolve<AClass>('A Class');
        return new BClass(a);
    });

builder.register(CClassBase)
    .as((c, p1, p2, p3) => new CClass(p1, p2, p3));

const container = builder.build();
const b = container.resolve<BClass>('B Class');
const c = container.resolve<CClassBase>(CClassBase, 1, 2, 3);

const result = `${b.name} ${c.name}`

export default result

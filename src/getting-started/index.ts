import * as typeioc from 'typeioc'

class SimpleClass {
    constructor(private _notSoSimple: NotSoSimpleClass) {
    }

    public get name() : string {
        return `Simple : ${this._notSoSimple.name}`;
    }
}

class NotSoSimpleClass {
    public get name() : string {
        return 'Not So Simple';
    }
}

const builder = typeioc.createBuilder();
builder.register(NotSoSimpleClass)
.as(() => new NotSoSimpleClass());

builder.register(SimpleClass)
.as((c) => {
    const notSoSimple = c.resolve<NotSoSimpleClass>(NotSoSimpleClass);
    return new SimpleClass(notSoSimple);
});

const container = builder.build();
const instance = container.resolve<SimpleClass>(SimpleClass);

export default instance.name
